import axios from "axios";
import VehiclesList from "../components/VehiclesList";
import AppLayout from "../components/AppLayout";

export default function Home({ photos }) {
  return (
    <AppLayout>
      <VehiclesList photos={photos} />
    </AppLayout>
  );
}

Home.getInitialProps = async () => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  );
  return { photos: data };
};
