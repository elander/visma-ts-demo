//Built-in Types
//Numbers
let myNum = 10;
let anotherNum: number = 20;

myNum = 12;
myNum = '12';

anotherNum = 30;
anotherNum = false;

//String
let myStr: string = 'Hello';
const anotherStr = 'World';

myStr = true;
anotherStr = 45;

//Boolean
let myBool: boolean = true;
let anotherBool = false;

myBool = 'true';
anotherBool = 76;

//Inference
let salary:number;
salary = 12000;
salary = '12000';
salary = true;

//Objects
const developer = {
    firstName: 'Max',
    lastName: 'Elander',
    age: 40,
    isTrainer: true
}

const newDeveloper: { name: string; age: number; isDev: boolean } = {
    name: 'Morris',
    age: 39,
    isDev: true
}

newDeveloper.name = 'Morris Packer';
newDeveloper.age = 'Fourty';
newDeveloper.firstName = 'Morris';

newDeveloper.isDev = false;

//Arrays
const languages = ['React', 'Angular', 'Vue'];

languages.push('TypeScript');
languages.push(56);
languages.push(true);

const numbers: number[] = [51, 22, 33];
numbers.push(56);
numbers.push('56');
numbers.push(true);

const arrOfObj: { name: string; age: number }[] = [
    { name: 'Max', age: 40 },
    { name: 'Morris', age: 39 }
];

arrOfObj.push({ name: 'Claes', age: 39 });
arrOfObj.push({ name: 'Marie', age: 'Eight' });

const arrOfArrays: number[][] = [
    [11, 32, 43],
    [34, 75, 64]
];

arrOfArrays.push([21, 32, 13]);

//Functions
const addNums = (num1: number, num2: number) => {
        // ^? 
    return num1 + num2;
}

let myNewVariable = addNums(10, 20);
addNums(10, '20');

const multiNums = (num1: number, num2: number) => {
    return num1 * num2;
}

multiNums(10, 20);
multiNums(10, '20');

const modNums = (num1: number, num2: number): number => {
    // return num1 % num2;
    return num1 > num2
}

modNums(10, 20);
modNums(10, '20');

const printSum = (num1: number, num2: number): void => {
    console.log(num1 + num2);
}

printSum(10, 20);
printSum(10, '20');

//Union types
let numOrStr: number | string;
numOrStr = 10;
numOrStr = 'Ten';

let arr: (number | string )[] = [10, 'Ten', true];

//Literal types
let myLiteral: 'Max' | 'Morris' | 'Claes' | 'Marie' = 'Max';

myLiteral = 'Max';
myLiteral = 'Claes';
myLiteral = 'Marie';
myLiteral = 'Malte';

//Enum
enum Role { ADMIN, READ_ONLY, AUTHOR };

const myRole = Role.ADMIN;

//Optionals
let optionalObj: { name: string; age: number | undefined } = {
    name: 'Max',
    age: undefined
};

let betterOptObj: { name: string; age?: number } = {
    name: 'Max'
};

//Interfaces
interface Developer {
    name: string;
    age: number;
    isDev: boolean;
}

const person1: Developer = {
    name: 'Max',
    age: 40,
    isDev: true
}

const person2: Developer = {
    name: 'Morris',
    age: 39,
    isDev: true
}

//Types
type DeveloperType = {
    name: string;
    age: number;
    isDev: boolean;
}

const person3: DeveloperType = {
    name: 'Max',
    age: 40,
    isDev: true
}

type PersonName = string;
const person4: PersonName = 'Max';

type CoderType = {
    name: string;
    category: 'frontend' | 'backend' | 'mobile';
    age: number;
}[];

const coder1: CoderType = [
    {  name: 'Max', category: 'frontend', age: 40 },
    {  name: 'Morris', category: 'backend', age: 39 },
]

//Classes
class CreateRoom{
    private family: string[] = [];
    readonly born: string = '1982-12-12';
    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }
    showFamily(){
        console.log(this.family);
    }
    cleanRoom(soap: string){
        console.log(`Cleaning ${this.room}'s room with ${soap}`);
    }
}

const max = new CreateRoom('Max');
const caroline = new CreateRoom('Caroline');
const andreas = new CreateRoom('Andreas');
const morris = new CreateRoom('Lena');
caroline.born;
caroline.born = '1982-11-12';

max.family;
max.addFamilyMember('Max');
caroline.addFamilyMember('Caroline');
andreas.addFamilyMember('Andreas');
morris.cleanRoom('Andreas');