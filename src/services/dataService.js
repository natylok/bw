import axios from 'axios';
import {GET_TIMES_PER_DATE_URL,CREATE_NEW_ORDER} from '../constants/apis';
export default class DataService{
    static getUserTimesPromise(userUrl,date){
        return axios.post(GET_TIMES_PER_DATE_URL,{userUrl,date});
    }
    static createNewOrder(data){
        return axios.post(CREATE_NEW_ORDER,data);
    }
}