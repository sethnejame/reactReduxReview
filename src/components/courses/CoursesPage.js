import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

const CoursesPage = (props) => {
  const [course, setCourse] = useState({
    title: ""
  });

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
        </form>
        {console.log(course)}
      </div>
  )
};

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    course: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
