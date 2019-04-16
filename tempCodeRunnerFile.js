var time = new Date();
function taskTwo() {
    hour = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    totalSeconds = hour*3600+minutes*60+seconds;
    console.log(totalSeconds);
};
taskTwo();
