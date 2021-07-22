import WineDetails from "../../sources/view/Inventory/WineDetails";
import { useRouter } from "next/router";
import axios from "axios";


const WinePage = ({ wineCard }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return <WineDetails wineCard={wineCard} />;
};

export async function getStaticPaths() {
    const res = await axios.get("http://localhost:3030/wines");
    const data = await res.data;

    const paths = data.map((wineCard) => {
        return {
            params: { id: wineCard.id.toString()}
        };
    });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(props) {
    const wineCard = await axios.get(`http://localhost:3030/wines/${props.params.id}`)

  return {
    props: {
      wineCard: wineCard.data,
    },
    revalidate: 60,
  };
}

export default WinePage;
