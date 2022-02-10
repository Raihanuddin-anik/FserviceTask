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

function App() {
  return (
  
      <BrowserRouter>
        <Row >
          <Col md={4}>
            <SideBar />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Admin />} />
              <Route path="/student" element={<Students />} />
              <Route path="/food" element={<Foods />} />
              <Route path="/addFood" element={<AddFood />} />
              <Route path="/AddStudent" element={<AddStudent />} />
              <Route path="/distribution" element={<Distribution />} />
            </Routes>
          </Col>
        </Row>

      </BrowserRouter>
    
  );
}

export default App;
