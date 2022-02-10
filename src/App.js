import logo from './logo.svg';
import './App.css';
import Admin from './Components/Admin/Admin';
import Students from './Components/Admin/ContainerPage/Students/Students';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SideBar from './Components/Admin/SideBar';
import { Col, Container, Row } from 'react-bootstrap';
import AddFood from './Components/Admin/ContainerPage/AddFood/AddFood';
import AddStudent from './Components/Admin/ContainerPage/AddStudent/AddStudent';
import Distribution from './Components/Admin/ContainerPage/Distribution/Distribution';
import Foods from './Components/Admin/ContainerPage/Foods/Foods';
import DistributedList from './Components/Admin/ContainerPage/DistributedList/DistributedList';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
  
      <BrowserRouter>
      
        <Row>
          <Col style={{border:"1px solid red"}} md={3}>
            <SideBar />
          </Col>
          <Col md={9} style={{border:"1px solid red"}}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/student" element={<Students />} />
              <Route path="/food" element={<Foods />} />
              <Route path="/addFood" element={<AddFood />} />
              <Route path="/AddStudent" element={<AddStudent />} />
              <Route path="/distribution" element={<Distribution />} />
              <Route path="/delivered" element={<DistributedList />} />
            </Routes>
          </Col>
        </Row>

      </BrowserRouter>
    
  );
}

export default App;
