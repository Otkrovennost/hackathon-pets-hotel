import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import useStore from '../../store/Store';

import validator from "validator";

import {
  Button,
  Box,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core"; 

import CloseIcon from '@material-ui/icons/Close';

import AvatarCustom from '../AvatarCustom/AvatarCustom';
import MainButtons from '../MainButtons/MainButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[2],
    padding: '30px', 
    width: '50%', 
    margin: '0 auto', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down("md")]: {
      width: '90%',
    },
  },
  textFieldName: {
    width: '100%',
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      width: '35%', 
      marginLeft: '3%',
    },
  },
  textFieldKind: {
    width: '100%',
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      width: '35%', 
      marginLeft: '3%',
    },
  },
  textFieldDate: {
    width: '100%',
    [theme.breakpoints.up("sm")]: {
      width: '40%', 
      fontSize: '18px',
    },
  },
  textFieldOwner: {
    width: '100%',
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      width: '40%', 
      marginBottom: '15px'
    },
  },
  resize:{
    fontSize: '20px'
  },
}));

const SitterForm = ({handleClose, setLoadList}) => {
  const classes = useStyles();

  let {Sitters, updateSitters} = useStore();

  const initialFileState = {
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: null
  };

  const [fileState, setFileState] = useState(initialFileState);

  const sitterInit = {
    name: '',
    pict: null,
    offer: '',
    adress: '',
    phone: '',
  }
  const [sitter, setSitter] = useState(sitterInit);

  const [isFormValid, setFormValid] = useState(false);
  const [fieldsValid, setFieldsValid] = useState({
    name: sitter.name !== '' ? true : false,
    offer: sitter.offer !== '' ? true : false,
    adress: sitter.adress !== '' ? true : false,
    phone: sitter.phone !== '' ? true : false,
  });

  const isNonEmpty = (n) => !validator.isEmpty(n);

  const validate = {
    name: isNonEmpty,
    offer: isNonEmpty,
    adress: isNonEmpty,
    phone: isNonEmpty,
  };

  const updateField = (key) => (input) => {
    let value = input.target ? input.target.value : input;
    let isValid = validate[key](value);
    setFieldsValid({ ...fieldsValid, [key]: isValid });
    setSitter({ ...sitter, [key]: value });
  };

  let setList = (list)=>{
    setTimeout(()=>{
      console.log(fileState.selectedFile);
      updateSitters({
        list: [{
          name: sitter.name,
          pict: fileState.selectedFile[0],
          raitingPos: '0',
          raitingNeg: '0',
          reviews: 'reviews(0)',
          offer: sitter.offer,
          adress: sitter.adress,
          phone: sitter.phone,
        }, ...Sitters.list]
      })
    },1500);
  };

  let getList = () => new Promise(resolve => {
    handleClose();
    setLoadList(true);
    setList(Sitters.list);
    setTimeout(()=>{
      resolve(Sitters.list);
      setLoadList(false);
    }, 1000);
  });


  const checkFieldsValid = () => setFormValid(!Object.values(fieldsValid).some((v) => v === false));

  useEffect(() => {checkFieldsValid()},[sitter]);

  return (
    <Paper elevation={2} className={classes.root}>
      <form id="employees-form" style={{width: '100%', paddingBottom: '50px'}}>
        <Grid container direction="column" spacing={1} alignItems="stretch">
          <Grid item style={{display: 'flex', marginBottom: '15px', padding: '0'}}>
            <Typography variant="h6" style={{width: '100%', fontSize: '30px', textAlign: 'center', color: 'rgb(136, 14, 58)', marginBottom: 12, fontWeight: 600}}>
              Sign in as a pet-sitter
            </Typography>
          </Grid>
          <Grid item style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '15px', padding: '0'}}>
            <AvatarCustom
              fileState={fileState}
              setFileState={setFileState}
              avatarSrc={fileState.selectedFile}

            />
            <TextField 
              id="sitter-name"
              label="Name"
              value={sitter.name}
              className={classes.textFieldName}
              error={!fieldsValid.name}
              helperText={fieldsValid.name ? '' : 'Please,add your name'}
              onChange={updateField("name")}
              />
              <TextField 
              id="sitter-phone"
              label="Phone"
              value={sitter.phone}
              className={classes.textFieldKind}
              error={!fieldsValid.phone}
              helperText={fieldsValid.phone ? '' : 'Please,add your mobile'}
              onChange={updateField("phone")}
              />
          </Grid>
          <Grid item style={{marginBottom: '15px'}}>
              <TextField 
                id="sitter-address"
                label="Address"
                value={sitter.adress}
                style={{width: '100%'}}
                error={!fieldsValid.adress}
                helperText={fieldsValid.adress ? '' : 'Please, add your address'}
                onChange={updateField("adress")}
                />
          </Grid>
          <Grid item style={{marginBottom: '15px', padding: '0'}}>
            <TextField
              style={{width: '100%'}}
              id="sitter-offer"
              multiline
              rows={2}
              label="Your offer"
              value={sitter.offer}
              error={!fieldsValid.offer}
              helperText={fieldsValid.offer ? '' : 'Please, fill this field'}
              onChange={updateField("offer")}
            />
          </Grid>
    
          <Box style={{marginLeft: 'auto'}}>
            <MainButtons
              successLabel={'Add'}
              successOnClick={getList}
              successDisabled={!isFormValid}
            />
          </Box>
        </Grid>
      </form>
      <Button 
        aria-label="Закрыть" 
        onClick={handleClose}
        style={{marginLeft: 'auto', alignSelf: 'flex-start'}}
      >
        <CloseIcon/>
      </Button>
    </Paper>
  )
};

export default SitterForm;