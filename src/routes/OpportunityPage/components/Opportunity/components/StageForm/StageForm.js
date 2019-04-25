import React from 'react'
import { Button, Form } from 'reactstrap'
import Section from './components/Section'

export default class StageForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      stage: props.stage || {}
    }
  }

  updateSection = (sectionIndex, section) => {
    this.setState(prevState => {
      const nextStage = { ...prevState.stage };
      nextStage.sections = nextStage.sections || []
      nextStage.sections[sectionIndex] = section
      return {
        stage: nextStage
      }
    })
  }

  getSectionValues (index) {
    const sections = this.state.stage.sections || []
    return sections[index] || {}
  }

  // TODO: add action and save stage in opportunity
  handleSubmit = (event) => { event.preventDefault(); console.log('submit'); }
  
  render () {
    const { stageSettings } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>{stageSettings.stageLabel}</h1>
        {stageSettings.sections.map((sectionSetting, index) => {
          return (
            <Section
              settings={sectionSetting}
              section={this.getSectionValues(index)}
              sectionIndex={index}
              key={sectionSetting.sectionId}
              updateSection={this.updateSection}
            />)
        })}
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}