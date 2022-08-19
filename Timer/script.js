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



    //functtion for the stop watch

    function startTimer() {
        let totalSeconds = 0;
        if (!this.interval) {
            this.interval = setInterval(function() {
                ++totalSeconds;
                let hour = Math.floor(totalSeconds / 3600);
                let minutes = Math.floor((totalSeconds - hour * 3600) / 60);
                let seconds = totalSeconds - (hour * 3600 + minutes * 60);

                if (hour < 10) {
                    hour = "0" + hour;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;

                }
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }

                document.querySelector(".timer").innerHTML = `${hour}:${minutes}:${seconds}`;
            }, 1000);
        }
    }



    function resetTimer() {
        clearInterval(this.interval);
        document.querySelector('.timer').innerHTML = "00:00:00";
        delete this.interval;
    }


    function pauseTimer() {
        clearInterval(this.interval);
        delete this.interval;

    }

    function resumeTimer() {
        this.startTimer();

    }


    document.querySelector('.start').addEventListener('click', () => {
        startTimer();
    });
    document.querySelector('.pause').addEventListener('click', () => {
        pauseTimer()
    });
    document.querySelector('.resume').addEventListener('click', () => {
        resumeTimer()
    })
    document.querySelector('.sound').addEventListener('click', () => {
        console.log('Sound');
    })
    document.querySelector('.reset').addEventListener('click', () => {
        resetTimer();
    })
    document.querySelector('.switch').addEventListener('click', () => {
        console.log('Switch');
    })
    document.querySelector('.something').addEventListener('click', () => {
        console.log('Something');
    })












}