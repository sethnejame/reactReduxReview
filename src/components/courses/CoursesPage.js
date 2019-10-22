import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    };
  }

  render() {
    return (
      <div>
        <h2>Courses</h2>
      </div>
    );
  }
}

export default CoursesPage;
