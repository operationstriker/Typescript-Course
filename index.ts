// BASIC TYPES
let age: number = 2 // need to mention type of value
let course: string = "TypeScript Course" // cant be anything other than a string
let lessonCompleted: boolean = true
let x: any = false // any - any variable type


// array of courses, array of strings
let courses: string[] = ["HTML", "CSS"] // only strings
let arr: any[] = [true, '123', 321]
// each element was an array
let stringArr: string[][] = [['a'], ['b']] // array of arrays


let testing: boolean = true // what you add here goes to index.js

//Tuples // arrays that store different types of elements but in a specific order

let t: [number, number, number]

t = [7, 8, 9]

let tuple: [number, boolean, string]

tuple = [24, true, "F"]

let person: [string, number] = ["f", 34]
let people: [string, number][] = [ 
    ["A", 4],
    ["B", 43],
    
]     

// array of arrays


// Objects

let student: {
    name: string,
    age: number,
    isPassing: boolean
} = {
    name: "B1",
    age: 44,
    isPassing: true
}






let car: {
    year: number,
    vehiclebuild: string
} = {
    year: 202,
    vehiclebuild: "Hatchback"
}
