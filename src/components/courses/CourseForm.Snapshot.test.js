import React from 'react'
import CourseForm from './CourseForm'
import renderer from 'react-test-renderer'
import { courses, authors } from '../../../tools/mockData'

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      onChange={jest.fn()} // creates an empty function so we don't have to declare our own for the test
      authors={authors}
      onSave={jest.fn()}
      course={courses[0]}
      saving
    />)

  expect(tree).toMatchSnapshot()
})