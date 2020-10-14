import React from "react";
import "./Cabel.scss";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import NavBar from "../../elements/NavBar/NavBar"
import CabelsList from "./CabelsList/CabelsList"
import cabels from "./cabels"




const Cabel = () => {

  return (
    <div className="cabel">
      <NavBar />
      <Container>
        <Row>
          <h1 className="cabel__title">Силовые кабели и провода</h1>
          <CabelsList cabels={cabels} />
        </Row>
      </Container>

    </div >
  );
};

export default Cabel;

