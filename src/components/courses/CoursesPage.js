import React from "react";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = e => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  render() {
    return (
      <div>
        <form>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.course.title}
            />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" value="save" />
          </div>
        </form>
      </div>
    );
  }
}

export default CoursesPage;
