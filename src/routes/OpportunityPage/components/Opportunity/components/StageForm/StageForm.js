import React from 'react'
import { Button, Form } from 'reactstrap'
import Section from './components/Section'

export default class StageForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      stage: props.stage || { score: 0 }
    }
  }

  updateSection = (sectionIndex, section, scoreDifference = 0) => {
    this.setState(prevState => {
      const nextStage = { ...prevState.stage };
      nextStage.sections = nextStage.sections || []
      nextStage.sections[sectionIndex] = section
      nextStage.score += scoreDifference
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
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1>{stageSettings.stageLabel}</h1>
          <span style={{fontSize: '2.5rem'}}>{this.state.stage.score || 0}</span>
        </div>
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
