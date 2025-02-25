console.log('test')
// create a class called car  that contain this :

//  att : name,color, brand, speed,size
//  methods : start , stop ,acc ,dec
// 1- encapsulation : > private , public
class BankAccount {
    accountHolder;
    // private
    #balance;
    #username;
    constructor(accountHolder, balance,username) {
        this.accountHolder = accountHolder;
        this.#balance    =balance;
        this.#username=username;
    }
    // getter
    //  get the username but replace the last 4 with *
    getUsername(){
        return this.#username.slice(0,-4)+'****'
    }
    //  setter 
    setUsername(username){
        this.#username = username;
    }
    //  withdraw
    withdraw(amount){
        if (amount > this.#balance){
            console.log('insufficient balance')
        }
        else{
            this.#balance = this.#balance - amount
            console.log('withdraw done your balance now is : ', this.#balance)
        }
    }
    // deposit
}
//  Inheritance : main class and sub class
class Employee{
    name;
    salary;
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    showInfo(){
        console.log('name : ',this.name)
        console.log('salary : ',this.salary)
    }
}
class Manager extends Employee{
    department;
    constructor(name,salary,department){
        super(name,salary);
        this.department=department;
    }
    //  polymorphism 
    showInfo(){
        console.log('name : ',this.name)
        console.log('salary : ',this.salary)
        console.log('department : ',this.department)
    }

}
//  3- abstract :
class Vehicle{
    constructor(){
        if(this.constructor ===Vehicle){
            throw new Error('you can not create an object from abstract class')
        }
    }
    start(){
        throw new Error('you have to implement this method')
    }
    stop(){
        console.log(
            'Vehicle has stopped'
        )
    }
}
class Car extends Vehicle{
    name;
    constructor(name){
        super()
        this.name=name;
    }
    start(){
        console.log(`${this.name} is starting`)
    }
}
function main(){
    console.log('----Emcapsulation Example----')
    var account1 = new BankAccount('ahmed',5000,'ahmed123')
    account1.setUsername('mohammad')
    account1.getUsername()
    console.log(account1.getUsername())
    account1.withdraw(1000)
    console.log('----Inheritance Example----')
    var emp1 = new Employee('ahmad',1000)
    // emp1.showInfo()
    var mang1 = new Manager('mohammad',2000,'IT')
    mang1.showInfo()
    console.log('----Abstract Example----')
    // var vehicle1 = new Vehicle()
    // vehicle1.start()
    var car1 = new Car('bmw')
    car1.stop()
}
main()

// class Car {
//      name =''
//      color=''
//      brand=""
//      speed=0
//      size =0
//     //   init 
//     constructor(name,color,brand,speed,size){
//         // typeof
//         if (typeof name !== 'string'){
//             throw new Error('name must be string')
//         }
//         if (typeof color !== 'string'){
//             throw new Error('color must be string')
//         }
//         if (typeof brand !== 'string'){
//             throw new Error('brand must be string')
//         }
//         if (typeof speed !== 'number'){
//             throw new Error('speed must be string')
//         }
//         if (typeof size !== 'number'){
//             throw new Error('size must be string')
//         }
//         this.name=name;
//         this.color=color;
//         this.brand=brand;
//         this.speed=speed;
//         this.size=size;

//     }
//     //  methods 
//     start() {
//         console.log(`${this.name} is starting `)
    
//    } 
// }
// var test= "nfgbfhg"


// var car1 = new Car('bmw','black','bmw',220,4)
// console.log(car1)
// car1.start()