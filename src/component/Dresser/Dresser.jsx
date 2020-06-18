import React from "react";
import DressCarousel from "../DressCarousel/DressCarousel";
// import UploadForm from '../uploadForm/UploadForm'
import { useSelector } from "react-redux";
import ModalLook from "../ModaImg/ModalLook";
import "./Dresser.css";
import { useHistory } from "react-router-dom";
import CariuselSuper from "../DressCarousel/CariuselSuper";
import Carousel from "../DressCarousel/CariuselSupercopy";

export default function Dresser() {
  const userName = localStorage.getItem("user");
  const history = useHistory();

  if (userName === "") {
    history.push("/");
  }
  const user = useSelector((state) => state.user);
  const dressCategoryFilter = useSelector((state) => state.dressCategoryFilter);
  const dressSeasonFilter = useSelector((state) => state.dressSeasonFilter);

  const { head = [], body = [], legs = [], feet = [] } = user;

  const dressFilter = (array, categoryFilter, seasonFilter) => {
    return categoryFilter || seasonFilter
      ? array.filter(
          (el) =>
            (categoryFilter ? el.type === categoryFilter : true) &&
            (seasonFilter ? el.season === seasonFilter : true)
        )
      : array;
  };

  const headCategories = ["Шапки", "Кепки", "Шляпы", "Береты", "Панамы"];
  const bodyCategories = [
    "Футболки и поло",
    "Толстовки и свитшоты",
    "Свитера и джемперы",
    "Платья и сарафаны",
    "Пиджаки",
    "Блузы и рубашки",
    "Куртки и пуховики",
    "Пальто и плащи",
    "Спортивные куртки",
  ];
  const legsCategories = [
    "Шорты",
    "Джинсы",
    "Брюки",
    "Юбки",
    "Спортивные штаны",
    "Комбинезоны",
  ];
  const feetCategories = [
    "Кроссовки",
    "Туфли",
    "Босоножки",
    "Сланцы",
    "Ботинки",
    "Сапоги",
  ];

  // console.log(dressFilter(head, dressCategoryFilter.head));

  return (
    <div id="globalDiv">
      <div className="dresser">
        <div>
          <DressCarousel
            dressArray={dressFilter(
              head,
              dressCategoryFilter.head,
              dressSeasonFilter.head
            )}
            categories={headCategories}
            // title={"Верхняя часть тела"}
            title={"Головные уборы"}
            property={"head"}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(
              body,
              dressCategoryFilter.body,
              dressSeasonFilter.body
            )}
            categories={bodyCategories}
            title={"Верхняя часть тела"}
            property={"body"}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(
              legs,
              dressCategoryFilter.legs,
              dressSeasonFilter.legs
            )}
            categories={legsCategories}
            title={"Нижняя часть тела"}
            property={"legs"}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(
              feet,
              dressCategoryFilter.feet,
              dressSeasonFilter.feet
            )}
            categories={feetCategories}
            title={"Обувь"}
            property={"feet"}
          />
        </div>
        <div>
          <ModalLook camera={false} />
        </div>
      </div>
    </div>
  );
}
