var names = ["Taimoor", "Qambar", "Zuhaib" , "Moiz"]

var notAttending = "Moiz"

names = ["Taimoor", "Qambar", "Zuhaib" , "Basit"]

names.forEach(el => {
    console.log(`Hello I would like to invite you over dinner please honor me as your table is reserved as the name of ${el} . Also unfortunately our friend ${notAttending} can't attend`)
})
