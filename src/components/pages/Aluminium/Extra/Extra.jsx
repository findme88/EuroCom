import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import ExtraLightBox from "./ExtraLightBox/ExtraLightBox";
import "./Extra.scss";

function Extra() {
  return (
    <article className="extra__text">
      <h2 className="extra__subtitle">
        «EuroCom» постоянно расширяет спектр дополнительных услуг и операций,
        предлагая своим партнерам полный цикл производства алюминиевых литых
        изделий.
      </h2>
      <p className="extra__info">
        По согласованию с заказчиком отливки подвергаются следующим
        <strong>видам обработки</strong>:
      </p>
      <ul className="extra__list">
        <li>
          <p className="extra__list__item">
            дробеметная обработка поверхности изделий;
          </p>
        </li>
        <li>
          <p className="extra__list__item">виброгалтовка деталей;</p>
        </li>
        <li>
          <p className="extra__list__item">
            механическая обработка на станках с ЧПУ;
          </p>
        </li>
        <li>
          <p className="extra__list__item">
            нанесение полимерного покрытия (
            <NavLink smooth to="/aluminium/powder">
              <span>порошковая окраска</span>
            </NavLink>
            )
          </p>
        </li>
      </ul>
      <ExtraLightBox />
      <p className="extra__info">
        При проведении операций обработки алюминиевых отливок используется
        автоматизированное оборудование лучших мировых производителей (ROSLER,
        HAAS, NORDSON).
      </p>
      <p className="extra__info">
        В зависимости от требований к внешнему виду изделий инженеры «EuroCom»
        разрабатывают и предлагают клиенту оптимальную программу обработки
        поверхности.
      </p>
      <p className="extra__info">
        Квалифицированный менеджмент с многолетним опытом, стратегия постоянного
        динамичного развития, клиентоориентированная политика, а также высокий
        уровень культуры производства – ценные активы, благодаря которым мы
        обеспечиваем клиентам высокое качество продукции, надежность поставок и
        эффективную реализацию совместных проектов.
      </p>
    </article>
  );
}

export default Extra;
