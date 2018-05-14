import axios from 'axios';
import {GET_TIMES_PER_DATE_URL} from '../constants/apis';
export default class DataService{
    static getUserTimesPromise(userUrl,date){
        return axios.post(GET_TIMES_PER_DATE_URL,{userUrl,date});
    }
    static createNewOrder(name,phone){
        
    }
}