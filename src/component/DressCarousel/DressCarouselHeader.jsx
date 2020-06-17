import React from "react";
import { useDispatch } from "react-redux";
import { setDressFilterProperty } from "../../redux/actioncreators/actionsSaga";

export default function DressCarouselHeader({ categories, title, property }) {
  const dispatch = useDispatch();
  const items = categories.map((el) => {
    return <option value={el}>{el}</option>;
  });

  return (
    <div className="carouselHeader">
      <span>{title}</span>
      <select
        className="select select btn btn-secondary btn-sm dropdown-toggle"
        onChange={({ target }) =>
          dispatch(
            setDressFilterProperty(
              property,
              target.value,
              "dressCategoryFilter"
            )
          )
        }
      >
        <option value={""}>Все</option>
        {items}
      </select>
      <select
        className="select btn btn-secondary btn-sm dropdown-toggle"
        onChange={({ target }) =>
          dispatch(
            setDressFilterProperty(property, target.value, "dressSeasonFilter")
          )
        }
      >
        <option value="">Не выбрано</option>
        <option value="winter">Зима</option>
        <option value="summer">Лето</option>
        <option value="autumn">Осень</option>
        <option value="spring">Весна</option>
      </select>
    </div>
  );
}
