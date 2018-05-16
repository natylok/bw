import React, {Component} from 'react';
import '../style/scheduleUser.css';
import RaisedButton from 'material-ui/RaisedButton';
import {ScheduleList} from '../components/scheduleList';
import ScheduleUserHeader from '../components/scheduleHeader';
import { withRouter } from 'react-router'
import axios from 'axios';
import DateService from '../services/dateService';
import TextField from 'material-ui/TextField';
import DataService from '../services/dataService';
import Dialog from 'material-ui/Dialog';
import _ from 'lodash';
class UserSchedule extends Component{
    constructor(props){
        super(props);
        this.state = {
            times: [],
            formModalOpen:false,
            name:'',
            phone:'',
            date:DateService.getTodayDateFormatted(),
            hour:'',
            startHour:'',
            endHour:''
        }
    }
    componentDidMount(){
        const userUrl = this.props.match.params.id;
        DataService.getUserTimesPromise(userUrl,this.state.date).then((response) => {
            this.setState({times:response.data.times})
        })
    }
    setDate(date){
        this.setState({
            date:DateService.getFormattedDate(date)
        })
    }
    createDataObj(){
        return {
            userUrl: this.props.match.params.id,
            startHour: this.state.startHour,
            endHour:this.state.endHour,
            date:this.state.date,
            phone:this.state.phone,
            name:this.state.name
        }
    }
    createOrder(){
        const dataObj = this.createDataObj();
        
        DataService.createNewOrder(dataObj).then((data) => {
            this.closeFormModal();
            let tempTimes = this.state.times.map(item => {
                if(item.startHour === dataObj.startHour){
                    item.order = data;
                }
                return item;
            });
            this.setState({
                times:tempTimes
            });
        })
    }
    openFormModal(time){
        this.setState({
            formModalOpen:true,
            startHour:time.startHour,
            endHour:time.endHour
        });
    }
    closeFormModal(){
        this.setState({
            formModalOpen:false
        })
    }
    render(){
        return(
            <div className="scheduleWrapper">
                <ScheduleUserHeader date={this.state.date} setDate={(date) => {this.setDate(date)} }/>
                <ScheduleList times={this.state.times} onClick={(hour) => {this.openFormModal(hour)}}/>
                <Dialog
                    title={"אנא מלא/י את הפרטים על מנת לקבוע תור:"}
                    open={this.state.formModalOpen}
                    className="modal-form-wrapper"
                    onRequestClose={() => {this.closeFormModal()}}
                >
                    <TextField
                        hintText="שם מלא"
                        floatingLabelText="שם מלא"
                        onChange={(event,name) => {this.setState({name})}}
                    /><br />
                    <TextField
                        hintText="טלפון"
                        floatingLabelText="טלפון"
                        onChange={(event,phone) => {this.setState({phone})}}
                    /><br />
                    <RaisedButton onClick={() => {this.createOrder()}} className="order-button" label="הזמן/י" primary={true} />
                </Dialog>
            </div>
        );
    }
}

export default withRouter(UserSchedule);    
