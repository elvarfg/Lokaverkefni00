import type { MenuCategory } from "../types/menu";

const menuItems: MenuCategory[] = [
  {
    category: "Forréttir",
    items: [
      {
        name: "Kjúklingasalat með fersku grænmeti",
        price: "3.490 kr",
      },
      {
        name: "Klassískt Caesar salat",
        price: "3.290 kr",
      },
      {
        name: "Asískt kjúklingasalat með sesamsósu",
        price: "3.690 kr",
      },
    ],
  },

  {
    category: "Aðalréttir",
    items: [
      {
        name: "Grillaður kjúklingur með kartöflum og salati",
        price: "4.990 kr",
      },
      {
        name: "Lax með sítrónusósu",
        price: "5.690 kr",
      },
      {
        name: "Grænmetispasta með pestó",
        price: "4.290 kr",
      },
    ],
  },
];

export default menuItems;