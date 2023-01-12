import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import '../src/styles/global.css'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        

        <Route path='/dashboard' element={<Dashboard />} />

        //         to   do               look for setting up a protective routes (there is an api for that)



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
