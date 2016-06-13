document.onload = setDateTime();

function setDateTime() {
	setDate();
	runClock();
	/*addDatePicker();*/
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
		flat	: true,
		change	: function(formated){ changeDate(formated);}
	});
}

var Months = ["January", "February", "March",
	"April", "May", "June",
	"July", "August", "September",
	"October", "November", "December"
	];

function changeDate(formated) {
	var tokens = formated.split('-');
	var formatedDate = [];
	switch(tokens[0]%10) {
		case 1:
			formatedDate[1] = tokens[0] + 'st';
			break;
		case 2:
			formatedDate[1] = tokens[0] + 'nd';
			break;
		case 3:
			formatedDate[1] = tokens[0] + 'rd';
			break;
		default:
			formatedDate[1] = tokens[0] + 'th';
	}

	formatedDate[0] = Months[tokens[1]-1];
	formatedDate[2] = tokens[2];

	$("#conference-date").val(formatedDate.join(' '));
}

function showLightBox() {
	var $form = $("#lightbox");
	$.colorbox({transition:"elastic",
		overlayClose:true,
		closeButton:false,
		left:"0px",
		opacity:0.6,
		inline:true,
		href:$form});
	addDatePicker();
	addTimeMenu();
	addTimeZone();
}

function addTimeMenu() {
	var i = 0;
	var j = 0;
	var tmp;
	var content = "";
	var d = new Date();
	var currentHour = Number(d.getHours());
	for(i = 0; i < 24; i++) {
		for(j = 0; j < 60; j+=15) {
			if(i < currentHour) {
				if(i <= 12) {
					content += '<li class="ui-menu-item disabled" role="presentation"><a id="ui-id-39" class="ui-corner-all" tabindex="-1" role="menuitem">' + i +':'+j+' am</a></li>' + '\n';
				} else {
					tmp = i - 12;
					content += '<li class="ui-menu-item disabled" role="presentation"><a id="ui-id-39" class="ui-corner-all" tabindex="-1" role="menuitem">' + tmp +':'+j+' pm</a></li>' + '\n';
				}
			}else {
				if(i <= 12) {
					content += '<li class="ui-menu-item" role="presentation"><a id="ui-id-39" class="ui-corner-all" tabindex="-1" role="menuitem">' + i +':'+j+' am</a></li>' + '\n';
				} else {
					tmp = i - 12;
					content += '<li class="ui-menu-item" role="presentation"><a id="ui-id-39" class="ui-corner-all" tabindex="-1" role="menuitem">' + tmp +':'+j+' pm</a></li>' + '\n';
				}
			}
			
		}		
	}
	$('#conference-time-menu').html(content);
	$('#conference-time-menu li a').click(function(){
		console.log($(this).html());
		$('#conference-time').val($(this).html());
	});
}

function addTimeZone() {
	var zonenames = moment.tz.names();
	console.log(zonenames.length);
}

function hideLightBox() {
	$.colorbox.close();
}

function showConferenceDuration() {
	console.log('ok');
	var conference_duration_menu = $("#conference-duration-menu");
	conference_duration_menu.css({'display': 'block'});
}

$(document).click(function(){
	$("#conference-duration-menu").css({'display': 'none'});
	$('#conference-time-menu').css({'display': 'none'});
	$('#submenu').css({'display': 'none'});
	$('#app-menu').css({'display': 'none'});
	$('#user-menu').css({'display': 'none'});
});

$('#conference-duration').click(function(e){
	showConferenceDuration();
	e.stopPropagation();
});

$('#conference-duration-menu li a').click(function(){
	var content = $(this).html();
	console.log(content);
	$('#conference-duration').val(content);
});

$('#conference-time').click(function(e){
	showConferenceTimeMenu();
	e.stopPropagation();
});

function showConferenceTimeMenu() {
	$('#conference-time-menu').css({'display': 'block'});
}