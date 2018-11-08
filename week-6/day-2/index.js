
for (let i = 0; i<10; i+= 1) {
console.log('hi')
}

const locations = ['NY', 'CA', 'TX', 'NC', 'NJ', 'WY', 'SD', 'ND']


const flightDetails = {
  startingDestination: 'JFK',
  endingDestination: 'LHR',
  time: '4:00',
  carrier: 'American Airlines',
}

for (let flightDetail in flightDetails) {
  console.log(flightDetail)
  console.log(flightDetails[flightDetail])
}
