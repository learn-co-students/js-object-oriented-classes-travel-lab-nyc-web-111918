class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue',
];

// { horizontal: 'Park', vertical: '34' },
// { horizontal: 'Park', vertical: '45' }

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let beginningHorizontalIndex = eastWest.indexOf(this.beginningLocation.horizontal)
    let endingHorizontalIndex = eastWest.indexOf(this.endingLocation.horizontal)
    let horizontalDistance = Math.abs(beginningHorizontalIndex - endingHorizontalIndex)
    let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return horizontalDistance + verticalDistance
  }
  estimatedTime(peakHours){
    return peakHours ? (this.blocksTravelled() / 2) : (this.blocksTravelled() / 3)
  }
}
