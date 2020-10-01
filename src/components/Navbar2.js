import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilLeftMenuSlider from "@material-ui/core/Drawer";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,   
    List,
    Typography,
    Box,
    ListItemIcon,
    Menu,
    MenuItem
} from "@material-ui/core";
import {
    AssignmentInd,    
    AccountCircle,
    Home,
    Apps    
} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)    
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: "#7BB0FF", 
    maxWidth: "100%"
}
}));

const menuItens = [
    {
        listIcon: <Home />,
        listText: "Página Inicial",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Meu Perfil",
        listPath: "/meuperfil"
    },
    {
        listIcon: <Apps />,
        listText: "Históricos",
        listPath: "/historicos"
    },
    {
        listIcon: <AccessTimeIcon />,
        listText: "Agenda",
        listPath: "/agenda"
    }
]

export default function MenuAppBar() {
    const classes = useStyles();  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl); 
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };   
    const handleClose = () => {
        setAnchorEl(null);
    }; 
    const [state, setState] = useState({
        left: false
    });
    const toggleSlider = ((slider, open) => () => {
    setState({ ...state, [slider]: open });
    });
    const sideList = slider => (
    <Box className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
    >
        <List>
            {menuItens.map((lisItem, key) => (
                <ListItem button key={key} component={Link} link="true" to={lisItem.listPath} >
                    <ListItemIcon className={classes.listItem}>
                        {lisItem.listIcon}
                    </ListItemIcon>
                    <ListItemText
                        className={classes.listItem}
                        primary={lisItem.listText}
                    />
                </ListItem>
            ))}
        </List>
    </Box>
    )
  return (
        <div className={classes.root}>      
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <IconButton 
                        onClick={toggleSlider("left", true)} 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu">
                            <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link 
                            className='logo' to='/' 
                            style={{ 
                                color: "white", 
                                textDecoration: "none" 
                                }}
                        >
                            GRITTO
                        </Link>
                    </Typography> 
                    <MobilLeftMenuSlider
                        anchor="left"
                        open={state.left}
                        onClose={toggleSlider("left", false)}
                    >
                        {sideList("left")}
                    </MobilLeftMenuSlider>        
                        <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                            <MenuItem onClick={handleClose}>Configurações</MenuItem>
                        </Menu>
                        </div>         
                </Toolbar>
            </AppBar>
        </div>
    );
}