document.onload = runClock();

function runClock() {
	var d = new Date();
	var hour = d.getHours();
	if(hour >= 11) {
		hour -= 12;
	}

	var second = 0;
    var minute = d.getMinutes()*600;
    hour *= 36000;

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
        if(minute%150 == 0) {
        	minutehand.style.transform = "rotate(" + minute/1000 + "deg)";
        }
        if(hour%1200) {
        	hourhand.style.transform = "rotate(" + hour/1200 + "deg)";
        }

    }
}