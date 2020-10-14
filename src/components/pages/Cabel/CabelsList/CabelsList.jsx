import React from "react";

import "./CabelsList.scss";
import Col from 'react-bootstrap/Col'

const CabelsList = ({ cabels }) => (
  <ul className="cabels-list container">

    {cabels.map((item) => {

      return (

        <li className="cabels-list__item">
          <div className="row">
            <Col md={12}>
              <h4 className="cabels-list__item__title">{item.name}</h4>
            </Col>
            <Col md={8}>
              <ul className="cabels-properties">
                <li className="cabels-properties__item">Код: <span className="cabels-properties__item-span">{item.code}</span> </li>
                <li className="cabels-properties__item">Марка кабеля: <span className="cabels-properties__item-span">{item.brand}</span> </li>
                <li className="cabels-properties__item">Возможна нагрузка, кВт: <span className="cabels-properties__item-span">{item.possibleLoad}</span> </li>
                <li className="cabels-properties__item">Материал изоляции кабеля: <span className="cabels-properties__item-span">{item.insulationMaterial}</span> </li>
                <li className="cabels-properties__item">Материал оболочки кабеля: <span className="cabels-properties__item-span">{item.sheathMaterial}</span> </li>
                <li className="cabels-properties__item">Для наружных работ: <span className="cabels-properties__item-span">{item.outdoorUse}</span> </li>
                <li className="cabels-properties__item">Для внутреных работ: <span className="cabels-properties__item-span">{item.indoorUse}</span> </li>
                <li className="cabels-properties__item">Для подземных работ: <span className="cabels-properties__item-span">{item.undergroundUse}</span> </li>
                <li className="cabels-properties__item">Цена: <span className="cabels-properties__item-span">{item.cost}</span> </li>
              </ul>
            </Col>

            <Col md={4}>
              <img
                className="cabels-list__item__img "
                src={item.img}
                alt="ABBG2x pict"
              />
            </Col>
          </div>
        </li>

      )

    })}

  </ul>
)

export default CabelsList;
