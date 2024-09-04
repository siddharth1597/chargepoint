export const covertTimeStampToTime = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    if (hours < 10) {
        hours += "0" + hours;
    }
    if (minutes < 10) {
        minutes += "0" + minutes;
    }

    let formattedTime = hours + ':' + minutes.toString().substring(-2);
    return formattedTime;
}