import React from "react";
import "./DescriptionText.scss";
import sprite from '../../images/icons-sprite.svg'

const DescriptionText = () => {
  return (
    <article className="description__text">
      <div className="aluminium__svg">
      <svg>
                <use href={sprite + '#desc'}></use>
              </svg> 
      <h2 className="description__subtitle">
        Алюминиевые изделия, изготовленные методом литья под давлением, широко
        используются во многих отраслях промышленности, таких как:
      </h2>
      </div>
      <ul className="description__list">
        <li>
          <p className="description__list__item">автомобилестроение; </p>
        </li>
        <li>
          <p className="description__list__item">
            производство бытовой техники;{" "}
          </p>
        </li>
        <li>
          <p className="description__list__item">
            системы внутреннего и наружного освещения;{" "}
          </p>
        </li>
        <li>
          <p className="description__list__item">станко- и машиностроение; </p>
        </li>
        <li>
          <p className="description__list__item">
            строительство и другие отрасли.
          </p>
        </li>
      </ul>
      <p className="description__info">
        Широкая популярность алюминиевых отливок обусловлена как
        функциональностью материала изделий, так и технологичностью и высокой
        точностью процесса литья под давлением.
      </p>
      <p className="description__info">
        Группа компаний «EuroCom» располагает полностью автоматизированными
        литейными комплексами лучших мировых производителей: Bühler, Italpresse,
        IDRA.{" "}
      </p>
      <h2 className="description__subtitle">
        Комплексы литья под давлением оснащены:
      </h2>
      <ul className="description__list">
        <li>
          <p className="description__list__item">
            газовыми плавильно-раздаточными печами;
          </p>
        </li>
        <li>
          <p className="description__list__item">
            автоматическими роботами-заливщиками;
          </p>
        </li>
        <li>
          <p className="description__list__item">
            установками термостатирования пресс-форм;
          </p>
        </li>
        <li>
          <p className="description__list__item">смазчиками пресс-форм;</p>
        </li>
        <li>
          <p className="description__list__item">
            роботами-съемщиками отливок;
          </p>
        </li>
        <li>
          <p className="description__list__item">
            станциями охлаждения отливок;
          </p>
        </li>
        <li>
          <p>обрубными прессами. </p>
        </li>{" "}
      </ul>
      <p className="description__info">
        Богатая оснащенность литейных комплексов, полная автоматизация
        производственного процесса, а также использование качественной оснастки
        позволяют серийно изготавливать сложную продукцию с постоянно высоким
        уровнем качества.{" "}
      </p>
      <h2 className="description__subtitle">
        Преимущества алюминиевых литых изделий «EuroCom»
      </h2>
      <ul className="description__list">
        <li>
          <p className="description__list__item">
            Возможность литья тонкостенных (до 1 мм) деталей сложной
            конфигурации.
          </p>
        </li>
        <li>
          <p className="description__list__item">
            Широкий ассортимент выпускаемой продукции (вес отливок 0,05-7 кг).
          </p>
        </li>
        <li>
          <p className="description__list__item">
            Высокая точность (4–5-й класс точности по ГОСТ 26645, DIN 1688-4).
          </p>
        </li>
        <li>
          <p className="description__list__item">
            Соответствие продукции требованиям Европейского регламента REACH и
            Директивы RoHS.
          </p>
        </li>
        <li>
          <p className="description__list__item">
            Полный спектр операций последующей обработки поверхности отливок
            (мокрая виброгалтовка, дробеметная и механическая обработка).{" "}
          </p>
        </li>
        <li>
          <p className="description__list__item">
            Многоступенчатая система контроля качества продукции (3D-измерения,
            рентгенографический и спектральный анализ) и процессов (соответствие
            ISO 9001 в системе TUV Cert).
          </p>
        </li>
      </ul>
      <p className="description__info">
        В настоящее время литье под давлением осуществляется с использованием
        сплавов АК12М1, АК12М2 и АК13 (EN AB47100, AlSi12Cu2, AlSi13). По
        согласованию с заказчиком возможно использование других сплавов.
      </p>
      <p className="description__info">
        Группа компаний «EuroCom» предлагает установить долгосрочные
        взаимовыгодные партнерские отношения и организовать регулярные поставки
        алюминиевых комплектующих для вашего предприятия.
      </p>
    </article>
  );
};

export default DescriptionText;
