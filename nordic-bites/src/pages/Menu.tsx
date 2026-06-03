import { useState } from "react";

import menuItems from "../data/menuData";

import MenuCard from "../components/MenuCard";
import SectionTitle from "../components/SectionTitle";
import PageWrapper from "../components/PageWrapper";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenuItems = menuItems
    .map((category) => {
      const filteredItems = category.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      return {
        ...category,
        items: filteredItems,
      };
    })
    .filter((category) => category.items.length > 0);

  return (
    <PageWrapper>
      <section className="menu-page">
        <SectionTitle
          title="Matseðill"
          subtitle="Ferskt hráefni og norræn matargerð"
        />

        <div className="menu-search">
          <input
            type="text"
            placeholder="Leita að rétti..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredMenuItems.length > 0 ? (
          <div className="menu-categories">
            {filteredMenuItems.map((category) => (
              <div className="menu-category-card" key={category.category}>
                <h3>{category.category}</h3>

                <p className="category-description">{category.description}</p>

                <div className="menu-items">
                  {category.items.map((item) => (
                    <MenuCard
                      key={item.name}
                      name={item.name}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">
            Engir réttir fundust fyrir "{searchTerm}".
          </p>
        )}
      </section>
    </PageWrapper>
  );
}

export default Menu;
