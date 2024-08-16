import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import AboutPageAsync from "./components/pages/AboutPage/AboutPage.async";
import MainPageAsync from "./components/pages/MainPage/MainPage.async";
import { Suspense } from "react";

const App = () => {
    return (
        <div className="app">
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;