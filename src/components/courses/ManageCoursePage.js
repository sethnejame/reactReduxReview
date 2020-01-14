import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

const ManageCoursePage = (props) => {

    const { courses, authors, loadCourses, loadAuthors } = props;

    useEffect(() => {
        loadCourses();
        loadAuthors()
    }, []);

    return (
        <>
            <h2>Manage Course</h2>
        </>
    )
};

ManageCoursePage.propTypes = {
    createCourse: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired
};
// the first argument in mapStateToProps is the entire Redux store state (state)
function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors
    }
}

const mapDispatchToProps = {
    createCourse: courseActions.createCourse,
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
