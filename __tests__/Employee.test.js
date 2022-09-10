const Employee = require('../lib/Employee');

describe("Employee Class", () => {
    describe("Employee", () => {
        it("should create the employee object", () => {
            const employee = new Employee('Alan Huang', 731, 'a.huang232@gmail.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    })
    describe("Name", () => {
        it("should return the Employee's name", () => {
            const employee = new Employee('Alan Huang', 731, 'a.huang232@gmail.com');
            
            expect(employee.getName()).toEqual(expect.any(String));
        });
    })
    describe("Id", () => {
        it("should return the Employee's ID", () => {
            const employee = new Employee('Alan Huang', 731, 'a.huang232@gmail.com');
            
            expect(employee.getId()).toEqual(expect.any(Number));
        });
    })
    describe("Email", () => {
        it("should return the Employee's Email", () => {
            const employee = new Employee('Alan Huang', 731, 'a.huang232@gmail.com');
            
            expect(employee.getEmail()).toEqual(expect.any(String));
        });
    })
    describe("Role", () => {
        it("should return the Employee's Role", () => {
            const employee = new Employee('Alan Huang', 731, 'a.huang232@gmail.com');
            
            expect(employee.getRole()).toEqual('Employee');
        });
    })
})