const currentDate = new Date();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

switch(month){
    case 0:
        document.getElementById("month").innerHTML = "January";
        break;
    case 1:
        document.getElementById("month").innerHTML = "February";
        break;
    case 2:
        document.getElementById("month").innerHTML = "March";
        break;
            
    case 3:
        document.getElementById("month").innerHTML = "April";
        break;
        
    case 4:
        document.getElementById("month").innerHTML = "May";
        break;
        
    case 5:
        document.getElementById("month").innerHTML = "June";
        break;
    case 6:
        document.getElementById("month").innerHTML = "July";
        break;
        
    case 7:
        document.getElementById("month").innerHTML = "August";
        break;
        
    case 8:
        document.getElementById("month").innerHTML = "September";
        break;
        
    case 9:
        document.getElementById("month").innerHTML = "October";
        break;
        
    case 10:
        document.getElementById("month").innerHTML = "November";
        break;
        
    case 11:
        document.getElementById("month").innerHTML = "December";
        break;
    default:
        document.getElementById("month").innerHTML = "Unknown Month"
        break;
}

// document.getElementById("month").innerHTML = document.getElementById("month").innerHTML + " " + year