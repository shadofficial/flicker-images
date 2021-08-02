import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ImageCard(props) {
    const { photo, isPreview = false } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    if(!isPreview)  setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ImageCard photo={photo} isPreview={true}/>
    </div>
  );

  return (
    <div>
      <Card>
        <CardContent >
            <img class="imgcard"
                src={`https://live.staticflickr.com/${photo?.server}/${photo?.id}_${photo?.secret}.jpg`}
                alt={photo?.title}
                onClick={handleOpen}
            /> 
        </CardContent>
        </Card>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby={photo?.title}
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    </div>
  );
}