const base = import.meta.env.BASE_URL;
const asset = (file) => `${base}assets/${file}`;

const products = [
  {
    id: 1,
    name: "M1887 Shotgun",
    price: 1500,
    image: asset("M1887.avif")
  },
  {
    id: 2,
    name: "Desert Eagle",
    price: 500,
    image: asset("DesertEagel.webp")
  },
  {
    id: 3,
    name: "AWM Sniper Rifle",
    price: 45000,
    image: asset("AWM-Duke-Swallow.jpg")
  },
  {
    id: 4,
    name: "AKM Assault Rifle",
    price: 2000,
    image: asset("ak.jpg")
  },
  {
    id: 5,
    name: "UMP45 Submachine Gun",
    price: 2500,
    image: asset("scar.webp")
  },
  {
    id: 6,
    name: "UMP9 SMG",
    price: 3000,
    image: asset("UMP.jpg")
  }
];

export default products;
