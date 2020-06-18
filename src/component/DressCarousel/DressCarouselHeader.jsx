import React from "react";
import { useDispatch } from "react-redux";
import { setDressFilterProperty } from "../../redux/actioncreators/actionsSaga";
import { Form } from "react-bootstrap";

export default function DressCarouselHeader({ categories, title, property }) {
  const dispatch = useDispatch();
  const items = categories.map((el) => {
    return <option value={el}>{el}</option>;
  });

  return (
    <div className="carouselHeader">
      <b>
        <Form.Label class="textCatSeason">{title}</Form.Label>
      </b>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label class="textCatSeason">Категории:</Form.Label>
          <Form.Control
            as="select"
            custom
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
            <option>Не выбрано</option>
            {items}
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label class="textCatSeason">Сезоны:</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={({ target }) =>
              dispatch(
                setDressFilterProperty(
                  property,
                  target.value,
                  "dressSeasonFilter"
                )
              )
            }
          >
            <option value="">Не выбрано</option>
            <option value="winter">Зима</option>
            <option value="summer">Лето</option>
            <option value="autumn">Осень</option>
            <option value="spring">Весна</option>{" "}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}
