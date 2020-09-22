import React from "react";
import PowderLightBox from './PowderLightBox/PowderLightBox'
import "./Powder.scss";

const Powder = () => {
  return (
    <div className="powder">
    <article className="powder__text">
      <p className="powder__info">
        Полимерное покрытие алюминиевых изделий – это практичный и эстетичный
        тип обработки поверхности. Порошковая окраска обеспечивает окрашенным
        изделиям не только привлекательный внешний вид, но и защиту от
        воздействия внешней среды.
      </p>
      <p className="powder__info">
        Реализуя полный цикл обработки алюминиевых профилей и отливок, «EuroCom»
        оказывает своим клиентам услугу по нанесению полимерного покрытия.
      </p>
      <p className="powder__info">
        Окраска в любой цвет карты RAL производится на автоматизированном
        высокотехнологичном оборудовании. В производственном процессе
        используются порошковые краски лучших мировых производителей,
        соответствующие стандарту качества Qualicoat.
      </p>
      <p className="powder__info">
        Предварительная обработка поверхности отливок (дробеметная обработка,
        мокрая виброгалтовка) обеспечивает высокие адгезивные свойства изделий
        при их последующей окраске.
      </p>
      <p className="powder__info">
        Важным этапом подготовки к нанесению краски является бесхромовая
        пассивация, гарантирующая в процессе дальнейшей эксплуатации повышенную
        коррозионную стойкость изделий.
      </p>
      <h2 className="powder__subtitle">
        Преимущества порошковой окраски алюминиевых изделий в «EuroCom»
      </h2>
      <ul className="powder__list">
        <li className="powder__list__item">
          <p>Равномерное и качественное покрытие. </p>
        </li>
        <li className="powder__list__item">
          <p>
            Стойкость покрытия к тепловому воздействию и ультрафиолетовому
            излучению.
          </p>
        </li>
        <li className="powder__list__item">
          <p>Химическая устойчивость покрытия и длительный срок службы.</p>
        </li>
        <li className="powder__list__item">
          <p>
            Автоматизированная линия покраски с системой быстрой смены цвета.
          </p>
        </li>
        <li className="powder__list__item">
          <p>
            Широкий спектр окрашиваемых изделий (длина - до 7000 мм, высота - до
            1600 мм).
          </p>
        </li>
      </ul>
      <p className="powder__info">
        Широкий спектр окрашиваемых изделий, богатая цветовая гамма, высокая
        производительность линии, многоступенчатый контроль качества позволяют
        нам в полной мере удовлетворять запросы самых взыскательных клиентов.
      </p>
    </article>
    <PowderLightBox />
    </div>
  );
};

export default Powder;
