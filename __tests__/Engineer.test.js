const Engineer = require('../lib/Engineer');

describe("Engineer Class", () => {
    describe("Github", () => {
        it("should return the Engineer's Github Username", () => {
            const employee = new Engineer('Alan Huang', 731, 'a.huang232@gmail.com', 'ahuang23');
            
            expect(employee.getGithub()).toEqual(expect.any(String));
        });
    })
    describe("Role", () => {
        it("should return the Engineer's Role", () => {
            const employee = new Engineer('Alan Huang', 731, 'a.huang232@gmail.com', 'ahuang23');
            
            expect(employee.getRole()).toEqual('Engineer');
        });
    })
})