import React from 'react';
import Navbar2 from './Navbar2';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
    },
    cardContainer: {
        maxWidth: 345, 
        margin: "5rem auto"        
    }
});

const Home = () => {
    const classes = useStyles();

    return (      
        <>
        <Navbar2 />
        <Header />
            <Particles
            canvasClassName={classes.particlesCanva}
                    params={{
                        particles: {
                            number: {
                                value: 45,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            shape: {
                                type: "circle",
                                stroke: {  
                                width: 1,
                                color: "white"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }} 
            />           
        </>      
    )
}

export default Home;