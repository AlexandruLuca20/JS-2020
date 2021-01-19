let Dacia = {
    make: "Dacia",
    model: 1310, 
    color: "green",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    averageConsumption: 11.5,
    batteryCapacity: 150,
    baterryCharge: 150,
    paint: function(color) {
        this.color = color
    },
    move: function(distance) {
        consumption = this.averageConsumption * distance / 100
        if(consumption > this.baterryCharge) {
            this.baterryCharge = 0
            this.mileage += this.distanceToEmpty()
        } else{
            this.baterryCharge -= consumption
           this.mileage += distance       
        }
             
        },

        recharge: function() {
            this.baterryCharge = this.batteryCapacity

        },
        distanceToEmpty: function() {
            return 100 * this.baterryCharge / this.averageConsumption
        }
}
let Renault = {
    make: "Renault",
    model: "Megane",
    color: "green",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    paint: function(color){
        this.color = color
    }
}
Dacia.paint("black")
Dacia.move(100)
console.log(Math.round(Dacia.distanceToEmpty()))
Dacia.move(100)
console.log(Math.round(Dacia.distanceToEmpty()))
console.log(Dacia)
console.log(Renault)