// Check if the time is before noon
// time is in military time 0-24
module.exports = (hour) => {
    return hour < 12;
};

/* The longer way of doing this is 
    if (hour <12){
        return true ;
    }
    else (
        return false;
    )

*/