import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import TextLabel from '../index'

describe('Components - TextLabel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TextLabel />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
