import React from "react";
import classNames from "classnames";
import Link from "next/link";

interface HeaderProps {
  cart: any[];
  url: string;
}

const Header: React.FC<HeaderProps> = ({ cart, url }) => {
  return (
    <header className="header">
      <div className="header__text">
        <Link href="/">
          <a>
            <h1 className="header__title">ARMAGGEDON V</h1>
          </a>
        </Link>
        <p className="header__subtitle">
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
          Земле.
        </p>
      </div>
      <nav className="nav">
        <ul>
          <Link href="/">
            <a>
              <li
                className={classNames("nav__item", { active: url !== "/Cart" })}
              >
                Астероиды
              </li>
            </a>
          </Link>
          <Link href="/Cart">
            <a>
              <li
                className={classNames("nav__item", { active: url === "/Cart" })}
              >
                Уничтожение {cart.length > 0 ? `(${cart.length})` : null}
              </li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
