import Card from "./Card";

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Furniture Pickup & Deliveries"
                img="card1.png"
                text="Need to move a new couch or dining table? We handle it all with precision and care."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Small House/Apartment Moves"
                img="card2.png"
                text="Transitioning to a new home? Our team is here to assist with every step of the moving process."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Specialty Items"
                img="card3.png"
                text="From kitchen sinks and white goods to palletised orders from Bunnings and bulky furniture from op shops or marketplace, we’ve got you covered."
              />
            </div>
          </div>
          <p className="text-center mt-4">
            We’re available from 7 am to 5 pm, Monday to Saturday, with a 50%
            fee for Sunday services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
