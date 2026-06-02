import type { MenuCategory } from "../types/menu";

const menuItems: MenuCategory[] = [
  {
    category: "Forréttir",
    description: "Léttir og ferskir réttir til að byrja máltíðina.",

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
    description: "Matarmiklir réttir úr fersku hráefni.",

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

  {
    category: "Vefjur og samlokur",
    description: "Gott í hádeginu eða þegar þig langar í eitthvað fljótlegt.",

    items: [
      {
        name: "Kjúklingapanini með mozzarella",
        price: "2.990 kr",
      },
      {
        name: "Kjúklingasalatssamloka",
        price: "2.790 kr",
      },
      {
        name: "Buffalo-kjúklingavefja",
        price: "3.190 kr",
      },
    ],
  },

  {
    category: "Meðlæti",
    description: "Smáréttir sem passa vel með öllum aðalréttum.",

    items: [
      {
        name: "Sætar kartöflufranskar",
        price: "1.590 kr",
      },
      {
        name: "Hvítlauksfranskar",
        price: "1.490 kr",
      },
      {
        name: "Grillað grænmeti",
        price: "1.890 kr",
      },
    ],
  },
];

export default menuItems;
