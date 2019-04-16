var time = new Date(); //get current date
function taskTwo() {
    hour = time.getHours();//get hours of current date
    minutes = time.getMinutes();//get minutes of current date
    seconds = time.getSeconds();//get seconds of current date
    totalSeconds = hour*3600+minutes*60+seconds;//count total seconds
    console.log(totalSeconds);
};
taskTwo();//call function

