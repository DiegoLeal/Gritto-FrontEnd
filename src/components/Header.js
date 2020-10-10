import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button} from "@material-ui/core";
import Typed from 'react-typed';
import {Link} from 'react-router-dom';


// CSS STYLES
const useStyles = makeStyles(theme => ({  
    title: {
        color: "#ffffec",
        fontSize: "5rem"
    },
    subtitle: {
        color: "tan",
        fontSize: "2rem",
        marginBottom: "3rem"
    },    
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign:"center",             
        zIndex: 1        
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.typedContainer} style={{maxWidth: "100%" }}>          
                <Typography className={classes.title} variant="h4" >
                    <Typed strings={["Precisando? Dá um GRITTO!"]} typeSpeed={40} />
                </Typography>
                <br/>           
                <Typography className={classes.subtitle} variant="h5">
                    <Typed 
                    strings={["Seviços", "Qualidade", "Garantia" ]} 
                    typeSpeed={40} 
                    backSpeed={60}              
                    loop
                    style={{ textDecoration: "none" }}
                    />
                </Typography>
                <Link to="/cadastro">
                <Button  style={{color: 'white', width: '200px', border: '1px solid ', marginTop: '70px'}}>Cadstre-se!</Button>
                </Link>
            </Box>

                      
       </>          
    );
};

export default Header;