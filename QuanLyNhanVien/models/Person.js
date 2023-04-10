export class Person {
    constructor(code, name, address, email) {
        this.code = code;
        this.name = name;
        this.address = address;
        this.email = email;
        
    }
}

export class Student extends Person{
    constructor(code, name, address, email, math, physics, chemistry) {
        super(code, name, address, email);
        this.math = math;
        this.physics = physics;
        this.chemistry = chemistry;
        this.class = 'student'
    }
    calAverage() {
        let average = (+this.math + +this.physics + +this.chemistry) / 3
        return average.toFixed(1);
    }
 
}
export class Employee extends Person {
    constructor(code, name, address, email, workday, salaryPDay) {
        super(code, name, address, email);
        this.workday = +workday;
        this.salaryPDay = +salaryPDay;
        this.class = 'employee'
    }
    calSalary(){
        return  this.salaryPDay * this.workday; 
    }
    
}
export class Customer extends Person{
    constructor(code, name, address, email,company,billValue,review){
        super(code, name, address, email);
        this.company = company;
        this.billValue = billValue;
        this.review = review;
        this.class = 'customer'
    }
}