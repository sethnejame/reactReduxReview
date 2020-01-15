import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

const ManageCoursePage = (props) => {

    const { courses, authors, loadCourses, loadAuthors } = props;

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

    return (
        <>
            <h2>Manage Course</h2>
        </>
    )
};

ManageCoursePage.propTypes = {
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    courses: PropTypes.array,
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
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
