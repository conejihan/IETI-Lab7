import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Tasks from "./";

function MainRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/tasks" element={<Tasks />} />
                </Routes>
            </Router>
        </>
    );
}

export default MainRouter;
