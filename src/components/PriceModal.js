import * as React from "react";
import Grid from "@mui/material/Grid";
import { List,  Modal,  Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fab from '@mui/material/Fab';
import { Box } from "@mui/system";

import { NavLink } from "react-router-dom"

// import Button from '@mui/material/Button';
import Navbar from "./Navbar";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
};

const styleForRupeeIcon = {
  width: " 20px",
};
 
const PriceModal = () => {

  const [open, setpop] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setpop(false);
 return (
   <div>

{/* <Button onClick={handleOpen}>Open modal</Button> */}

<Modal
 open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
>
<Box  sx={style} > 
   <div className="App" align="center">
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Typography
            variant="h4"
            component="h3"
            style={{ background: "#b2a57d" }}
            sx={{color:'primary.contrastText'}}
          >
            BASIC
           
          </Typography>
          <Typography style={{ background: "#ffecb3" }} variant="h5">
            50
            <CurrencyRupeeIcon style={styleForRupeeIcon}/> <br/>
            per month
          </Typography>
        
          <List style={{ background: "#fff3e0" }}>
            <ListItemText>
              <CheckCircleOutlineIcon color="secondary" />
              Unlimited access to NDTV.com and the NDTV app
            </ListItemText>
            <ListItemText>
              
              <CheckCircleOutlineIcon color="secondary" /> Free Update
            </ListItemText>
            <ListItemText>
              
              <CheckCircleOutlineIcon color="secondary" /> chat support
            </ListItemText>
          </List>
<List style={{ background: "#f6ff9a"}} onClick={handleClose} >
<NavLink  exact style={{textDecoration:"none"}} to="/buy">
<Fab   align="" style={{ background: "#ffb74d" }}>
<AddShoppingCartIcon color="secondary"/> BUY 
</Fab>
</NavLink>

</List>
</Grid>



<Grid item xs={4}>
          <Typography
            variant="h4"
            component="h3"
            style={{ background: "#008394" }}
            sx={{color:'primary.contrastText'}}
          >
            STANDARD
            {/* <Divider /> */}
          </Typography>
          <Typography style={{ background: "#00bcd4" }} variant="h5">
            75
            <CurrencyRupeeIcon style={styleForRupeeIcon}/> <br/>
            per month
          </Typography>
          {/* <Divider /> */}
          <List style={{ background: "#fff3f4" }}>
            <ListItemText>
              <CheckCircleOutlineIcon color="secondary" />
              Unlimited access to NDTV.com and the NDTV app
            </ListItemText>
            <ListItemText>
              
              <CheckCircleOutlineIcon color="secondary" /> Free Update
            </ListItemText>
            <ListItemText>
              
              <CheckCircleOutlineIcon color="secondary" /> chat support
            </ListItemText>
          </List>

<List style={{ background: "#33c9dc"}} onClick={handleClose}  >
<NavLink exact
style={{
  textDecoration:"none"
}
  
}
 to="/buy">
<Fab align="" style={{ background: "#ffb74d" }} >
<AddShoppingCartIcon color="secondary"/> BUY
</Fab>
</NavLink>

</List>

</Grid>


<Grid item xs={4}>
          <Typography
            variant="h4"
            component="h3"
            style={{ background: "#a76b6b" }}
            sx={{color:'primary.contrastText'}}
          > 
            PREMIUM
            {/* <Divider /> */}
          </Typography>
          <Typography style={{ background: "#ef9a9a " }} variant="h5">
            100
            <CurrencyRupeeIcon style={styleForRupeeIcon}/> <br/>
            per month
          </Typography>
          {/* <Divider /> */}
          <List style={{ background: "#ffb74d" }} >
            <ListItemText>
              <CheckCircleOutlineIcon color="secondary" />
              Unlimited access to NDTV.com and the NDTV app
            </ListItemText>
            <ListItemText>
              
              <CheckCircleOutlineIcon color="secondary" /> Free Update
            </ListItemText>
            <ListItemText>
              
              <CheckCircleOutlineIcon color="secondary" /> chat support
            </ListItemText>
            
          </List>

<List style={{ background: "#f06292"}} onClick={handleClose} >
<NavLink style={{textDecoration:"none"}} exact to="/buy">
<Fab align="" style={{ background: "#ffb74d" }}>
<AddShoppingCartIcon color="secondary"/> BUY
</Fab>
</NavLink>

</List>

</Grid>
</Grid>

</div>
</Box>
 
</Modal>
 <Navbar setpop={setpop} />
   </div>

);
};

export default PriceModal;


