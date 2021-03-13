import React, {useState} from 'react';

import {
  CircularProgress,
} from "@material-ui/core";

import Modal from '@material-ui/core/Modal';

import useStore from '../../../store/Store.js';

import Navbar from '../../Navbar/navbar'
import Button from '@material-ui/core/Button';
import CardSiters from './CardSiters';
import Footer from '../../Footer/Footer';
import SitterForm from '../../SitterForm/SitterForm';

import "./PetSitters.scss";

const PetSitters = () => {

  let {Sitters} = useStore();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [loadList, setLoadList] = useState(false);

  console.log(Sitters)

  return (
    <React.Fragment>
       {!loadList ?
       <React.Fragment>
         <Navbar
          isActiveLinkSitters={true}
         />
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
          <div className= 'pet-wrapper container'>
            {Sitters.list.map((el, index)=> <CardSiters key={index} {...el}/>)}
          </div>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
            <SitterForm
              setLoadList={setLoadList}
              handleClose={handleClose}
            />
            </Modal>
          <Footer/>
       </React.Fragment> : <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress size='200px' thickness='2'/></div>}
    </React.Fragment>
)
}

export default PetSitters;
