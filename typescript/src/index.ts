// Function

function calcTax(amount: number, month?: string, year = 2023):number {
    if(amount > 50_000 && month == 'april' && year < 2022){
        return amount * 1.3;
    }
    return 32434;
}

console.log(calcTax(4534, 'may', 2021));

// Object

// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: 'ash',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }

// employee.name = 'ashish';

// let employee1: Employee = {
//     ...employee, ['id']: 2
// } 

// console.log(employee1)
// employee.id = 0;

// // type Union 
// //here string union number => string | number
// function kgToLbs(weight: string | number) {
//     if(typeof weight === 'string') { // check for string
//     return parseInt(weight) * 2.2;
        
//     }else{ // number
//         return  weight * 2.2
//     }
// }

// // type intersection
// type draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }
// // Here draggable intersection Resizable => draggable & Resizable
// type UIWidget = draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// // type aliases
// type Quantity = 50 | 100;
// // here Quantity is alias of value of either 50 or 100, no other values allowed
// let quantity: Quantity = 50;

// type Metric = 'cm' | 'm' | 'inch';

// null values handling
// function greet(name: string | null) {
//     if(name)
//         console.log(`Heyyyy ${name}`);
//     else
//         console.log('Holaaa!');
// }

// greet(null);

// type Customer = {
//     birthday: Date,
// }

// function getCustomer(id: number): Customer | null {
//     return id === 0 ? null : {birthday: new Date()};
// }

// let customer = getCustomer(1);

// // if(customer){
// //     console.log(customer.birthday);
// // }
// // options property access operator
// console.log(customer?.birthday?.getFullYear())


// // checks weather cusrtomer[0] exists or not
// // customers?.[0]

// let log: any = null;

// // checks for weather log is return a function or not
// log?.('a');



