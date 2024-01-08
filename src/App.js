 
import './App.css';
import AddTask from './Components/AddTask';
import Navbar from './Components/Navbar';
import Container from './../node_modules/react-bootstrap/esm/Container'
import {Row,Col} from 'react-bootstrap'
import TaskList from './Components/TaskList';
function App() {
  return (
 <Container >     
   <Navbar/>

   <Row className="justify-content-md-center">
    <Col xs lg="2">
      <AddTask/>
      </Col>
</Row>
 
<TaskList/>
      </Container>
     
      

  );
}

export default App;
