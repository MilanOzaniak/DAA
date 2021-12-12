let hour_1 = document.getElementById("hour_1");
let hour_2 = document.getElementById("hour_2");
let hour_3 = document.getElementById("hour_3");
let hour_4 = document.getElementById("hour_4");
let hour_5 = document.getElementById("hour_5");
let hoursList = [hour_1, hour_2, hour_3, hour_4, hour_5 ];

let minute_1 = document.getElementById("minute_1");
let minute_2 = document.getElementById("minute_2");
let minute_3 = document.getElementById("minute_3");
let minute_4 = document.getElementById("minute_4");
let minute_5 = document.getElementById("minute_5");
let minute_6 = document.getElementById("minute_6");
let minutesList = [minute_1, minute_2, minute_3, minute_4, minute_5, minute_6];

let second_1 = document.getElementById("second_1");
let second_2 = document.getElementById("second_2");
let second_3 = document.getElementById("second_3");
let second_4 = document.getElementById("second_4");
let second_5 = document.getElementById("second_5");
let second_6 = document.getElementById("second_6");
let secondsList = [second_1, second_2, second_3, second_4, second_5, second_6];

let date;
let hours;
let minutes;
let seconds; 




setInterval(() => {
    this.date = new Date();
    this.hours = this.date.getHours().toString(2);
    this.minutes = this.date.getMinutes().toString(2);
    this.seconds = this.date.getSeconds().toString(2);

    while (this.hours.length < 5) {this.hours= '0' + this.hours;}
    while (this.minutes.length < 6) {this.minutes = '0' + this.minutes;}
    while (this.seconds.length < 6) {this.seconds = '0' + this.seconds;}
    
    for(let i = 0; i < this.seconds.length; i++){
        secondsList[i].classList = `_${this.seconds[i]}`;
    }

    for(let i = 0; i < this.minutes.length; i++){
        minutesList[i].classList = `_${this.minutes[i]}`;
    }

    for(let i = 0; i < this.hours.length; i++){
        hoursList[i].classList = `_${this.hours[i]}`;
    }

}, 1000);