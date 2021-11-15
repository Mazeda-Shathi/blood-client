import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/about/About';
// import AuthProvider from './components/context/AuthProvider';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
