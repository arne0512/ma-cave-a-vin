import WineDetails from "../../sources/view/Inventory/WineDetails";
import { useRouter } from "next/router";

const WinePage = ({ wineCard }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return <WineDetails wineCard={wineCard} />;
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(props) {
  const wineCard = {
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
  };
  return {
    props: {
      wineCard: wineCard,
    },
    revalidate: 60,
  };
}

export default WinePage;
