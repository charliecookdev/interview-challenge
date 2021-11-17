import React, { useEffect, useState } from "react";
import "./App.css";
import MenuBuilder from "./Molecules/MenuBuilder";
import MenuPreview from "./Molecules/MenuPreview";
import MenuSummary from "./Molecules/MenuSummary";

export default () => {
  const [items, setItems] = useState(null);
  const [erros, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/items');
        const { items } = await response.json();
        setItems(items);
      } catch (error) {
        setError(error);
      }
    }

    fetchItems();
  }, []);

  return (
    <div className="wrapper">
      <MenuSummary />
      <div className="container menu-builder">
        <div className="row">
          <MenuBuilder items={items} />
          <MenuPreview />
        </div>
      </div>
    </div>
  );
};
