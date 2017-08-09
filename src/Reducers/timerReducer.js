const timerReducer = (state = {
    time: '00:00:00',
    hours: 0,
    minutes: 0,
    seconds: 0,
	timer: false
}, action) => {
    switch(action.type){
        case "TIMER_CONTROLLER":
            state = {
                time: action.payload.time,
                hours: action.payload.hours,
                minutes: action.payload.minutes,
                seconds: action.payload.seconds,
				timer: action.payload.timer
            }
            break;
        case "RESET_TIMER":
            state = {
                time: '00:00:00',
                hours: 0,
                minutes: 0,
                seconds: 0,
				timer: false
            }
            break;
    }
    return state;
};

export default timerReducer;