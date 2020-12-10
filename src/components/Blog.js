import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';

import CheckRoster from './CheckRoster';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Image01 from '../images/01.jpg'
import Image02 from '../images/02.jpg'
import Image11 from '../images/11.jpg'
import Image09 from '../images/09.jpg'
import Image06 from '../images/06.jpg'
import Image15 from '../images/15.jpg'
import Image04 from '../images/04.jpg'
import Image22 from '../images/22.jpg'
import Image31 from '../images/31.jpg'
import Image55 from '../images/program.jpg'
import Image65 from '../images/itinerary.jpg'
import Image34 from '../images/34.jpg'
import Image72 from '../images/boat02.jpg'
import Image71 from '../images/boat01.jpg'
import Image73 from '../images/boat03.jpg'
import Image82 from '../images/room02.jpg'
import Image81 from '../images/room01.jpg'


import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;



const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },

    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}));


const sections = [
    { title: 'Intro to the Galapagos ', url: 'https://youtu.be/NKG2qH8778U' },
    { title: 'Scuba Diving in Galapagos', url: 'https://youtu.be/Cur27oiBU6Q' },
    { title: 'Our Previous Trip', url: 'https://youtu.be/e10xfat1ASs' },

];


export default function Blog() {


    const defaultProps = {
        center: {
            lat: -0.777259,
            lng: -91.142578
        },
        zoom: 4

    };

    const [quantity, setQuantity] = useState(0)

    const changeQuantity = (event) => {
        setQuantity(event.target.value)
        //alert(quantity)
    }

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Header title="JANG dive MASTER" sections={sections} />
                <main>
                    {/* <MainFeaturedPost post={mainFeaturedPost} /> */}

                    <Carousel autoPlay>
                        <div>
                            <img src={Image01} />
                            <p className='Galapagos'>Legend 1</p>
                        </div>
                        <div>
                            <img src={Image02} />
                            <p className='Galapagos'>Legend 2</p>
                        </div>
                        <div>
                            <img src={Image11} />
                            <p className='Galapagos'>Legend 3</p>
                        </div>
                        <div>
                            <img src={Image09} />
                            <p className='Galapagos'>Legend 4</p>
                        </div>
                        <div>
                            <img src={Image06} />
                            <p className='Galapagos'>Legend 5</p>
                        </div>
                        <div>
                            <img src={Image15} />
                            <p className='Galapagos'>Legend 6</p>
                        </div>
                        <div>
                            <img src={Image04} />
                            <p className='Galapagos'>Legend 7</p>
                        </div>
                        <div>
                            <img src={Image22} />
                            <p className='Galapagos'>Legend 8</p>
                        </div>
                    </Carousel>

                    <div style={{ height: '50vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ apikey: 'AIzaSyDjWYHyRQ0RIMZKdmWBi9i9oSI25CZEWGY' }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={-0.777259}
                                lng={-91.142578}
                                text="Galapagos"
                            />
                        </GoogleMapReact>
                    </div>

                    <h1><span style={{ color: 'blue' }}> Our Liveaboard </span></h1>
                    <div>
                        <img src={Image31} width='800px' height='480px' />
                        <img src={Image34} width='800px' height='480px' />
                        <img src={Image72} width='800px' height='200px' />
                        <img src={Image71} width='800px' height='250px' />
                        <img src={Image73} width='800px' height='220px' />
                    </div>
                    <h1><span style={{ color: 'blue' }}>Our Diving Program (7-14 August 2021)</span> </h1>
                    <div>
                        <img src={Image55} />
                        <img src={Image65} />
                    </div>
                    <h1><span style={{ color: 'blue' }}> Our Suite Room (Only 3 Rooms)</span></h1>

                    <div>
                        <img src={Image82} width='800px' height='420px' />

                        <h1><span style={{ color: 'blue' }}> Our Stateroom (Only 6 Rooms)</span></h1>
                        <img src={Image81} width='800px' height='420px' />
                    </div>

                    <div className={classes.root}>
                        {/* 
                        <Button variant="contained" onClick={getFinalQuanity} color="primary">BOOK NOW !!!</Button>
                         */}


                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="First Name" />
                            <TextField id="standard-basic" label="Last Name" />
                            <TextField
                                id="standard-number"
                                label="Quantity of room"
                                type="number"
                                onChange={changeQuantity}
                                error={quantity < 1}


                            />
                            <CheckRoster quantity={quantity}></CheckRoster>

                        </form>
                    </div>

                </main>
            </Container>
            <Footer title="JANG dive MASTER" description="Once in a lifetime!" />
        </React.Fragment>
    );
}