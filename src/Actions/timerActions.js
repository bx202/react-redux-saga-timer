let t = null;
export const timerController = (hours, minutes, seconds, timer) => {
    return dispatch => {
		timer = !timer;
		if(timer){
			t = setInterval(() => {
				let time;
				
				if(seconds === 59){
					seconds = 0;
					minutes = Math.floor(minutes) + 1;
				}else{
					seconds = seconds + 1;
				}

				if(minutes === 59){
					minutes = 0;
					hours = Math.floor(hours) + 1;
				}
				
				time = addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds);

				dispatch({
					type: "TIMER_CONTROLLER",
					payload: {
						time: time,
						hours: hours, 
						minutes: minutes, 
						seconds: seconds, 
						timer: true
					}
				});
			}, 1000)
		}else{
			clearInterval(t);
			let time;
				
				if(seconds === 59){
					seconds = 0;
					minutes = Math.floor(minutes) + 1;
				}else{
					seconds = seconds + 1;
				}

				if(minutes === 59){
					minutes = 0;
					hours = Math.floor(hours) + 1;
				}
				
				time = addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds);
			dispatch({
				type: "TIMER_CONTROLLER",
				payload: {
					time: time,
					hours: hours, 
					minutes: minutes, 
					seconds: seconds, 
					timer: false
				}
			});
		}
    };
}

function addLeadingZero(time){

    if (time <= 9) {
      return "0" + Math.floor(time);
    } else {
      return time;
    }

}

export const resetTimer = () => {
    clearInterval(t);
    return {
        type: "RESET_TIMER"
    };
}