import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DateField from './DateField'
import { Grid } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    background: 'white',
    marginTop: 20
  },
  content: {
    flexGrow: 1
  },
  button: {
    marginRight: theme.spacing.unit
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  buttonStyle:{
    fontSize: 20
  },
  completed: {
    display: 'inline-block'
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    fontSize: 40
  },
  iconContainer: { // define styles for icon container
    transform: 'scale(2)',
  },
  stepper: {
    paddingTop: 100
  }
})





class BookTicket extends React.Component {
  state = {
    activeStep: 0,
    completed: new Set()
  };


  getSteps = () => {
    return ['Show Date', 'Show Timings', 'Confirm']
  }
  
  getStepContent = (step) => {
    switch (step) {
    case 0:
      return <DateField handleDateSelect={this.setDate} />
    case 1:
      return 'empty'
    case 2:
      return 'Confirmed!'
    default:
      return 'Unknown step'
    }
  }

  totalSteps = () => this.getSteps().length;


  

  handleNext = () => {
    let activeStep

    if (this.isLastStep() && !this.allStepsCompleted()) {
      const steps = this.getSteps()
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i))
    } else {
      activeStep = this.state.activeStep + 1
    }
    
    this.setState({
      activeStep
    })
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step
    })
  };

  handleComplete = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const completed = new Set(this.state.completed)
    completed.add(this.state.activeStep)
    this.setState({
      completed
    })

    if (completed.size !== this.totalSteps()) {
      this.handleNext()
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set()
    })
  };

  

  isStepComplete(step) {
    return this.state.completed.has(step)
  }

  completedSteps() {
    return this.state.completed.size
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps()
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1
  }

  
  render() {
    const { classes } = this.props
    const steps = this.getSteps()
    const { activeStep } = this.state

    return (
      <div className={classes.root}>
        <Stepper className={classes.stepper} alternativeLabel nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {}
            const buttonProps = {}

            return (
              <Step key={label} {...props}>
                <StepButton
                  onClick={this.handleStep(index)}
                  completed={this.isStepComplete(index)}
                  {...buttonProps}
                  classes={{ 
                    iconContainer: classes.iconContainer
                  }}
                >
                  <Typography variant={'h4'}>{label}</Typography>
                </StepButton>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {this.allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                Your ticket is confirmed
              </Typography>
            </div>
          ) : (
            <div style={{margin: '70px 0px 70px 0'}}>
              <Grid container justify={'center'}>
                <Grid >
                  <div
                    className={classes.content}
                  >
                    {this.getStepContent(activeStep)}
                  </div>
                </Grid>
              </Grid>

              <div style={{marginTop: '60px',width: '90%',textAlign:'right' }}>
                <Button
                  disabled={activeStep === 0}
                  variant="contained"
                  color="secondary"
                  onClick={this.handleComplete}
                  className={classes.button}
                  style={{margin: '80px 0 80px 0',padding: '15px 100px 10px 100px', marginRight: '10px',fontSize: 15, }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleComplete}
                  className={classes.button}
                  style={{margin: '80px 0 80px 0',padding: '15px 100px 10px 100px',fontSize: 15, }}
                >
                  Next
                </Button>
                
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

BookTicket.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(BookTicket)
