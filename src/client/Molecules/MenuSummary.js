import React from 'react';
import DietItem from '../Atoms/DietItem';

const MenuPreview = ({ itemCount, dietCounts }) => {
  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{`${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}</span>
          </div>
          <div className="col-6 menu-summary-right">
            {Object.keys(dietCounts || {}).map((diet) => (
              <span key={`diet-count-${diet}`} data-testid="diet-count">
                {dietCounts[diet]}x
                <DietItem diet={diet} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default MenuPreview;
