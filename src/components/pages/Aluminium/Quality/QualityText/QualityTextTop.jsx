import React from "react";
import sprite from '../../images/icons-sprite.svg'
import "./QualityText.scss";

const QualityTextTop = () => {
  return (
    <article className="quality__text">
       <div className="aluminium__svg">
      <svg>
                <use href={sprite + '#quality'}></use>
              </svg> 
      <h2 className="quality__subtitle">
        Политика «EuroCom» в области качества изготавливаемой продукции
        предполагает многоуровневую систему контроля качества.
      </h2>
      </div>
      <ol className="quality__list">
        <li>
          <p className="quality__list__item">
            <strong>Входной контроль сырья и материалов</strong>. Производится
            обязательный спектральный анализ химического состава сплава (OBLF).
          </p>
        </li>
        <li>
          <p className="quality__list__item">
            <strong>Межоперационный контроль отливок</strong>. Контролируются
            критические размеры отливок и обработанных изделий после каждой
            операции обработки с применением специализированного измерительного
            оборудования.
          </p>
        </li>
        <li>
          <p className="quality__list__item">
            <strong>
              Контроль качества и обслуживание технологической оснастки
            </strong>
            . Использование линии ультразвуковой очистки, а также отпускных
            печей для снятия напряжения пресс-форм.
          </p>
        </li>
        <li>
          <p className="quality__list__item">
            <strong>Технологический контроль производственного процесса</strong>
            . Осуществляется высококвалифицированными инженерами-технологами,
            инженерами по качеству.
          </p>
        </li>
        <li>
          <p className="quality__list__item">
            <strong>Выходной контроль готовых изделий</strong>. Производится в
            соответствии с установленной программой измерений с применением
            специализированного оборудования и инструмента (3D-измерительная
            машина Zeiss, рентгентелевизионная система Bosello,
            специализированное измерительное оборудование).
          </p>
        </li>
        <li>
          <p className="quality__list__item">
            <strong>Статистический контроль стабильности качества</strong>.
            Осуществляется постоянный контроль стабильности параметров
            производственного процесса (в том числе технологических режимов
            работы оборудования), а также статистический анализ фактических
            значений размеров деталей.
          </p>
        </li>
      </ol>
    </article>
  );
};

export default QualityTextTop;
