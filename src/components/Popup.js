import * as React  from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import ClearIcon from "@mui/icons-material/Clear";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";





const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Popup = () => {
  const [isOpen, setisOpen] = React.useState(false);
  const handleisOpen = () => setisOpen(true);
  const handleClose = () => setisOpen(false);


  const [user,setUser] = useState({
     email:"",
  });
  // let email,value;
  const getUserData= (event) => {
    console.log(event.target.value);
// email = event.target.email;
// value = event.target.value;
// setUser({...user,[email]:value});
    setUser(event.target.value);
  };
  const postData = () =>{};


  // const notify = () => toast("congratulations- you will get newslatter end of the month");


  
  return (
    <div>
      <Button onClick={handleisOpen}> subscribe </Button>
<form method = "POST">


      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // method = "POST"
      >
        <Box sx={style}>
          <div align="Right">
            <ClearIcon onClick={handleClose} />
          </div>

          <Stack spacing={1}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Get a Newsletter
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Subscribe our newsletter to receive the latest news and exclusive
              offers every week. No spam.
            </Typography>
            <TextField fullWidth label="Enter your Email" id="fullWidth"
            value={user.email}
            onChange = {getUserData}
             />
           
            <Button variant="contained" endIcon={<SendIcon />} onClick={()=>{
                      postData();
                      handleClose();
            }}  >
            {/* <ToastContainer position="top-center" autoClose={2000} /> */}
              Send
            </Button>

          

            <Button onClick={handleClose} variant="text">
              No thanks
            </Button>
          </Stack>
        </Box>
      </Modal>
</form>
    </div>
  );
};

export default Popup;
