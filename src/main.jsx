import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Information } from './components/Information';
import { Top10 } from './components/Top10';
import { ExploreByInterest } from './components/ExploreByInterest';
import { BookYourTrip } from './components/BookYourTrip';
import { ReadyToGo } from './components/ReadyToGo';
import { Footer } from './components/Footer';
import { AboutUs } from "./components/AboutUs";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import './../src/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

    let country = prompt('Type your country')

    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element=
                    {
                        <>
                            <Hero country={country} />
                            <Information country={country} />
                            <Top10 country={country} />
                            <ExploreByInterest country={country} />
                            <ReadyToGo country={country} />
                            <BookYourTrip country={country} />
                        </>
                    }
                />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Gallery" element={<Gallery country={country} />} />
                <Route path="/Reviews" element={<Reviews country={country}/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)