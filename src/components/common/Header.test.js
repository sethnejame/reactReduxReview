import React from 'react'
import Header from './Header'
import { mount, shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Note how with shallow render you search for the React component tag
it('contains 3 Navlinks via shallow', () => {
  const numLinks = shallow(<Header />).find('NavLink').length
  expect(numLinks).toEqual(3)
})

// Note how with mount you search for the final rendered HTML since it generates the final DOM
// We also need to pull in React Router's memoryRouter for testing since the header expects
// to have React Router's props passed in
it('contains 3 anchors via mount', () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header/>
    </MemoryRouter>
  ).find("a").length
  // we look for 'a' (anchors) here because the final result of 'mount' is the actual DOM code
  // so our NavLinks are actually rendered as <a tags
  expect(numAnchors).toEqual(3)
})