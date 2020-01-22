import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import * as authorActions from '../../redux/actions/authorActions'
import PropTypes from 'prop-types'
import CourseList from './CourseList'
import { Redirect } from 'react-router-dom'
import Spinner from "../common/Spinner"
import { toast } from 'react-toastify'

const CoursesPage = (props) => {

  const { courses, authors, loadCourses, loadAuthors, deleteCourse, loading } = props
  const [ redirect, setRedirect ] = useState()

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
  }, [])

  const handleDelete = async course => {
    toast.success('Course was deleted')
    try {
      await deleteCourse(course)
    } catch (error) {
      toast.error('Delete failed: ' + error.message, { autoClose: false })
    }
  }

  return (
      <>
        { redirect && <Redirect to='/course' />}
        {loading ? <Spinner/> : (
          <>
            <h2>Courses</h2>

            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => setRedirect(true)}
            >
              Add Course
            </button>

            <CourseList onDeleteClick={handleDelete} courses={courses} authors={authors}/>
          </>
        )}
      </>
  )
}

CoursesPage.propTypes = {
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
// the first argument in mapStateToProps is the entire Redux store state (state)
function mapStateToProps(state) {
  return {
    courses: state.authors.length === 0 ? []
        : state.allCourses.map(course => {
      return {
        ...course,
        authorName: state.authors.find(a => a.id === course.authorId).name
      }
    }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0
  }
}

const mapDispatchToProps = {
  createCourse: courseActions.saveCourse,
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  deleteCourse: courseActions.deleteCourse,
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage)
