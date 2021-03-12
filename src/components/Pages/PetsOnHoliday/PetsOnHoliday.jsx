import React, {useState} from 'react';

import useStore from '../../../store/Store.js';

import {
  CircularProgress
} from "@material-ui/core";

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import PetsCard from './PetCard';
import PetForm from '../../PetForm/PetForm';

import "./PetsOnHoliday.scss"

const PetsOnHoliday = () => {
  let {Pets} = useStore();

  const [open, setOpen] = useState(false);
  const [loadList, setLoadList] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='pets-page'>
      {!loadList ? 
      <React.Fragment>
        <div className='pet-wrapper container'>
        {Pets.list.map((el, index) => <PetsCard  {...el} key={index} />)}
        </div>
        <div className="button-block">
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleOpen}
            className="buttonAdd"
          >
            Add
          </Button> 
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
        <PetForm
          handleChange={handleClose}
          setLoadList={setLoadList}
        />
        </Modal>
      </React.Fragment> : <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress size='200px' thickness='2'/></div>
      } 
    </div>
  )
};

export default PetsOnHoliday;