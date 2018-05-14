import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';
import '../style/scheduleUser.css';
export const ScheduleUserHeader = () => {
    return(
        <div className="schedule-header">
            <div className="schedule-date-wrapper">
                <div className="date-text-wrapper">
                    <i className="fas fa-calendar-alt"></i>
                    <span className="schedule-date-text">11.05.2018</span>
                </div>
                <div className="change-button">
                    <RaisedButton label="עדכון תאריך" labelStyle={scheduleButtonStyle}/>
                </div>
            </div>
            <div className="schedule-stepper">
                <Stepper activeStep={1}>
                    <Step>
                        <StepLabel>בחר/י תור</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>מלא/י פרטים</StepLabel>
                    </Step>
                </Stepper>
            </div>
        </div>
    );
}
const scheduleButtonStyle = {
    fontSize:16,
    color:'#2d2a2a',
    fontWeight:'bold'
};