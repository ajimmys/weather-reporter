import React from "react";

export function convertDtHour(dt){
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

export function convertDtDay(dt) {
    let date = new Date(dt*1000)
    let list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return list[date.getDay()]
}

export function dayTextReformat(day_mod, dt){
    return (day_mod === 0) ? "Today" : (day_mod===1) ? "Tomorrow" : convertDtDay(dt)
}

export function convertFullDt(dt){
    let date = new Date(dt * 1000)
    let hour = date.getHours()
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    let ampm = hour >= 12 ? "PM" : "AM"
    hour = hour % 12 ? hour % 12 : 12
    return hour + ":" + minutes + " " + ampm
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

export function loadDataToState(card_count, alter_count, caller){
    for(let i = 0; i <= card_count; i++){
        let card_id = "day_" + i
        caller.setState(() => ({
            [card_id]: {
                day_mod: i+alter_count,
                loaded: true,
                show_details: false,
                time: this.props.APIData['daily'][i+alter_count]['dt'],
                day_temp: Math.round(this.props.APIData['daily'][i+alter_count]['temp']['day']),
                low_temp: Math.round(this.props.APIData['daily'][i+alter_count]['temp']['min']),
                high_temp: Math.round(this.props.APIData['daily'][i+alter_count]['temp']['max']),
                feels_like: Math.round(this.props.APIData['daily'][i+alter_count]['feels_like']['day']),
                image_code: this.props.APIData['daily'][i+alter_count]['weather'][0]['icon'],
                description: this.props.APIData['daily'][i+alter_count]['weather'][0]['description'],
                sunrise: this.props.APIData['daily'][i+alter_count]['sunrise'],
                sunset: this.props.APIData['daily'][i+alter_count]['sunset'],
                precipitation: this.props.APIData['daily'][i+alter_count]['pop'],
                wind: Math.round(this.props.APIData['daily'][i+alter_count]['wind_speed']),
                humidity: this.props.APIData['daily'][i+alter_count]['humidity'],
                uv_index: this.props.APIData['daily'][i+alter_count]['uvi'],
            }
        }));
    }
}
