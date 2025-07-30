import React from "react";
import "./ExploreMenu.css";
import data from '/src/assets/assets.js';

const menu = data.menu_list;

const ExploreMenu = ({ category, setcategory }) => {
  return (
    <div className="ExploreMenu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        From sizzling starters to delightful desserts, our menu is packed with
        freshly prepared dishes to satisfy every craving. Whether you're in the
        mood for comfort food or trying something new, QuickBites has something
        special for everyone!
      </p>
      <div className="explore-menu-list">
        {menu.map((item, index) => (
          <div
            key={index}
            className="explore-menu-item"
            onClick={() =>
              setcategory((prev) =>
                prev === item.menu_name ? "ALL" : item.menu_name
              )
            }
          >
            <div
              className={`explore-menu-image ${
                category === item.menu_name ? "active" : ""
              }`}
            >
              <img src={item.menu_image} alt={item.menu_name} />
            </div>
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
