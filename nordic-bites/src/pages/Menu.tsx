import menuItems from "../data/menuData";

import MenuCard from "../components/MenuCard";
import SectionTitle from "../components/SectionTitle";

function Menu() {
  return (
    <section className="menu-page">
      <SectionTitle title="Matseðill" />

      {menuItems.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>

          {category.items.map((item) => (
            <MenuCard
              key={item.name}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Menu;