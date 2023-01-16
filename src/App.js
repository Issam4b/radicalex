import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '../src/styles/global.css'
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>

        (// this is the login route )
        <Route path='/login' element={<Login />} />

        (// access to dashboard)
        <Route path='/dashboard' element={<Dashboard />} />


        (//         to   do               look for setting up a protective routes (there is an api for that))



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
