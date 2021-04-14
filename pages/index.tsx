import React from "react";
import axios from "axios";

import Link from "next/link";
import { NextPageContext } from "next";

import { useSelector, useDispatch } from "react-redux";

import { Header, Filters, Card, Footer } from "../components";
import {
  setDangerous,
  setKilometersDistance,
  setLunarDistance,
  setStartPagination,
  setPagination,
  addCart,
} from "../redux/appReducer";

interface HomeProps {
  asteroids: any[];
  url: string;
}

export default function Home({ asteroids, url }: HomeProps): any {
  const dispatch = useDispatch();
  const {
    dangerousOnly,
    kilometersDistance,
    lunarDistance,
    pagination,
    cart,
  }: any = useSelector((state: StateSelector) => ({
    dangerousOnly: state.app.dangerousOnly,
    kilometersDistance: state.app.distance.kilometers,
    lunarDistance: state.app.distance.lunar,
    pagination: state.app.pagination,
    cart: state.app.cart,
  }));

  const onDangerous = () => {
    dispatch(setDangerous());
    dispatch(setStartPagination());
  };

  const onKilometers = () => {
    dispatch(setKilometersDistance());
  };

  const onLunar = () => {
    dispatch(setLunarDistance());
  };

  const onAdd = (payload) => {
    dispatch(addCart(payload));
  };

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(setPagination(asteroids.length));
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="container">
      <Header url={url} cart={cart} />
      <div className="app__main">
        <div className="main__content">
          <Filters
            dangerousOnly={dangerousOnly}
            onDangerous={onDangerous}
            kilometersDistance={kilometersDistance}
            lunarDistance={lunarDistance}
            onKilometers={onKilometers}
            onLunar={onLunar}
          />
          {asteroids && dangerousOnly
            ? asteroids
                .filter(
                  (asteroid) => asteroid.is_potentially_hazardous_asteroid
                )
                .map((asteroid) => (
                  <Link key={asteroid.id} href={`/asteroids/${asteroid.id}`}>
                    <a>
                      <Card
                        id={asteroid.id}
                        onAdd={onAdd}
                        name={asteroid.name}
                        date={
                          asteroid.close_approach_data[0].close_approach_date
                        }
                        killometers={
                          asteroid.close_approach_data[0].miss_distance
                            .kilometers
                        }
                        lunar={
                          asteroid.close_approach_data[0].miss_distance.lunar
                        }
                        size={
                          asteroid.estimated_diameter.meters
                            .estimated_diameter_max
                        }
                        danger={asteroid.is_potentially_hazardous_asteroid}
                        kilometersDistance={kilometersDistance}
                        cart={cart}
                      />
                    </a>
                  </Link>
                ))
                .slice(0, pagination)
            : asteroids
                .map((asteroid) => (
                  <Link key={asteroid.id} href={`/asteroids/${asteroid.id}`}>
                    <a>
                      <Card
                        id={asteroid.id}
                        onAdd={onAdd}
                        name={asteroid.name}
                        date={
                          asteroid.close_approach_data[0].close_approach_date
                        }
                        killometers={
                          asteroid.close_approach_data[0].miss_distance
                            .kilometers
                        }
                        lunar={
                          asteroid.close_approach_data[0].miss_distance.lunar
                        }
                        size={
                          asteroid.estimated_diameter.meters
                            .estimated_diameter_max
                        }
                        danger={asteroid.is_potentially_hazardous_asteroid}
                        kilometersDistance={kilometersDistance}
                        cart={cart}
                      />
                    </a>
                  </Link>
                ))
                .slice(0, pagination)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export interface Context extends NextPageContext {
  resolvedUrl: string;
}

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
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getCurrentDate()}&api_key=f4GgoAmeHhJLT7SQ9pfX9A4W8FqQy2GcrUgsAPSy&`
    );
    const url = ctx.resolvedUrl;
    return {
      props: {
        asteroids: [].concat
          .apply([], Object.values(data.near_earth_objects))
          .reverse(),
        url: url,
      },
    };
  } catch (error) {
    alert("Не удалось получить данные");
    return {
      props: {
        asteroids: [],
        url: "",
      },
    };
  }
};
