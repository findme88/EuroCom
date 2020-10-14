import React from "react";
import ABBG2x from "./images/ABBG2x.jpg";


import NavBar from "../../elements/NavBar/NavBar"
import "./Cabel.scss";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Cabel = () => {
  return (
    <div className="cabel">
      <NavBar />
      <Container>
        <Row>
          <h1 className="cabel__title">Силовые кабели и провода</h1>
          <ul className="cabels-list container">

            <li className="cabels-list__item">
              <div className="row">
                <Col md={12}>
                  <h4 className="cabels-list__item__title">Кабель алюминиевый</h4>
                </Col>
                <Col md={8}>
                  <ul className="cabels-properties">
                    <li className="cabels-properties__item">Код: <span className="cabels-properties__item-span">2000</span> </li>
                    <li className="cabels-properties__item">Марка кабеля: <span className="cabels-properties__item-span">АВВГ 2 х 2,5</span> </li>
                    <li className="cabels-properties__item">Возможна нагрузка, кВт: <span className="cabels-properties__item-span">3,2</span> </li>
                    <li className="cabels-properties__item">Материал изоляции кабеля: <span className="cabels-properties__item-span">кабельный полиэтилен</span> </li>
                    <li className="cabels-properties__item">Материал оболочки кабеля: <span className="cabels-properties__item-span">кабельный полиэтилен</span> </li>
                    <li className="cabels-properties__item">Для наружных работ: <span className="cabels-properties__item-span">да</span> </li>
                    <li className="cabels-properties__item">Для внутреных работ: <span className="cabels-properties__item-span">да</span> </li>
                    <li className="cabels-properties__item">Для подземных работ: <span className="cabels-properties__item-span">да</span> </li>
                    <li className="cabels-properties__item">Цена: <span className="cabels-properties__item-span">2 грн/м</span> </li>
                  </ul>
                </Col>

                <Col md={4}>
                  <img
                    className="cabels-list__item__img "
                    src={ABBG2x}
                    alt="ABBG2x pict"
                  />
                </Col>
              </div>
            </li>

          </ul>
        </Row>
      </Container>

    </div >
  );
};

export default Cabel;