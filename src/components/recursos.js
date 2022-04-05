const productos = [
  {
    id: 2,
    nombre: "Shoe Manufacturing",
    modelo: "Steven Madden, Ltd.",
    precio: "$81530.86",
  },
  {
    id: 3,
    nombre: "n/a",
    modelo: "Eagle Point Credit Company Inc.",
    precio: "$80659.37",
  },
  {
    id: 4,
    nombre: "Power Generation",
    modelo: "WEC Energy Group, Inc.",
    precio: "$188103.08",
  },
  {
    id: 5,
    nombre: "Services-Misc. Amusement & Recreation",
    modelo: "Intrawest Resorts Holdings, Inc.",
    precio: "$35017.78",
  },
  {
    id: 6,
    nombre: "Real Estate Investment Trusts",
    modelo: "Paramount Group, Inc.",
    precio: "$37388.80",
  },
  {
    id: 7,
    nombre: "Newspapers/Magazines",
    modelo: "New York Times Company (The)",
    precio: "$189249.15",
  },
  {
    id: 8,
    nombre: "n/a",
    modelo: "Capitala Finance Corp.",
    precio: "$32238.67",
  },
  {
    id: 9,
    nombre: "Major Pharmaceuticals",
    modelo: "Gemphire Therapeutics Inc.",
    precio: "$1399.26",
  },
  {
    id: 10,
    nombre: "Major Banks",
    modelo: "Community Bank System, Inc.",
    precio: "$123232.71",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};
