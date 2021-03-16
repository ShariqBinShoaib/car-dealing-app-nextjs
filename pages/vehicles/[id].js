import { useRouter } from "next/router";
import axios from "axios";
import Item from "../../components/Item";
import AppLayout from "../../components/AppLayout";

function VehicleDetail({ vehicle }) {
  return (
    <div>
      <AppLayout title="| Vehicle Detail">
        <Item vehicle={vehicle} />
      </AppLayout>
    </div>
  );
}

VehicleDetail.getInitialProps = async (context) => {
  const { id } = context.query;
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  );
  return { vehicle: data?.filter((vehicle) => vehicle.id === id) };
};

export default VehicleDetail;
