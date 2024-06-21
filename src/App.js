import Sidebar from './Components/Sidebar/Sidebar';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main/Main';



function App() {
  const [isTrue, setTrue] = useState(true)
  const [colnum, setcolNum] = useState({col1:2, col2 : 10})
  const [colNone, setColnonde] = useState("")

  const showHideBtn = () => {
    setTrue(!isTrue);
    isTrue ? setcolNum({col1:1, col2:11}) : setcolNum({col1:2, col2:10})
    isTrue ? setColnonde("active") : setColnonde("")
  }
  return (
    <div className='main_container'>
      <Container fluid className='m-0'>
        <Row>
          <Col md= {colnum.col1} className={`sidebar ${colNone}`} style={{ position: 'relative', zIndex: 1 }}>
              <Sidebar show = {isTrue} colNone = {colNone} showHideBtn= {showHideBtn}/>
          </Col>
          <Col  md={colnum.col2}>
            <Main/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
