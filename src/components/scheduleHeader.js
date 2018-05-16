import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DateService from '../services/dateService';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';

import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';
import '../style/scheduleUser.css';
const IntlPolyfill = require('intl');
const DateTimeFormat = IntlPolyfill.DateTimeFormat;
require('intl/locale-data/jsonp/he');
export default class ScheduleUserHeader extends Component{
    openDatePicker(){
        this.refs.dp.show();
    }
    render(){
        return(
            <div className="schedule-header">
                <div className="schedule-date-wrapper">
                    <div className="date-text-wrapper">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="schedule-date-text">{DateService.convertDateString(this.props.date)}</span>
                    </div>
                    <div className="change-button">
                        <RaisedButton onClick={() => {this.openDatePicker()}} label='שינוי תאריך' />
                        <DatePickerDialog  
                            ref="dp" 
                            DateTimeFormat={DateTimeFormat}
                            onAccept={(date) => {this.props.setDate(date);}} 
                            firstDayOfWeek={0}
                            okLabel="אישור"
                            cancelLabel="ביטול"
                            autoOk={false}
                        />
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
        )
    }
}
const scheduleButtonStyle = {
    fontSize:16,
    color:'#2d2a2a',
    fontWeight:'bold'
};