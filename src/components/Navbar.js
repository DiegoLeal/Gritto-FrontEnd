import React, {useState} from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilLeftMenuSlider from "@material-ui/core/Drawer";

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,   
    Divider,
    List,
    Typography,
    Box,      
    ListItemIcon
} from "@material-ui/core";
import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    ContactMail   
} from "@material-ui/icons";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
        width:250,
        background: "whitesmoke",
        height: "100%"
    },
    listItem: {
        color: "black"
    }
}));

const menuItens = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Meu Perfil",
        listPath: "/meuperfil"
    },
    {
        listIcon: <Apps/>,
        listText: "Históricos",
        listPath: "/historicos"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Agenda",
        listPath: "/agenda"
    }
]

const Navbar = () => {
    const [state, setState] = useState ({
        left: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });

    const classes = useStyles();

    const sideList = slider => (

        <Box className={classes.menuSliderContainer} 
        component="div" 
        onClick={toggleSlider(slider, false)}
        >            
            <Divider />
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
        <>
            <Box component="nav">
                <AppBar style={{ background: "#7BB0FF", maxWidth: "100%" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("left", true)}>
                            <Menu style={{ color: "white" }} />
                        </IconButton>
                        <Typography variant="h5" >
                            <Link className='logo' to='/' style={{ color: "white", textDecoration: "none" }}>
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
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Navbar;
