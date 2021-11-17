import React from "react";
import DietItem from "../Atoms/DietItem";

const MenuBuilder = ({ items, onClick }) => {
  return (
    <div className="col-4">
      <div className="filters">
        <input className="form-control" placeholder="Name" />
      </div>
      <ul className="item-picker">
        {items?.map((item) => (
          <li className="item" key={`${item.name}-${item.id}`} onClick={() => onClick(item)}>
            <h2>{item.name}</h2>
            <p>
              {item.dietaries.map((diet) => (
                <DietItem diet={diet} key={`picker-diet-${item.id}-${diet}`} />
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBuilder;
