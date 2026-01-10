const Home = () => {
    return (
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
      
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="/Images/marriage1.jpg" className="d-block w-100" alt="Slide 1" style={{ height: "780px", objectFit: "cover" }} />
          <div className="carousel-caption">
            <h2>Find Your Life Partner</h2>
            <p>Trusted Maratha Matrimony Platform</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/Images/marriage2.jpg" className="d-block w-100" alt="Slide 2" style={{ height: "780px", objectFit: "cover" }} />
          <div className="carousel-caption">
            <h2>Thousands of Verified Profiles</h2>
            <p>Start your journey today</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/Images/marriage3.jpg" className="d-block w-100" alt="Slide 3" style={{ height: "780px", objectFit: "cover" }} />
          <div className="carousel-caption">
            <h2>Your Perfect Match Awaits</h2>
            <p>Safe • Trusted • Reliable</p>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};


  
  export default Home;
  