import * as courseActions from './courseActions'
import * as types from './actionTypes'
import { courses }  from '../../../tools/mockData'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

// Test an async action
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Async Actions', ()=> {
  afterEach(()=> {
    fetchMock.restore()
  })

  const payload = courses

  describe('Load Courses Thunk', () => {
    it('should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses', () => {
      fetchMock.mock('*', { // this captures all fetch calls and responds with some mock data
        body: payload,
        headers: { 'content-type': 'application/json' }
      })

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_COURSES_SUCCESS, payload }
      ]

      const store= mockStore({courses: []})

      return store.dispatch(courseActions.loadCourses()).then(()=> {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})

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