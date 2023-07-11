
const make_sandwich = (arr: string[]) => {
      console.log("Your sandwich will include : ")
      return arr.forEach(el => console.log(el))
}

make_sandwich(["tomatoes", "cheese", "onions"])
make_sandwich(["tomatoes", "cheese"])
make_sandwich(["cheese", "onions"])
