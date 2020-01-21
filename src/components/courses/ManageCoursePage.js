import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import * as authorActions from '../../redux/actions/authorActions'
import PropTypes from 'prop-types'
import CourseForm from './CourseForm'
import { newCourse } from  '../../../tools/mockData'
import Spinner from '../common/Spinner'
import { toast } from 'react-toastify'

const ManageCoursePage = (props) => {
  const {
    courses,
    authors,
    loadCourses,
    loadAuthors,
    saveCourse,
    history,
    loading,
    ...rest
  } = props;

  const [ course, setCourse ] = useState({...rest.course})
  const [ errors, setErrors ] = useState({})
  const [ saving, setSaving ] = useState(false)

  useEffect(() => {
   if(courses.length === 0) {
     loadCourses().catch(error => {
         alert("Loading courses failed" + error);
     })
   } else {
     setCourse({...rest.course})
   }
   if(authors.length === 0) {
      loadAuthors().catch(error => {
          alert("Loading authors failed" + error);
      })
   }
  }, [props.course]);

  const onChange = e => {
    const { name, value } = e.target
    setCourse(prevCourse => ({
      ...prevCourse,  [name]: name === "authorId" ?
        parseInt(value, 10) : value
    }))
  }

  const onSave = (e) => {
    e.preventDefault()
    setSaving(true)
    saveCourse(course).then( ()=> {
      toast.success("Course saved!")
      history.push('/courses')
    }).catch(error => {
      setSaving(false)
      setErrors({ onSave: error.message })
    })
  }

  return (
    <>
    { authors.length === 0 || courses.length === 0 ? <Spinner/> : (
        <CourseForm
          course={course}
          errors={errors}
          authors={authors}
          onChange={onChange}
          onSave={onSave}
          saving={saving}
        />
      )
    }
    </>
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
  loading: PropTypes.bool.isRequired,
}

const getCourseBySlug = (courses, slug) => courses.find(course => course.slug === slug) || null

// the first argument in mapStateToProps is the entire Redux store state (state)
// ownProps is automatically added by Redux and lets us access our component's (MCP's) props
// in this case, it means we can access routing related props that are populated on this component
// automatically by react router
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug
  const course = slug && state.allCourses.length > 0
    ? getCourseBySlug(state.allCourses, slug) : newCourse
  return {
    course,
    courses: state.allCourses,
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  }
}

const mapDispatchToProps = {
  saveCourse: courseActions.saveCourse,
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
