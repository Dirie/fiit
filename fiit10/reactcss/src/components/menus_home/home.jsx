import React from "react";
import { Link } from "react-router-dom";
// import bg_img from "../../assets/b3.jpg";

const Home = props => {
  return (
    <React.Fragment>
      {/* <div className="jumbotron"> */}
      <div className="container">
        <div className="row">
          <div className="col bgImg" />
          <div class="col-8">
            <h1 className="display-4">New application</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classNamees for typography and spacing to space
              content out within the larger container.
            </p>
            <Link className="btn btn-primary btn-lg" to="#" role="button">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
