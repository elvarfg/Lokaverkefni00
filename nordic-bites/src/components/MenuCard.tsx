type MenuCardProps = {
  name: string;
  price: string;
};

function MenuCard({
  name,
  price,
}: MenuCardProps) {
  return (
    <div className="menu-card">
      <h4>{name}</h4>

      <p>{price}</p>
    </div>
  );
}

export default MenuCard;