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

        (hours < 12) ? pm.style.display = 'none': am.style.display = 'none';

        date.innerHTML = `${realDate} - ${monthsYear[month]} - ${year}`;
        dayy.innerHTML = `${daysWeek[day]}`;
        time.innerHTML = `${hours % 12}:${minutes}:${seconds}`;

        setTimeout("getTime()", 1000);
        
    }



    //function for the stop watch
    let timer = [0,0,0,0];
    const startTimer = () => {
        if (!this.interval) {
            this.interval = setInterval( function() {
                let showTimer = document.querySelector('.timer')
                let currentTme = `${timer[0]} : ${timer[1]} : ${timer[2]}`;
                showTimer.innerHTML = currentTme;
                timer[3]++;

                timer[0] = Math.floor((timer[3]/100)/60);
                timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
                timer[2] = Math.floor((timer[3] - (timer[1]) * 100) - (timer[0] * 6000));
               
                for(let i =0; i < timer.length; i++){
                    if (timer[i] < 10) {
                        timer[i] = "0" + timer[i];
                        console.log(timer[i])
                    }
                }
            }, 10);
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
    
   
    document.querySelector('.reset').addEventListener('click', () => {
        resetTimer();
    })
   


}
