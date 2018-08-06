import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import StatusBar from '../index'

describe('Components - StatusBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<StatusBar color={'white'} />).toJSON()
    expect(tree).toMatchSnapshot()
  }),
    it('renders correctly', () => {
      const tree = renderer.create(<StatusBar dark />).toJSON()
      expect(tree).toMatchSnapshot()
    })
})
