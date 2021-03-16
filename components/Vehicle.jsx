import React from "react";
import { useRouter } from "next/router";
import { Card } from "antd";
const { Meta } = Card;

function Vehicle({ photo }) {
  const router = useRouter();
  const openItem = () => {
    router.push(`/vehicles/${photo.id}`);
  };
  return (
    <Card
      hoverable
      style={{ margin: 20 }}
      cover={
        <figure className="figure">
          <img alt="example" src={photo.url} />
        </figure>
      }
      onClick={openItem}
    >
      <Meta title="Walpaper" description="www.walpapers.com" />
    </Card>
  );
}

export default Vehicle;
