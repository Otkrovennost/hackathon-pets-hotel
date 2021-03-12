import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import {
  Avatar,
  Box,
  IconButton,
  SvgIcon,
} from '@material-ui/core';

import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  commonAvatarDisplayNone: {
    display: 'none',
  },
  commonAvatarRoot: {
    position: 'relative',
    marginBottom: '15px',
  },
  commonAvatarLarge: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    '&:hover + label[data-button-visible="hovered-visible"]': {
      visibility:'visible',
    }
  },
  commonAvatarHiddenElement: {
    visibility: 'hidden',
    position: "absolute",
    top: 24,
    left: 24,
    zIndex: 20,
  },
  commonAvatarShowedButton: {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 20,
    '&:hover': {
      visibility:'visible',
    }
  },
  commonAvatarCamera: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    zIndex: 20,
    '&:hover': {
      color: '#fff',
      transition: '300ms',
      visibility:'visible',
    }
  },
  commonAvatarCameraLight: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: '#fff',
    zIndex: 2,
  },
  commonAvatarCameraLargeIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    zIndex: 20,
    position: "absolute",
    top: 13,
    left: 12,
    opacity: '0.7',
    '&:hover': {
      color: '#fff',
      transition: '300ms',
      visibility:'visible',
      cursor: 'pointer',
    }
  }
}));

const AvatarCustom = ({
  fileState,
  setFileState,
  avatarSrc,
}) => {
  const classes = useStyles();

  const handleUploadClick = event => {
    let file;
    let reader;
    if (event.target.files[0]) {
      file = event.target.files[0];
      reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function(e) {
        setFileState({
          selectedFile: [reader.result]
        });
      };

      setFileState({
        mainState: "uploaded",
        selectedFile: event.target.files[0],
        imageUploaded: 1
      });
    }
  };

  return (
    <Box
      className={classes.commonAvatarRoot}
    >
      <Avatar
        src={avatarSrc}
        className={classes.commonAvatarLarge}
      >
        <SvgIcon />
      </Avatar>
      <label
        className={fileState.selectedFile ? classes.commonAvatarHiddenElement : classes.commonAvatarShowedButton}
        htmlFor="icon-button-file"
        data-button-visible="hovered-visible"
      >
        {!fileState.selectedFile
          ? (
            <IconButton
              className={!fileState.selectedFile ? classes.commonAvatarCamera : classes.commonAvatarCameraLight}
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera
                className={classes.commonAvatarCamera}
              />
              </IconButton>
          )
          : (
            <PhotoCamera className={classes.commonAvatarCameraLargeIcon} />
          )
        }
      </label>
      <input
        accept="image/*"
        className={classes.commonAvatarDisplayNone}
        id="icon-button-file"
        type="file"
        onChange={handleUploadClick}
        data-button-visible="hovered-visible"
      />
    </Box>
    )
}

export default AvatarCustom;