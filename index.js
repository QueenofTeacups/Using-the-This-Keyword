// let numbers = [ 1, 2, 3 ];
// forEach(numbers, function(number){
//     console.log(number)                     
// })            


// function profit(){
//     return tacoTruck.revenue - tacoTruck.expenses
// }

// const tacoTruck = {
//     revenue: 300,
//     expenses: 100,
//     profit: profit
// }

// tacoTruck.profit()      


// const tacoTruck = {
//     revenue: 300,
//     expenses: 100,
//     profit: profit
// }

// const lemonadeStand = {
//     revenue: 50,
//     expenses: 15,
//     profit: profit
// }

// function profit(){
//     return  this.revenue -  this.expenses
// }

// tacoTruck.profit()                            
// lemonadeStand.profit()                           
         
// let dog = {
//     sound: 'Arrrf!',
//     playSound: function(){
//         console.log(this.sound)
//     }
// }

// dog.playSound()


forEach(function(element){
    console.log(element)
})

let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}
myNumbers.forEach(function(element){
    console.log(element)
})

Array.prototype.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach(function(element){
    console.log(element)
})




