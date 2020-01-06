import React, { Component } from "react";
import "../Topics/Topics.css";

class Topics extends Component {
  render() {
    const allTopicsList = this.props.topicsList;
    return (
      <div className="container">
        <div className="content-title">
          <h5>Popular Topics</h5>
        </div>
        <div className="row">
          {allTopicsList.map((list, i) => {
            return list.topics.map((topic, i) => (
              <div className="col-sm-3" key={i}>
                <div className="card">
                  <div className="card-body topic text-center">{topic}</div>
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    );
  }
}

export default Topics;
