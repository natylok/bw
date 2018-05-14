import moment from 'moment';
export default class DateService{
    static getTodayDateFormatted(){
        return moment(new Date()).format('MM/DD/YYYY');
    }
}