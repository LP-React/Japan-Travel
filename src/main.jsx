import React from "react";
import ReactDOM from "react-dom/client";

import {Nav} from './components/Nav';
import {Hero} from './components/Hero';
import {Information} from './components/Information';
import {Top10Japan} from './components/Top10Japan';
import {ExploreByInterest} from './components/ExploreByInterest';
import {BookYourTrip} from './components/BookYourTrip';
import {ReadyToGo} from './components/ReadyToGo';
import {Footer} from './components/Footer';
import './../src/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Nav></Nav>
        <Hero></Hero>
        <Information></Information>
        <Top10Japan></Top10Japan>
        <ExploreByInterest></ExploreByInterest>
        <ReadyToGo></ReadyToGo>
        <BookYourTrip></BookYourTrip>
        <Footer></Footer>
    </React.StrictMode>
)