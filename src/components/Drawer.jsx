import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import DialpadIcon from '@mui/icons-material/Dialpad';
import {useState} from 'react';
import { Link} from "react-router-dom";

import {
    AlertDialog,
    AlertDialogLabel,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogContent,
  } from "@reach/alert-dialog";

export default function TemporaryDrawer() {
  const [showDialog, setShowDialog]= useState(false);
  const open = () =>setShowDialog(true);
  const close = () =>setShowDialog(false);
  const cancelRef = React.useRef();

  const [state, setState] = useState({
    
    left: false,
    bottom: false,
    right: false,
  });
  
  let bagValue = localStorage.getItem('bagValue')

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
   
  let bagV= localStorage.getItem('bagValue')

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Bag', 'Fav List'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? 
                 <Badge badgeContent={bagV} color="secondary">
                    <Link  to="/ShopBag" target="_blank"  >
                        <AddShoppingCartIcon  color="action" onClick={<Link  to="/ShopBag" target="_blank"  />}  /> 
                    </Link>                    
                </Badge> : <FavoriteIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Acoount', 'Log in'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <PermIdentityIcon />:<LogoutIcon />  }   
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const listB = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Adress', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? 
                <div>
                <HomeIcon onClick={open}  /> {showDialog &&(
                <AlertDialog leastDestructiveRef={cancelRef}>
                <AlertDialogLabel>Location</AlertDialogLabel>

                <AlertDialogDescription>
                    Are you sure you want to delete something? This action is permanent,
                    and we're totally not just flipping a field called "deleted" to
                    "true" in our database, we're actually deleting something.
                </AlertDialogDescription>

                <div className="alert-buttons">
                    <button ref={cancelRef} onClick={close}>
                    close
                    </button>
                </div>
            </AlertDialog>
            )}
            </div>
                : <DialpadIcon/>}
              </ListItemIcon>
              <p> {index % 2 ===0 ? <span>Ayaş Ankara Yolu Bulvarı No:93 06796 Etimesgut/ANKARA  </span>
              : <span>0312 564 21 35  </span>} </p>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem> 
          
        ))}
      </List>
    </Box>
  );
 

  return (
    
    <div>
   
      
    
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {listB(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
