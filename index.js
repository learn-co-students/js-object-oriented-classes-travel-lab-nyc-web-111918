let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor (name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return parseInt(endDate) - this.startDate.getFullYear()
  }

}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const startIndex = eastWest.indexOf(this.beginningLocation.horizontal)
    const endIndex = eastWest.indexOf(this.endingLocation.horizontal)
    const horizontalBlocks = Math.abs(startIndex - endIndex)
    const verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return verticalBlocks + horizontalBlocks
  }

  estimatedTime(peakTime = false) {
    if (peakTime) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }

}
