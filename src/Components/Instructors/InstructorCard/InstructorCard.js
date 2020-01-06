import React from "react";
import { Link } from "react-router-dom";
import "./InstructorCard.css";
const InstructorCard = props => {
  const authors = props.instructor;
  return (
    <div className="col-md-3" key={authors.key}>
      <Link
        to={{ pathname: "/author", state: { author: authors } }}
        style={{ textDecoration: "none" }}
      >
        <div className="cardSize">
          <div className="card-body text-center">
            <div className="card-image">
              <img
                className="user-author user-author-image "
                src={authors.image}
                alt="author images"
              />
            </div>
            <div className="card-title">
              <h5 className="instructor-Name">{authors.name}</h5>
            </div>
            <div className="topic details">{authors.topics}</div>
            <div className="student details">782.653 students</div>
            <div className="courses details">33 courses</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InstructorCard;
