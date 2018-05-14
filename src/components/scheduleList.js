import React from 'react';
import {List, ListItem} from 'material-ui/List';
import '../style/scheduleUser.css';
export const ScheduleList = ({times,onClick}) => {
    const itemListByTimes = times.map(time => {
        return <ListItem onClick={() => {onClick(time)}} key={time.startHour} innerDivStyle={listItemStyle} primaryText={`${time.startHour}-${time.endHour}`}/>
    })
    return(
        <div className="schedule-orders-wrapper">
            <List style={{display:'flex', flexWrap:'wrap',flexDirection:'row', width:'100%', justifyContent:'flex-start'}}>
                {itemListByTimes}
            </List>
        </div>
    )
}
const listItemStyle = {
    textAlign:'center', 
    margin:'0.5vw',
    border:'1px solid rgba(45, 42, 42,0.5)',
    minWidth:'8vw'
}