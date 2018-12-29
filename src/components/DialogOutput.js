/**
 * ToastMessage:
 * Use Material UI snackbar to display custom messages
 * https://material-ui.com/demos/snackbars/
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import style from './../styles/StyledDialog'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  // state = {
  //   open: false,
  // };

  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  render() {

    const { 
      visible,
      title,
      content,
      status,
      onClose,
    } = this.props

    const { Container } = style

    return (
      <div>
        <Dialog
          fullWidth={true}
          maxWidth={'sm'}
          open={visible}
          TransitionComponent={Transition}
          keepMounted
          onClose={onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          
        >
          <Container className={status}>
            <DialogTitle id="alert-dialog-slide-title">
              { title }
              {/* {"Use Google's location service?"} */}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                { content }
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Container>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;





