import React from "react";

import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";

import { Header, Footer } from "../components";

import {
  removeCart,
  clearCart,
  setUnvisibleModal,
  setVisibleModal,
} from "../redux/appReducer";

import { Context } from "./index";

interface CartProps {
  url: string;
}

const Cart: React.FC<CartProps> = ({ url }) => {
  const dispatch = useDispatch();
  const { cart, modalCart }: any = useSelector((state: StateSelector) => ({
    cart: state.app.cart,
    modalCart: state.app.modalCart,
  }));

  const onDelete = (id) => {
    if (
      window.confirm(
        "Вы действительно хотите удалить этот астероид из списка уничтожений?"
      )
    )
      dispatch(removeCart(id));
  };

  const onDestroy = () => {
    if (cart.length) {
      dispatch(setVisibleModal());
      dispatch(clearCart());
    } else {
      alert("Вы должны добавить хотя бы один астероид!");
    }
  };

  const onClear = () => {
    if (
      window.confirm("Вы действительно хотите очистить список уничтожения?")
    ) {
      dispatch(clearCart());
    }
  };

  const onClose = (e) => {
    e.preventDefault();
    dispatch(setUnvisibleModal());
  };

  return (
    <div className="container">
      <Header url={url} cart={cart} />
      <div className="app__main">
        <div className="cart__header">
          <h1 className="cart__title">Уничтожение</h1>
          <p onClick={onClear} className="cart__text">
            Очистить список уничтожения
          </p>
        </div>
        {cart.length > 0 ? (
          cart.map((asteroid) => (
            <div key={asteroid.id} className="cart__item">
              <Link href={`/asteroids/${asteroid.id}`}>
                <div
                  className="item
                    item-cart"
                  style={
                    !asteroid.danger
                      ? {
                          background:
                            "linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%)",
                        }
                      : {
                          background:
                            "linear-gradient(90deg, #FFB199 0%, #FF0844 100%)",
                        }
                  }
                >
                  <div className="item__main">
                    <div className="item__block item__block-cart">
                      <h1 className="item__title item__title-cart">
                        {asteroid.name}
                      </h1>
                      <div className="info ">
                        <div className="info__item info__item-cart">
                          <p className="info__key info__key-cart">Дата</p>
                          <span className="info__dots info__dots-cart"></span>
                          <p className="info__value info__value-cart">
                            {asteroid.date}
                          </p>
                        </div>
                        <div className="info__item info__item-cart">
                          <p className="info__key info__key-cart">Расстояние</p>
                          <span className="info__dots info__dots-cart"></span>
                          <p className="info__value info__value-cart">
                            {asteroid.distance} км
                          </p>
                        </div>
                        <div className="info__item info__item-cart">
                          <p className="info__key info__key-cart">Размер</p>
                          <span className="info__dots info__dots-cart"></span>
                          <p className="info__value info__value-cart">
                            {asteroid.size} м
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <i>
                <svg
                  onClick={() => onDelete(asteroid.id)}
                  className="cart__icon"
                  height="50"
                  viewBox="0 0 511.992 511.992"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0"
                    fill="#e76e54"
                  />
                </svg>
              </i>
            </div>
          ))
        ) : (
          <h3 className="cart__clear__title">Список пуст</h3>
        )}

        <div className="cart__footer">
          <p className="cart__subtitle">
            Всего астероидов: <span>{cart.length} шт</span>
          </p>
          <div className="cart__footer__buttons">
            <Link href="/">
              <a className="button button-back">Вернуться на главную</a>
            </Link>
            <button onClick={onDestroy} className="button button-del">
              Заказать бригаду им. Брюса Уиллиса
            </button>
          </div>
        </div>
        {modalCart && (
          <div className="modal">
            <p>
              Бригада будет доставлена на астероид в нужный момент и выполнит
              свою нелёгкую работу.
            </p>
            <a onClick={(e) => onClose(e)} className="modal__close"></a>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

export const getServerSideProps = async (ctx: Context): Promise<any> => {
  try {
    const url = ctx.resolvedUrl;
    return {
      props: {
        url: url,
      },
    };
  } catch (error) {
    alert("Не удалось получить данные");
    return {
      props: {
        url: "",
      },
    };
  }
};
