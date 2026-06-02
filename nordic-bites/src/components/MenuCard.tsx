type MenuCardProps = {
  name: string;
  price: string;
};

function MenuCard({ name, price }: MenuCardProps) {
  return (
    <div className="menu-card">
      <div>
        <h4>{name}</h4>
      </div>

      <span>{price}</span>
    </div>
  );
}

export default MenuCard;
