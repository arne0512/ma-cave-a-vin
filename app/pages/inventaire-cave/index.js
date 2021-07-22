import Inventory from "../../sources/view/Inventory/Inventory";


export default function InventoryPage({ wines }) {
  return <Inventory wines={wines} />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  const wines = [
    {
      id: 1,
      name: "Château Moulin",
      vintage: "1997",
      appellation: "Pessac-Léognan",
      type: "Rouge",
      grape: "Merlot 80% / Cabernet Sauvignon 20%",
      organic: "Non",
      price: "42€",
      buying_year: "2005",
      quantity: "1",
      tasting_note: "",
      comments: "",
    },
    {
      id: 2,
      name: "Château Roland",
      vintage: "1990",
      appellation: "Graves",
      type: "Blanc",
      grape: "Sauvignon blanc",
      organic: "Oui",
      price: "35€",
      buying_year: "2002",
      quantity: "2",
      tasting_note: "",
      comments: "",
    },
    {
      id: 3,
      name: "Château Verzon",
      vintage: "2015",
      appellation: "Côte de Rhône",
      type: "Rouge",
      grape: "Merlot 80% / Cabernet Sauvignon 20%",
      organic: "Non",
      price: "15€",
      buying_year: "2018",
      quantity: "1",
      tasting_note: "",
      comments: "",
    },
  ];

  return {
    props: {
      wines: wines,
    },
    revalidate: 60,
  };
}
