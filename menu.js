function showSubmenu() {
	document.getElementById("submenu").style.display = "block";
}

function hideSubmenu() {
	document.getElementById("submenu").style.display = "none";
}

function showAppMenu() {
    var menu = document.getElementById("app-menu"); 
    menu.style.display = "block";
    var id = setInterval(frame, 5);
    var top = -200;
    function frame() {
        if (top == 60) {
            return;
        } else {
            top += 10; 
            menu.style.top = top + 'px';  
        }
    }
}

function hideAppMenu() {
	console.log("activated");
	var menu = document.getElementById("app-menu"); 
    var id = setInterval(frame, 100);
    var top = -200;
    function frame() {
        if (top == -200) {
            return;
        } else {
            top -= 10; 
            menu.style.top = top + 'px';  
        }
    }

    menu.style.display = "none";
}


function showUserMenu() {
    var menu = document.getElementById("user-menu"); 
    menu.style.display = "block";
    var id = setInterval(frame, 5);
    var top = -200;
    function frame() {
        if (top == 60) {
            return;
        } else {
            top += 10; 
            menu.style.top = top + 'px';  
        }
    }
}

function hideUserMenu() {
	console.log("activated");
	var menu = document.getElementById("user-menu"); 
    var id = setInterval(frame, 100);
    var top = -200;
    function frame() {
        if (top == -200) {
            return;
        } else {
            top -= 10; 
            menu.style.top = top + 'px';  
        }
    }

    menu.style.display = "none";
}