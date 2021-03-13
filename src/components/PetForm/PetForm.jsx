import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import useStore from '../../store/Store';

import validator from "validator";

import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core"; 

import AvatarCustom from '../AvatarCustom/AvatarCustom';
import MainButtons from '../MainButtons/MainButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
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


const PetForm = ({handleChange, setLoadList}) => {
  const classes = useStyles();
  let {Pets, updatePets} = useStore();

  const initialFileState = {
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: null
  };

  const [fileState, setFileState] = useState(initialFileState);

  const petInit = {
    name: '',
    img: null,
    dayStart: '2021-03-15',
    dayEnd: '2021-03-15',
    comment: '',
    contact: '',
    phone: '',
    pet: ''
  }
  const [pet, setPet] = useState(petInit);

  const [isFormValid, setFormValid] = useState(false);
  const [fieldsValid, setFieldsValid] = useState({
    name: pet.name !== '' ? true : false,
    dayStart: pet.dayStart !== '' ? true : false,
    dayEnd: pet.dayEnd !== '' ? true : false,
    comment: pet.comment !== '' ? true : false,
    contact: pet.contact !== '' ? true : false,
    phone: pet.phone !== '' ? true : false,
    pet: pet.pet !== '' ? true : false,
  });

  const isNonEmpty = (n) => !validator.isEmpty(n);
  const validatePhone = (p) => validator.isMobilePhone(p, "ru-RU");

  const validate = {
    name: isNonEmpty,
    dayStart: isNonEmpty,
    dayEnd:isNonEmpty,
    contact: isNonEmpty,
    comment: isNonEmpty,
    phone:  validatePhone,
    pet: isNonEmpty,
  };

  const updateField = (key) => (input) => {
    let value = input.target ? input.target.value : input;
    let isValid = validate[key](value);
    setFieldsValid({ ...fieldsValid, [key]: isValid });
    setPet({ ...pet, [key]: value });
  };

  const checkFieldsValid = () => setFormValid(!Object.values(fieldsValid).some((v) => v === false));

  let setList = (list)=>{
    setTimeout(()=>{
      updatePets({
        list: [...Pets.list, {
          name: pet.name,
          img: fileState.selectedFile,
          dayStart: pet.dayStart,
          dayEnd: pet.dayEnd,
          comment: pet.comment,
          contact: pet.contact,
          phone: pet.phone,
          pet: pet.pet
        }]
      })
    },1500);
  };

  let getList = () => new Promise(resolve => {
    handleChange();
    setLoadList(true);
    setList(Pets.list);
    setTimeout(()=>{
      resolve(Pets.list);
      setLoadList(false);
    }, 1000);
  });

  useEffect(() => {checkFieldsValid()},[pet]);

  return (
    <Paper elevation={2} className={classes.root}>
      <form id="employees-form" style={{width: '100%', paddingBottom: '50px'}}>
        <Grid container direction="column" spacing={1} alignItems="stretch">
          <Grid item style={{display: 'flex', marginBottom: '15px', padding: '0'}}>
            <Typography variant="h6" style={{width: '100%', fontSize: '30px', textAlign: 'center', color: 'rgb(136, 14, 58)', marginBottom: 12, fontWeight: 600}}>
              Add notice
            </Typography>
          </Grid>
          <Grid item style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '15px', padding: '0'}}>
            <AvatarCustom
              fileState={fileState}
              setFileState={setFileState}
              avatarSrc={fileState.selectedFile}

            />
            <TextField 
              id="pet-name"
              label="Pets's name"
              value={pet.name}
              className={classes.textFieldName}
              error={!fieldsValid.name}
              helperText={fieldsValid.name ? '' : 'Please,add your pet name'}
              onChange={updateField("name")}
              />
              <TextField 
              id="pet-kind"
              label="Kind of animal"
              value={pet.pet}
              className={classes.textFieldKind}
              error={!fieldsValid.pet}
              helperText={fieldsValid.pet ? '' : 'Please,add kind of pet'}
              onChange={updateField("pet")}
              />
          </Grid>
          <Grid container style={{display: 'flex', marginBottom: '15px'}}>
            <TextField
              id="date-from"
              label="From"
              type="date"
              className={classes.textFieldDate}
              value={pet.dayStart}
              onChange={updateField("dayStart")}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            />
            <TextField
              id="date-to"
              label="To"
              type="date"
              size="normal"
              className={classes.textFieldDate}
              style={{marginLeft: 'auto'}}
              value={pet.dayEnd}
              onChange={updateField("dayEnd")}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            />
          </Grid>
          <Grid item style={{marginBottom: '15px', padding: '0'}}>
            <TextField
              style={{width: '100%'}}
              id="pet-comment"
              multiline
              rows={2}
              label="Information about your pet"
              value={pet.comment}
              error={!fieldsValid.comment}
              helperText={fieldsValid.comment ? '' : 'Please, fill this field'}
              onChange={updateField("comment")}
            />
          </Grid>
          <Grid item style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '15px'}}>
            <Grid item className={classes.textFieldOwner}>
              <TextField 
                id="pet-contact"
                label="Owner name"
                value={pet.contact}
                style={{width: '100%'}}
                error={!fieldsValid.contact}
                helperText={fieldsValid.contact ? '' : 'Please, add your name'}
                onChange={updateField("contact")}
                />
            </Grid>
            <Grid item className={classes.textFieldOwner}>
              <TextField 
                id="pet-contact-phone"
                label="Owner phone"
                placeholder="89876543210"
                value={pet.phone}
                style={{width: '100%'}}
                error={!fieldsValid.phone}
                helperText={fieldsValid.phone ? '' : 'Please, add your contact phone'}
                onChange={updateField("phone")}
                />
            </Grid>
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
    </Paper>
  )
};

export default PetForm;