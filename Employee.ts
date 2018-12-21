class Employee {

    id: number
    name: string
    salary: number

    constructor(id: number, name: string, salary: number) {
        console.log('parameterized constructor invoked...')
        this.id = id
        this.name = name
        this.salary = salary
    }

    print() {
        console.log('Id:' + this.id)
        console.log('Name:' + this.name)
        console.log('Salary:' + this.salary)
    }
}

let e1 = new Employee(1, 'John', 10000.00)

let e2 = new Employee(2, 'Adams', 89162.23)

let e3 = new Employee(3, 'Paul', 65443.34)

let employees: Employee[] = [e1, e2, e3]

employees.forEach(employee => {
    employee.print()
});