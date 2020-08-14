let restaurant = {
    name: 'Mala',
    guestCapacity: 35,
    guestCount: 0,
    // check Availability is method:
    //    an object property that is a function
    checkAvailability: function(partySize) {
        let availability = this.guestCapacity - this.guestCount
        return availability >= partySize
    }, 
    seatParty: function(partySize) {
        this.guestCount += partySize
    },
    leaveParty: function(partySize) {
        this.guestCount -= partySize
    }
}

// seatParty
// removeParty

restaurant.seatParty(33)
console.log(restaurant.checkAvailability(4))
restaurant.leaveParty(3)
console.log(restaurant.checkAvailability(4))
