'use strict'

var React = require('react')
var ReactBootstrap = require('react-bootstrap')
var ReactRouterBootstrap = require('react-router-bootstrap')
var Panel = ReactBootstrap.Panel
var Button = ReactBootstrap.Button
var Label = ReactBootstrap.Label
var Modal = ReactBootstrap.Modal
var LinkContainer = ReactRouterBootstrap.LinkContainer

var FinaliseAssessment = React.createClass({
  propTypes: {
    assessment: React.PropTypes.object,
    markAssessmentDone: React.PropTypes.func.isRequired,
    isSummaryTab: React.PropTypes.bool.isRequired
  },
  getInitialState () {
    return { showModal: false }
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    return (
      (nextProps.assessment.status !== this.props.assessment.status) || nextProps.isSummaryTab || (this.props.isSummaryTab && !nextProps.isSummaryTab)
    )
  },
  close () {
    this.setState({ showModal: false })
  },
  open () {
    this.setState({ showModal: true })
  },
  handleLock: function () {
    this.props.markAssessmentDone()
    this.close()
  },
  render: function () {
    if (this.props.assessment.status === 'DONE') {
      return (
        <Panel header='All Locked In!' bsStyle='default'>
          <p>This assessment is now <Label bsStyle='default'>Read Only</Label>.</p>
          <p>No changes can be made to any of the fields.</p>
        </Panel>
      )
    } else if (this.props.isSummaryTab) {
      return (
        <Panel bsStyle='primary' header='Happy how everything looks?'>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Once you commit you will not be able to make futher changes.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button bsStyle='primary' onClick={this.handleLock}>Lock It In</Button>
            </Modal.Footer>
          </Modal>
          <p>When you're finished, lock in your results here.</p>
          <Button onClick={this.open} bsStyle='primary'>Lock It In</Button>
        </Panel>
      )
    } else {
      return (
        <Panel bsStyle='default' header='Happy how everything looks?'>
          <p>When you're finished, lock in your results on the Summary screen.</p>
          <LinkContainer key='summary' to={{pathname: '/assessment/' + this.props.assessment.id + '/summary'}}>
            <Button bsStyle='primary'>Summary</Button>
          </LinkContainer>
        </Panel>
      )
    }
  }
})

module.exports = FinaliseAssessment
