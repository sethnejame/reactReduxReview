import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from  "../../../tools/mockData"

const ManageCoursePage = (props) => {
  const {
    courses,
    authors,
    loadCourses,
    loadAuthors,
    saveCourse,
    history,
    ...rest
  } = props;

  const [ course, setCourse ] = useState({...rest.course})
  const [ errors, setErrors ] = useState({})


  useEffect(() => {
   if(courses.length === 0) {
     loadCourses().catch(error => {
         alert("Loading courses failed" + error);
     })
   }
   if(authors.length === 0) {
      loadAuthors().catch(error => {
          alert("Loading authors failed" + error);
      })
   }
  }, []);

  const onChange = e => {
    const { name, value } = e.target
    setCourse(prevCourse => ({
      ...prevCourse,  [name]: name === "authorId" ?
        parseInt(value, 10) : value
    }))
  }

  const onSave = (e) => {
    e.preventDefault()
    saveCourse(course).then( ()=> {
      history.push('/courses')
    })
  }

  return (
    <CourseForm course={course} errors={errors} authors={authors} onChange={onChange} onSave={onSave}/>
  )
};

ManageCoursePage.propTypes = {
  saveCourse: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const getCourseBySlug = (courses, slug) => courses.find(course => course.slug === slug) || null

// the first argument in mapStateToProps is the entire Redux store state (state)
// ownProps is automatically added by Redux and lets us access our component's (MCP's) props
// in this case, it means we can access routing related props that are populated on this component
// automatically by react router
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug
  const course = slug? getCourseBySlug(state.allCourses, slug) : newCourse
  return {
    course,
    courses: state.allCourses,
    authors: state.authors
  }
}

const mapDispatchToProps = {
  saveCourse: courseActions.saveCourse,
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
