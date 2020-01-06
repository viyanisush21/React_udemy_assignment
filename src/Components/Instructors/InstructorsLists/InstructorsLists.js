import React from "react";
import "./InstructorsLists.css";
import InstructorCard from "../InstructorCard/InstructorCard";

const InstructorsLists = props => {
  const instructors = props.instructorInfo;
  return (
    <div className="container">
      <div className="content-title">
        <h5>Popular Instructors</h5>
      </div>
      <div>
        <div className="row">
          {instructors.map((instructor, i) => (
            <InstructorCard instructor={instructor} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsLists;
