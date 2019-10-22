import React from "react";
import { connect } from "react-redux";

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

  handleSubmit = e => {
    e.preventDefault(); // prevent default behavior on submit (post to server)
    alert(this.state.course.title);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
        {console.log(this.state)}
      </div>
    );
  }
}
// determines what state is passed to our comp via props
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// determines what actions are passed to our comp via props
// function mapDispatchToProps() {
// }

export default connect(mapStateToProps)(CoursesPage);
