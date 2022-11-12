// return the stage of life a person is in
// depending on their age
//
// Less than 2 is 'Baby'
// Greater than 2 and less than 13 is 'Kid'
// Greater than 13 and less than 19 is 'Teen'
// Greater than 19 and less than 30 is 'Young Adult'
// Greater than 30 is 'Dead'
module.exports = (age) => {
    const ageCheck = [
        { maxAge: 2, value: "Baby"},
        { maxAge: 12, value: "Kid"},
        { maxAge: 18, value: "Teen"},
        { maxAge: 29, value: "Young Adult"},
        { maxAge: 1000, value: "Dead"},

    ];
   return ageCheck.find((item) => age <= item.maxAge).value;
}
