import React, {Component} from 'react';
import '../style/scheduleUser.css';
import RaisedButton from 'material-ui/RaisedButton';
import {ScheduleList} from '../components/scheduleList';
import {ScheduleUserHeader} from '../components/scheduleHeader';
import { withRouter } from 'react-router'
import axios from 'axios';
import DateService from '../services/dateService';
import TextField from 'material-ui/TextField';
import DataService from '../services/dataService';
import Dialog from 'material-ui/Dialog';
class UserSchedule extends Component{
    constructor(props){
        super(props);
        this.state = {
            times: [],
            formModalOpen:false,
            name:'',
            phone:'',
            date:'',
            hour:''
        }
    }
    componentDidMount(){
        const userUrl = this.props.match.params.id;
        const date = DateService.getTodayDateFormatted();
        DataService.getUserTimesPromise(userUrl,date).then((response) => {
            this.setState({times:response.data.times})
        })
    }
    createOrder(){
        DateService.createNewOrder(this.state.name,this.state.phone).then((data) => {
            this.closeFormModal();
        })
    }
    openFormModal(){
        this.setState({
            formModalOpen:true
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
                <ScheduleUserHeader/>
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
