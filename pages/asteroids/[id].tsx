import React from "react";
import axios from "axios";
import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";

import { Header, Footer } from "../../components";

import { addCart } from "../../redux/appReducer";

import { Context } from "../index";

interface AsteroidProps {
  asteroid: any;
  asteroidShort: any;
  url: string;
}

const asteroid: React.FC<AsteroidProps> = ({
  asteroid,
  asteroidShort,
  url,
}) => {
  const dispatch = useDispatch();
  const cart: any[] = useSelector((state: StateSelector) => state.app.cart);

  function getDate(date: string) {
    const year = date.split("-", 7)[0];
    const month = date.split("-", 7)[1];
    const day = date.split("-", 7)[2];

    if (month === "01") {
      return `${day} января ${year}`;
    } else if (month === "02") {
      return `${day} февраля ${year}`;
    } else if (month === "03") {
      return `${day} марта ${year}`;
    } else if (month === "04") {
      return `${day} апреля ${year}`;
    } else if (month === "05") {
      return `${day} мая ${year}`;
    } else if (month === "06") {
      return `${day} июня ${year}`;
    } else if (month === "07") {
      return `${day} июля ${year}`;
    } else if (month === "08") {
      return `${day} августа ${year}`;
    } else if (month === "09") {
      return `${day} сентября ${year}`;
    } else if (month === "10") {
      return `${day} октября ${year}`;
    } else if (month === "11") {
      return `${day} ноября ${year}`;
    } else if (month === "12") {
      return `${day} декабря ${year}`;
    }
  }

  function getFullDate(date, fullDate) {
    return `${fullDate.slice(12, 17)}, ${getDate(date)}`;
  }

  function withSpaces(x: string): string {
    return Math.ceil(Number(x))
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const onAdd = () => {
    const obj = {
      name: asteroidShort.name,
      date: getDate(asteroidShort.close_approach_data[0].close_approach_date),
      distance: withSpaces(
        asteroidShort.close_approach_data[0].miss_distance.kilometers
      ),
      size: withSpaces(
        asteroidShort.estimated_diameter.meters.estimated_diameter_max
      ),
      danger: asteroidShort.is_potentially_hazardous_asteroid,
      id: asteroidShort.id,
    };

    if (!cart.map((item) => item.id).includes(obj.id)) {
      dispatch(addCart(obj));
    }
  };

  return (
    <div className="container">
      <Header url={url} cart={cart} />
      <div
        className="item item-mod"
        style={
          !asteroidShort.is_potentially_hazardous_asteroid
            ? {
                background: "linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%)",
              }
            : { background: "linear-gradient(90deg, #FFB199 0%, #FF0844 100%)" }
        }
      >
        <div className="item__main">
          <div className="item__block item__block-mod">
            <h1 className="item__title item__title-mod">
              {asteroidShort.name}
            </h1>
            <div className="info ">
              <div className="info__item">
                <p className="info__key">Дата</p>
                <span className="info__dots"></span>
                <p className="info__value">
                  {getDate(
                    asteroidShort.close_approach_data[0].close_approach_date
                  )}
                </p>
              </div>
              <div className="info__item">
                <p className="info__key">Расстояние</p>
                <span className="info__dots"></span>
                <p className="info__value">
                  {withSpaces(
                    asteroidShort.close_approach_data[0].miss_distance
                      .kilometers
                  )}{" "}
                  км
                </p>
              </div>
              <div className="info__item">
                <p className="info__key">Размер</p>
                <span className="info__dots"></span>
                <p className="info__value">
                  {withSpaces(
                    asteroidShort.estimated_diameter.meters
                      .estimated_diameter_max
                  )}{" "}
                  м
                </p>
              </div>
            </div>
          </div>
          <div className="item__block item__block-mod1">
            <div className="danger">
              <p className="danger__title">Оценка:</p>
              <h3 className="danger__text">
                {asteroidShort.is_potentially_hazardous_asteroid
                  ? "опасен"
                  : "не опасен"}
              </h3>
              <button
                onClick={onAdd}
                type="button"
                className={classNames("button", {
                  disabled: cart.map((item) => item.id).includes(asteroid.id),
                })}
              >
                На уничтожение
              </button>
            </div>
          </div>
        </div>
        <div className="full">
          <h3 className="full__title">Список всех сближений:</h3>
          {asteroid.close_approach_data.map((asteroid, i) => (
            <ul className="full__list" key={asteroid.close_approach_date_full}>
              {i + 1}:
              <li className="full__list__item full__list__item-mod">
                Время максимального сближения: <br />
                <span>
                  {getFullDate(
                    asteroid.close_approach_date,
                    asteroid.close_approach_date_full
                  )}
                </span>
              </li>
              <li className="full__list__item">
                Расстояние до земли: <br />
                <span>{withSpaces(asteroid.miss_distance.kilometers)} км</span>
              </li>
              <li className="full__list__item">
                Скорость: <br />
                <span>
                  {withSpaces(asteroid.relative_velocity.kilometers_per_hour)}{" "}
                  км/ч
                </span>
              </li>
              <li className="full__list__item">
                Орбита: <br /> <span>{asteroid.orbiting_body}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default asteroid;

export const getServerSideProps = async (ctx: Context): Promise<any> => {
  function getCurrentDate() {
    const date = new Date();
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "-" +
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
    );
  }
  try {
    const { data } = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/${ctx.query.id}?api_key=f4GgoAmeHhJLT7SQ9pfX9A4W8FqQy2GcrUgsAPSy&`
    );

    const asteroidPrev = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getCurrentDate()}&api_key=f4GgoAmeHhJLT7SQ9pfX9A4W8FqQy2GcrUgsAPSy&`
    );

    const asteroidShort = [].concat.apply(
      [],
      Object.values(asteroidPrev.data.near_earth_objects)
    );
    const item = asteroidShort.find((obj) => obj.id === ctx.query.id);
    const url = ctx.resolvedUrl;
    return {
      props: {
        asteroid: data,
        asteroidShort: item,
        url: url,
      },
    };
  } catch (error) {
    alert("Не удалось получить данные");
    return {
      props: {
        asteroid: [],
        asteroidShort: [],
        url: "",
      },
    };
  }
};
