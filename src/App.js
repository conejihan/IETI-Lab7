import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Tasks from "./Tasks";

function MainRouter() {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/tasks" element={<Tasks />} />
                </Routes>
                <ThemeContext.Provider  value={{ state, dispatch }}>
                    		<Button>Change Theme</Button>
        	    </ThemeContext.Provider>
            </Router>
            
        
    );
}

export default MainRouter;
