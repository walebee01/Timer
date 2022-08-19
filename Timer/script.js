{
    window.onload = function() {
        getTime();
    }

    function getTime() {
        //Date elements
        let newDate = new Date();
        let day = newDate.getDay();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();
        let seconds = newDate.getSeconds();
        let realDate = newDate.getDate();

        //Dom element
        let date = document.querySelector('.date');
        let dayy = document.querySelector('.dayy');
        let time = document.querySelector('.time');
        let am = document.querySelector('.am');
        let pm = document.querySelector('.pm');

        // to get the day of the week
        let daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday"]
            //Month of the year
        let monthsYear = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        if (realDate < 10) {
            realDate = "0" + realDate;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;

        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        (hours > 12) ? am.style.display = 'none': pm.style.display = 'none';

        date.innerHTML = `${realDate} - ${monthsYear[month]} - ${year}`;
        dayy.innerHTML = `${daysWeek[day]}`;
        time.innerHTML = `${hours % 12}:${minutes}:${seconds}`;

        setTimeout("getTime()", 1000);

    }
    
    //Stopwatch function


}
