function About() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/about-us.jpg" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Welcome to Bloke Ute & Trailer Transport, your local family-run
              business dedicated to providing reliable and efficient
              transportation services in Townsville and surrounding areas.
              Founded by Jacob and his family, we pride ourselves on our
              commitment to exceptional customer service and personalized care.
              At Bloke Ute & Trailer Transport, we understand that moving your
              belongings can be a daunting task, whether it’s a single item or
              an entire household. That’s why we approach each job with the
              utmost care, treating your goods as if they were our own. Our
              mission is to ensure a smooth and hassle-free experience for our
              clients, delivering peace of mind with every transport.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
