document.onload = setDateTime();

function setDateTime() {
	setDate();
	runClock();
	addDatePicker();
}

function runClock() {
	var d = new Date();
	var hour = d.getHours();
	if(hour >= 11) {
		hour -= 12;
	}

	var second = 0;
    var minute = d.getMinutes()*600;
    console.log(minute);
    hour *= 36000;
    hour += minute;
    console.log(hour);

	var hourhand = document.getElementById("dash-hour");
	var minutehand = document.getElementById("dash-minute");
	var secondhand = document.getElementById("dash-second");

	hourhand.style.transform = "rotate(" + hour/1200 + "deg)";
	minutehand.style.transform = "rotate(" + minute/100 + "deg)";
	secondhand.style.transform = "rotate(0deg)";

	var id = setInterval(frame, 100);
    function frame() {
    	if(second == 600) {
    		second = 0;
    	}
    	if(minute == 36000) {
    		minute = 0;
    	}
    	if(hour == 432000) {
    		hour = 0;
    	}
        second += 1;
        minute += 1;
        hour += 1;

        secondhand.style.transform = "rotate(" + second*6/10 + "deg)";
        minutehand.style.transform = "rotate(" + minute/100 + "deg)";
        hourhand.style.transform = "rotate(" + hour/1200 + "deg)";
        /*
        if(minute%150 == 0) {
        	minutehand.style.transform = "rotate(" + minute/1000 + "deg)";
        }
        if(hour%1200) {
        	hourhand.style.transform = "rotate(" + hour/1200 + "deg)";
        }
        */

    }
}

function setDate() {
	var d = new Date();
	var currentDate = d.getDate();
	var month = d.getMonth();
	var year = d.getYear();
	var d2 = new Date(year, month+1, 0);
	var daysInMonth = d2.getDate();
	var calendar = document.getElementById("calendar_content");
	var i;
	var content = calendar.innerHTML;

	for(i = 1; i <= daysInMonth; i++) {
		if( i == currentDate) {
			content += '<div class="dash-cal-day"><div class="dash-cal-today">' + i + '</div></div>' + '\n';
		} else {
			content += '<div class="dash-cal-day">' + i + '</div>' + '\n';
		}
	}

	calendar.innerHTML = content;
}

function addDatePicker() {
	$(".schedule-calendar").pickmeup({
		flat	: true
	});
}