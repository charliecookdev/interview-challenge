import React from "react";
import DietItem from "../Atoms/DietItem";

const MenuPreview = ({ items }) => {
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {items.map(({ name, dietaries, id }) => (
          <li className="item" key={`preview-item-${id}`}>
            <h2>{name}</h2>
            <p>
              {dietaries.map((diet) => (
                <DietItem diet={diet} key={`preview-diet-${id}-${diet}`} />
              ))}
            </p>
            <button className="remove-item">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPreview;
