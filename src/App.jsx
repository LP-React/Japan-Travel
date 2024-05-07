import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';


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
import { SelectCountry } from './components/SelectCountry';

export function App() {

    const [country, setCountry] = useState('')

    const onSelectCountryClick = (selectedCountry) => {
        setCountry(selectedCountry)
    }

    return (
        <Router>
            {country === '' ? (
                <SelectCountry onSelectCountry={onSelectCountryClick} />
            ) : (
                <>
                    <Nav />
                    <Routes>
                        <Route
                            path="/"
                            element={
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
                        <Route path="/Reviews" element={<Reviews country={country} />} />
                    </Routes>
                    <Footer />
                </>
            )}
        </Router>
    );
}
