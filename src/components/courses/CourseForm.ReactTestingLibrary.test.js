import React from 'react'
import { cleanup, render } from 'react-testing-library'
import CourseForm from './CourseForm'
import {shallow} from "enzyme";

afterEach(cleanup)

//this is a factory that renders default props for CourseForm
function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  }

  const props = { ...defaultProps, ...args }
  return render(<CourseForm {...props} />)
  // render is the equivalent of a shallow render however RTL does not distinguish
  // between shallow and mount. . .components are always mounted!
}

it('should render Add Course header', () => {
  const { getByText } = renderCourseForm()
  getByText('Add Course')
})

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderCourseForm()
  getByText('Save')
})

it('should label save button as "Saving..." when saving', () => {
  const { getByText, debug } = renderCourseForm({ saving: true })
  debug() // RTL's debug is colored in the terminal :D
  getByText('Saving...')
})