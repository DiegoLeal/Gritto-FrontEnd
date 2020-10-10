import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container } from "@material-ui/core";
import Footer from 'components/Footer';

const useStyles = makeStyles ({
    Error: {
        color: "tomato",
        textAlign: "center",         
    },
    Container: {
        background: "#fafafa",       
    },
    Page: {
        marginTop: "2rem",  
        fontSize: "5rem"     
    }
});

const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.Container}>
                <Box className={classes.Error}  >            
                    <Typography className={classes.Page}>
                        <br></br>
                        Error: 404 Page Not Found   
                        <br></br>                
                        <br></br>                
                    </Typography>            
                </Box>
            </Container>        
            <Footer />
        </>
    )
}

export default NotFoundPage;