export function convertDt(dt){
    let date = new Date(dt*1000);
    let hour = date.getHours()

    if(hour > 12){
        hour = hour - 12
        return hour + ":00 PM"
    } else if(hour === 12){
        return hour + ":00 PM"
    }else if(hour === 0){
        return "12:00AM"
    } else{
        return hour + ":00 AM"
    }
}

export function convertImage(imageID){
    return 'http://openweathermap.org/img/wn/'+ imageID + '.png'
}

export function convertDescription(description) {
    let words = description.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        if (i + 1 !== words.length) {
            words[i] += " "
        }
    }

    return words
}