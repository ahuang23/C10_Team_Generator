const Manager = require('../lib/Manager');

describe("Manager Class", () => {
    describe("Office Number", () => {
        it("should return the Manager's Office Number", () => {
            const employee = new Manager('Alan Huang', 731, 'a.huang232@gmail.com', `(714)798-4343`);
            
            expect(employee.getOfficeNumber()).toEqual(expect.any(String));
        });
    })
    describe("Role", () => {
        it("should return the Manager's Role", () => {
            const employee = new Manager('Alan Huang', 731, 'a.huang232@gmail.com', `(714)798-4343`);
            
            expect(employee.getRole()).toEqual('Manager');
        });
    })
})