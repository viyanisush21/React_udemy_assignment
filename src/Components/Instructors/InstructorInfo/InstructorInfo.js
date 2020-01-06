import React, { Component } from "react";
import "./InstructorInfo.css";
import * as FontAwesome from "react-icons/fa";
class InstructorInfo extends Component {
  render() {
    const { author } = this.props.location.state;
    console.log(author);
    const websiteLink = author.website;
    return (
      <div>
        <div className="title-bar">
          <div className="container">
            <div className="title">
              <div>
                <h1>{author.name}</h1>
                <h2>{author.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="instructor-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="image">
                  <img
                    src={author.image}
                    alt="instructor-profile"
                    className="user-author user-author-image"
                  />
                </div>
                <div className="social-link-list">
                  <div className="social__link">
                    <a href={websiteLink} target="_blank">
                      <FontAwesome.FaGlobe className="link" />
                    </a>
                    <a>
                      <FontAwesome.FaTwitter className="link" />
                    </a>
                    <a>
                      <FontAwesome.FaYoutube className="link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="instructor-details">
                  <p>{author.description.intro}</p>
                  <p>{author.description.skills}</p>
                  <p>{author.description.important}</p>
                </div>
                <ul className="reviews-bar">
                  <li>
                    <div className="students">Total students</div>
                    <div>495,239</div>
                  </li>
                  <li>
                    <div className="students">Courses</div>
                    <div>24</div>
                  </li>
                  <li>
                    <div className="students">Reviews</div>
                    <div>197,238</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstructorInfo;
