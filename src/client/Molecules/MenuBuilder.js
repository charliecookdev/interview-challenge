import React from "react";

const MenuBuilder = ({ items }) => {
  return (
    <div className="col-4">
      <div className="filters">
        <input className="form-control" placeholder="Name" />
      </div>
      <ul className="item-picker">
        {items?.map(({ name, dietaries, id }) => (
          <li className="item" key={`${name}-${id}`}>
            <h2>{name}</h2>
            <p>
              {dietaries.map((diet) => (
                <span key={`${id}-${diet}`} className="dietary">{diet}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBuilder;
