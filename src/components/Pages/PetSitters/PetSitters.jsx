import React, {useState, useEffect} from 'react';

import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  text: {
    width: '80%',
    margin: '20px auto',
    textAlign: 'center',
  [theme.breakpoints.down("sm")]: {
    width: '50%',
  }
}

}));


const PetSitters = () => {
  const classes = useStyles();

  let {Sitters, getSitters} = useStore();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [loadList, setLoadList] = useState(false);

  useEffect(() => {
    getSitters()
  }, [])

  return (
    <div className='container-sitters'>
       {!loadList ?
       <React.Fragment>
         <Navbar
          isActiveLinkSitters={true}
         />
         <h2 className="h2-sitters">Find a sitter your pet love!</h2>
         <p className={classes.text}>
            If you are lonely and love animals, but you haven't got opportunity to keep them at home ... or if you are going to have a pet, but don't have any experience use our offer to get such experience while the owner is away
          </p>
          <div className="button-block">
          <Button style={{width:'200px', padding:'10px', background:' #2196f3', color:'#e3f2fd' , fontSize:'12px'}}
            variant="contained"
            color="#90caf9"
            onClick={handleOpen}
            className="buttonAddSitters"
          >
            Become a pet sitter
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
    </div>
)
}

export default PetSitters;
