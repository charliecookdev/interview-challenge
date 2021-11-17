import React, { useEffect, useState } from "react";
import "./App.css";
import MenuBuilder from "./Molecules/MenuBuilder";
import MenuPreview from "./Molecules/MenuPreview";
import MenuSummary from "./Molecules/MenuSummary";

export default () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedDietaries, setSelectedDietaries] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`/api/items?searchTerm=${searchText}`);
        const { items } = await response.json();
        setItems(items);
      } catch (error) {
        setError(error);
      }
    }

    fetchItems();
  }, [searchText]);

  const selectItem = (item) => {
    setSelectedItems(prev => {
      if (prev.find(({ id }) => id === item.id)) {
        return prev;
      }

      return [...prev, item];
    })
  }

  const removeItem = (itemId) => {
    setSelectedItems(prev => prev.filter(({ id }) => id !== itemId))
  }

  useEffect(() => {
    const diets = [];
    selectedItems.map(({ dietaries }) => diets.push(...dietaries));

    const occurences = diets.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc
    }, {})

    setSelectedDietaries(occurences)
  }, [selectedItems]);

  return (
    <div className="wrapper">
      <MenuSummary itemCount={selectedItems.length} dietCounts={selectedDietaries} />
      <div className="container menu-builder">
        <div className="row">
          <MenuBuilder items={items} onClick={selectItem} onTextInput={setSearchText} />
          <MenuPreview items={selectedItems} onClick={removeItem} />
        </div>
      </div>
    </div>
  );
};
