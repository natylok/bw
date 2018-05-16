import moment from 'moment';
export default class DateService{
    static getTodayDateFormatted(){
        return moment(new Date()).format('MM/DD/YY');
    }
    static getFormattedDate(date){
        return moment(new Date(date)).format('MM/DD/YY');
    }
    static convertDateString(date){
        return moment(new Date(date)).format('DD-MM-YY');
    }
}