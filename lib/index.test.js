const index = require("./index")
// @ponicode
describe("index", () => {
    test("0", () => {
        let callFunction = () => {
            index({ key5: -100, 5: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index({ key5: 0, 5: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index({ key5: 0, 5: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index({ key5: 100, 5: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index({ key5: 1, 5: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index({ key5: Infinity, 5: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
