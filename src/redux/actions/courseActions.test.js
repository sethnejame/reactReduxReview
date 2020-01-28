import * as courseActions from './courseActions'
import * as types from './actionTypes'
import { courses } from '../../../tools/mockData'

describe('createCourseSuccess', ()=> {
  it('should create a CREATE_COURSE_SUCCESS action', ()=> {
    //arrange
    const payload = courses[0]
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      payload
    }

    //act
    const action  = courseActions.createCourseSuccess(payload)

    //assert
    expect(action).toEqual(expectedAction)
  })
})