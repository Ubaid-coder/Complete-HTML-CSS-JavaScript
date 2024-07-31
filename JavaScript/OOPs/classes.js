class CreateUser{

    #age;
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#age = age
    }

    static greed = 'AssalamoAlaikum'

    getBirthYear() {
        return new Date().getFullYear() - this .#age
    }

    #getFullName(){
        return this.firstName + ' '+this.lastName;
    }
}


const user1 = new CreateUser('Muhammad','Ubaid',15)

console.log(user1);

console.log(user1.getBirthYear());
// console.log(user1.getFullName());

const user ={
    firstname:'Ankit',
    lastName: 'shubhum',
    tags:['a','b','c'],
    printTags(){
        this.tags.forEach((tag) => {
            // console.log(tag);
            console.log(this)
        },this)
    }


    
}