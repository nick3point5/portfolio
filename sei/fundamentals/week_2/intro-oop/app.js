class Student {
    constructor(config) {
      this.name = config.name;
      this.email = config.email;
      this.classCode = config.classCode;
      this.classInstance = config.classInstance;
      this.assignmentsCompleted = config.assignmentsCompleted;
    }
  
    submitAssignment(assignmentObj) {
      this.assignmentsCompleted.push(assignmentObj);
    }
  }
  
  
  const student1Data = {
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    classCode: 'SEI',
    classInstance: '1207',
    assignmentsCompleted: [],
  };
  
  const student2Data = {
    name: 'Sarah Martin',
    email: 'smartin@gmail.com',
    classCode: 'SEI',
    classInstance: '1207',
    assignmentsCompleted: [],
  };
  
  const student1 = new Student(student1Data);
  const student2 = new Student(student2Data);
  
  
  function createStudentPdfReport(studentObject) {
    // ...create report
    const report = {
      studentName: studentObject.name,
      studentEmail: studentObject.email,
      studentCohort: studentObject.classCode,
      studentInstance: studentObject.classInstance,
      studentassignments: studentObject.assignmentsCompleted,
    }
  
    return report;
  }
  
  console.log(createStudentPdfReport(student1));
  console.log(createStudentPdfReport(student2));
  
  
  student1.submitAssignment({title: 'Assignmet 1'});
  student2.submitAssignment({title: 'Assignmet 3'});
  console.log(student1);
  console.log(student2);
  
  
  
  
  
  class Calculator {
    // Class Method
    static addTwoNums(num1, num2) {
      return num1 + num2;
    }
  
    static subtractTwoNums(num1, num2) {
      return num1 - num2;
    }
  
    static multiply(num1, num2) {
      return num1 * num2;
    }
  }
  
  // const calculator = new Calculator()
  // const result = calculator.addTwoNums(2, 3)
  
  const result = Calculator.addTwoNums(2, 3)
  
  console.log(result);
  
  // function addTwoNums(num1, num2) {
  //   return num1 + num2;
  // }
  
  // function subtractTwoNums(num1, num2) {
  //   return num1 - num2;
  // }