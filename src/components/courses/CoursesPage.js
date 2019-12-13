import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

const CoursesPage = (props) => {

  const { courses } = props;

  return (
      <>
          <h2>Courses</h2>
          <div className="container">
            <ul>
            {courses.length > 0 ? courses.map((course, index) => (
                <li key={index}>{course.title}</li>
            )) : undefined}
            </ul>
          </div>
      </>
  )
};

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};
// the first argument in mapStateToProps is the entire Redux store state (state)
function mapStateToProps(state) {
  debugger;
  console.log('mapState is called, mapping the new stored state to the CoursesPage component (passed in on props)');
  return {
    courses: state.allCourses
  };
}

const mapDispatchToProps = {
  createCourse: courseActions.createCourse
};

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
