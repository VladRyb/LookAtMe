import React from "react";
import DressCarousel from "../DressCarousel/DressCarousel";
// import UploadForm from '../uploadForm/UploadForm'
import { useSelector } from "react-redux";
import ModalLook from "../ModaImg/ModalLook";
import "./Dresser.css";
import { useHistory } from "react-router-dom";

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

  const headCategories = [
    "Шапки",
    "Кепки",
    "Шляпы",
    "Береты",
    "Пилотки",
    "Кандибобрики",
  ];
  const bodyCategories = [
    "Футболки поло и майки",
    "Толстовки и свитшоты",
    "Платья и сарафаны",
    "Пиджаки",
    "Рубашки",
    "Блузы",
    "Джемперы, свитеры и кардиганы",
  ];
  const legsCategories = ["Шорты", "Джинсы", "Брюки"];
  const feetCategories = ["Кроссовки", "Туфли", "Тапки"];

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
            title={"Хлебальник"}
            property={"head"}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(body, dressCategoryFilter.body)}
            categories={bodyCategories}
            title={"Пузень"}
            property={"body"}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(legs, dressCategoryFilter.legs)}
            categories={legsCategories}
            title={"Ляхи"}
            property={"legs"}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(feet, dressCategoryFilter.feet)}
            categories={feetCategories}
            title={"Лапы"}
            property={"feet"}
          />
        </div>
        <div>
          <ModalLook />
        </div>
      </div>
    </div>
  );
}
