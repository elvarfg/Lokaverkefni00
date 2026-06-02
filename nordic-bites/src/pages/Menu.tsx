import menuItems from "../data/menuData";

import MenuCard from "../components/MenuCard";
import SectionTitle from "../components/SectionTitle";
import PageWrapper from "../components/PageWrapper";

function Menu() {
  return (
    <PageWrapper>
      <section className="menu-page">
        <SectionTitle
          title="Matseðill"
          subtitle="Ferskt hráefni og norræn matargerð"
        />

        <div className="menu-categories">
          {menuItems.map((category) => (
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
      </section>
    </PageWrapper>
  );
}

export default Menu;
