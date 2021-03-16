import React from "react";
import Vehicle from "./Vehicle";

function VehiclesList({ photos }) {
  return (
    <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
      <div className="row">
        {photos?.map((photo) => (
          <div key={photo.id} className="col-xs-12 col-sm-6 col-md-4">
            <Vehicle photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehiclesList;
