import React from 'react';
import {View, Text} from 'react-native';
import CalendarDetail from '../components/CalendarDetail';

const CalendarScreen = () => {
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};

    return (<View>
            <CalendarDetail/>
    </View>);
}


export default CalendarScreen;