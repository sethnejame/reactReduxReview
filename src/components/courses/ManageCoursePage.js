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

// the first argument in mapStateToProps is the entire Redux store state (state)
function mapStateToProps(state) {
  return {
    course: newCourse,
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
