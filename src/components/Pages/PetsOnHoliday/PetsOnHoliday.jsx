import React, { useState } from 'react';

import useStore from '../../../store/Store.js';

import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  ClickAwayListener,
  Chip,
  CircularProgress,
  FormControl,
  FormControlLabel,
  TablePagination
} from "@material-ui/core";

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import Navbar from '../../Navbar/navbar'
import Footer from '../../Footer/Footer'
import PetsCard from './PetCard';
import PetForm from '../../PetForm/PetForm';

import "./PetsOnHoliday.scss";

const useStyles = makeStyles((theme) => ({
  filterRadioMenu: {
    display: 'block',
    minWidth: 275,
    position: 'absolute',
    top: 50,
    left: 0,
    zIndex: 10,
  },
  filterMenuHide: {
    display: 'none'
  },
}));

const ALL_PETS = 'All';

const PETS_LIST = [
  'dog',
  'cat',
  'parrot'
];

const getFilteredPets = (filtersList, arr) => {
  if (filtersList.includes(ALL_PETS)) {
    return arr.slice();
  }
  const filteredPets = arr.slice().filter((item) => (
    filtersList.some(elem => item.pet.includes(elem))
  ));
  return filteredPets;
};

const PetsOnHoliday = () => {
  const classes = useStyles();

  let { Pets } = useStore();

  const [open, setOpen] = useState(false);
  const [loadList, setLoadList] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [specializationValue, setSpecializationValue] = useState(new Set([ALL_PETS]));
  const [isSpecializationMenuVisible, setIsSpecializationMenuVisible] = useState(false);
  const handleClickAway = () => {
    setIsSpecializationMenuVisible(false);
  };

  return (
    <div className='pets-page'>
      <Navbar />
      <div className='pets-main'>
        <div className='container'>
          {!loadList ?
            <React.Fragment>
              <div className="button-block">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleOpen}
                  className="buttonAdd"
                >
                  Put a card
            </Button>
              </div>
              <ClickAwayListener onClickAway={handleClickAway}>
                <Box
                  style={{ position: 'relative' }}
                >
                  <Chip
                    color="primary"
                    size="medium"
                    label={
                      <Box component="span">
                        Filter pets:
                      <span
                          style={{ marginLeft: '10px' }}
                        >
                          {[...specializationValue].join(', ')}
                        </span>
                      </Box>
                    }
                    onClick={() => {
                      setIsSpecializationMenuVisible(prev => !prev);
                    }}
                  />
                  <Card className={isSpecializationMenuVisible ? classes.filterRadioMenu : classes.filterMenuHide} >
                    <CardContent>
                      <FormControl component="fieldset">
                        {PETS_LIST.map((item) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="secondary"
                                checked={specializationValue.has(item)}
                                onChange={event => {
                                  setSpecializationValue(state => {
                                    const newState = new Set(state);
                                    console.log(state);
                                    if (event.target.checked) {
                                      newState.delete(ALL_PETS);
                                      newState.add(item);
                                    } else {
                                      newState.delete(item);

                                      if (newState.size === 0) {
                                        newState.add(ALL_PETS);
                                      }
                                    }
                                    return newState;
                                  })
                                }}
                                name={item}
                              />
                            }
                            label={item}
                          />
                        ))}
                      </FormControl>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          style={{ fontWeight: 500, fontSize: '14px', lineHeight: '24px', color: '#2f80ed' }}
                          onClick={() => {
                            setSpecializationValue(new Set([ALL_PETS]));
                            setIsSpecializationMenuVisible(prev => !prev);
                          }}
                        >
                          Сбросить
                      </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Box>
              </ClickAwayListener>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <PetForm
                  setLoadList={setLoadList}
                  handleClose={handleClose}
                />
              </Modal>
              <div className='pet-wrapper'>
                {getFilteredPets([...specializationValue], Pets.list).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((el, index) => <PetsCard  {...el} key={index} />)}
              </div>
              <TablePagination
                rowsPerPageOptions={[4, 8, 16, 32]}
                component="div"
                count={Pets.list.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                labelRowsPerPage={"Show:"}
                labelDisplayedRows={
                  ({ from, to, count }) => `Shown: ${from}-${to} from ${count !== -1 ? count : `more than ${to}`}`
                }
                style={{ width: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}
              />
            </React.Fragment> : <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress size='200px' thickness='2' /></div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default PetsOnHoliday;