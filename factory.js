// Factory Design Pattern

// let suppose client need FrontEnd employee so they contact with Vendor to provide employee having frontend skill set
// here Vendor is a factory having multiple types of employee on bench so they pick specific type of employee based on clinet requirment and given to client


class AngularDeveloper{
    salary = 10000;
}

class ReactDeveloper{
    salary = 20000;
}

class JavascriptDeveloper{
    salary = 30000;
}

class JavaDeveloper{
    salary = 40000;
}

class DotNetDeveloper{
    salary = 50000;
}

class CDeveloper{
    salary = 60000;
}

class NodeDeveloper{
    salary = 70000;
}


// Factory / Creator

class EmployeeFactory{
    emp = null;
    creatEmployee(type){
        switch(type){
            case 'Angular':
                this.emp = new AngularDeveloper()
                break;
            case 'React':
                this.emp = new ReactDeveloper()
                break;
            case 'Javascript':
                this.emp = new JavascriptDeveloper()
                break;
            case 'java':
                this.emp = new JavaDeveloper()
                break;
            case 'dotnet':
                this.emp = new DotNetDeveloper()
                break;
            case 'cp':
                this.emp = new CDeveloper()
                break;
            case 'node':
                this.emp = new JavascriptDeveloper()
                break;
            default: 
                break;
        }
        this.emp.type = type;
        return this.emp;
    }
}

const employeeFactory = new EmployeeFactory();

console.log(employeeFactory.creatEmployee('Angular'));
console.log(employeeFactory.creatEmployee('React'));
console.log(employeeFactory.creatEmployee('Javascript'));
console.log(employeeFactory.creatEmployee('java'));
console.log(employeeFactory.creatEmployee('dotnet'));
console.log(employeeFactory.creatEmployee('cp'));
console.log(employeeFactory.creatEmployee('node'));