import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

const CoursesPage = (props) => {
  const [course, setCourse] = useState({
    title: ""
  });

  const { allCourses } = props;

  const handleChange = e => {
    setCourse({...course, [e.target.name]: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(courseActions.createCourse(course));
  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <div className="form-group">
            <input
                type="text"
                name="title"
                className="form-control"
                onChange={handleChange}
                value={course.title}
            />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" value="save"/>
          </div>
          <div className="container">
            <ul>
            {allCourses.length > 0 ? allCourses.map((course, index) => (
                <li key={index}>{course.title}</li>
            )) : undefined}
            </ul>
          </div>
        </form>
      </div>
  )
};

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};
// the first argument in mapStateToProps is the entire Redux store state (state)
function mapStateToProps(state) {
  return {
    allCourses: state.allCourses
  };
}

export default connect(mapStateToProps)(CoursesPage);
