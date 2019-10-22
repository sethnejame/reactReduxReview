import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

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
    e.preventDefault();
    // dispatch is auto passed in on props b/c we didn't dec. mapDispatch
    // it allows us to dispatch our actions
    this.props.dispatch(courseActions.createCourse(this.state.course));
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
