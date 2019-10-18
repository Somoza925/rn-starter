import React from 'react';
import {View, Text} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const CalendarDetail = () => {
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};

    return (<View>
            <Calendar 
                markedDates={{
                    '2019-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
                    '2019-10-26': {dots: [massage, workout], disabled: true}
                }}
                onDayPress={(day) => {console.log('selected day', day)}}
                markingType={'multi-dot'}
                
                style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 350
                }}

                
            />
    </View>);
}


export default CalendarDetail;