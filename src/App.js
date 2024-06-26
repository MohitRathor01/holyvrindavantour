import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import './App.css';
import HvtCarousel from './pages/HvtCarousel';
import HvtContactForm from './pages/HvtContactForm';
import { HvtHeader } from './pages/HvtHeader';
import HvtReview from './pages/HvtReview';
import HvtWwr from './pages/HvtWwr';
import Hvttourcard from './pages/Hvttourcard';
import TourDetails from './components/TourDetails';
import HvtFloatingbtn from './components/HvtFloatingbtn';
import HvtTnC from './pages/HvtTnC';
import HvtPrivacyP from './pages/HvtPrivacyP';
import HvtRnC from './pages/HvtRnC';
import HvtFooter from './pages/HvtFooter'; 

function App() {
    return (
        <Router>
            <HvtHeader />
            <Routes>
                <Route path="/" element={
                    <>
                        <HvtCarousel />
                        <HvtWwr />
                        <Hvttourcard />
                        <HvtReview />
                        <HvtContactForm />
                    </>
                } />
                <Route path="/about" element={<HvtWwr />} />
                <Route path="/destinations" element={<Hvttourcard />} />
                <Route path="/contact" element={<HvtContactForm />} />
                <Route path="/tour/:id" element={<TourDetails />} />
                <Route path="/terms-conditions" element={<HvtTnC />} />
                <Route path="/privacy-policy" element={<HvtPrivacyP />} />
                <Route path="/refund-policy" element={<HvtRnC />} />
                <Route path="/reservation-policy" element={<HvtRnC />} />
            </Routes>
            <HvtFloatingbtn />
            <HvtFooter />
        </Router>
    );
}

export default App;
