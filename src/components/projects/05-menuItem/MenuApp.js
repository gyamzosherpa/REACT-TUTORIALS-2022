import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import MenuList from './MenuList';
import './index.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <MenuList items={menuItems} />
        </section>
      </main>
    </>
  );
};

export default MenuApp;
