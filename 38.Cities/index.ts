
const describe_city = (city : string , country = "Pakistan") => {
        return console.log(`${city} is in ${country}`)
}

describe_city("Karachi")
describe_city("New York" ,  "USA")
describe_city("Mumbai" ,  "India")