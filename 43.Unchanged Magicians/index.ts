var magicians = ['jhon', 'harris', 'jerry']

const make_great = (arr: string[]) => {

      var modified = arr.map(el => el + " the Great")

      return console.log(modified)
}

make_great(magicians)

const show_magicians = (arr: string[]) => {
        arr.forEach(el => console.log(el))
}

show_magicians(magicians)