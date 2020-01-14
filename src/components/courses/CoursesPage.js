import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import * as authorActions from '../../redux/actions/authorActions'
import PropTypes from 'prop-types'
import CourseList from './CourseList'

const CoursesPage = (props) => {

  const { courses, authors, loadCourses, loadAuthors } = props

  useEffect(() => {
    courses.length === 0 ? loadCourses() : null
    authors.length === 0 ? loadAuthors() : null
  }, [courses, authors])

  return (
      <>
          <h2>Courses</h2>
          <CourseList courses={courses} authors={authors}/>
      </>
  )
}

CoursesPage.propTypes = {
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
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
    authors: state.authors
  }
}

const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage)
