import React from "react";
import classNames from "classnames";

interface FilterProps {
  onDangerous(): void;
  dangerousOnly: boolean;
  kilometersDistance: boolean;
  lunarDistance: boolean;
  onKilometers(): void;
  onLunar(): void;
}

const Filters: React.FC<FilterProps> = ({
  onDangerous,
  dangerousOnly,
  kilometersDistance,
  lunarDistance,
  onKilometers,
  onLunar,
}) => {
  return (
    <div className="filters">
      <div className="filters__checkbox">
        <input
          onChange={onDangerous}
          checked={dangerousOnly}
          type="checkbox"
          className="checkbox"
          name="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox">Показать только опасные</label>
      </div>
      <div className="distance">
        <ul className="distance__list">
          Расстояние &nbsp;
          <li
            onClick={onKilometers}
            className={classNames("distance__item", {
              active: kilometersDistance,
            })}
          >
            в километрах
          </li>
          ,&nbsp;
          <li
            onClick={onLunar}
            className={classNames("distance__item", {
              active: lunarDistance,
            })}
          >
            в дистанциях до луны
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
