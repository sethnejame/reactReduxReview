import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import CourseList from './CourseList';

const CoursesPage = (props) => {

  const { courses, loadCourses } = props;

  useEffect(() => {
    loadCourses()
  }, []);

  return (
      <>
          <h2>Courses</h2>
          <CourseList courses={courses} />
      </>
  )
};

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};
// the first argument in mapStateToProps is the entire Redux store state (state)
function mapStateToProps(state) {
  return {
    courses: state.allCourses
  };
}

const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
  loadCourses: courseActions.loadCourses,
};

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
