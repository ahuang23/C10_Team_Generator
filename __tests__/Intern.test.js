const Intern = require('../lib/Intern');

describe("Intern Class", () => {
    describe("School", () => {
        it("should return the Intern's School", () => {
            const employee = new Intern('Alan Huang', 731, 'a.huang232@gmail.com', 'CSULB');
            
            expect(employee.getSchool()).toEqual(expect.any(String));
        });
    })
    describe("Role", () => {
        it("should return the Engineer's Role", () => {
            const employee = new Intern('Alan Huang', 731, 'a.huang232@gmail.com', 'CSULB');
            
            expect(employee.getRole()).toEqual('Intern');
        });
    })
})