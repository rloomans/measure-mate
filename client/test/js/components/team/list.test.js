/* eslint-env chai */
'use strict'

var React = require('react')
var expect = require('chai').expect
var shallow = require('enzyme').shallow
var TeamList = require('../../../../js/components/team/teamList')

var mockedTeams = [
  {
    id: 1,
    created: '2016-01-12T01:45:14.525000Z',
    name: 'Test team'
  },
  {
    id: 2,
    created: '2016-01-12T01:45:14.525000Z',
    name: 'Test team 2'
  }
]

var mockedTeamTags = {
  1: [],
  2: [{ id: 1, name: 'test' }, { id: 2, name: 'foo' }]
}

describe('TeamList Component', function () {
  it('contains a table', function () {
    const wrapper = shallow(<TeamList teams={mockedTeams} teamTags={mockedTeamTags} />)

    const element = wrapper.find('table')

    expect(element).to.not.be.empty
  })
})
