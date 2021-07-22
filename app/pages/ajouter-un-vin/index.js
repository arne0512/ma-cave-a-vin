import CreateWine from "../../sources/view/CreateWine/CreateWine";

export default function CreateWinePage() {
  return <CreateWine />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  
  return {
    props: {},
    revalidate: 60,
  };
}
