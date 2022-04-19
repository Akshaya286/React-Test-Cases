import {multiply, makeLowerCase} from './HelperFunctions'

test('multiply',()=>{
    expect(multiply(2,10)).toBe(20)
    expect(multiply(6, -2)).toBe(-12)
})
test ('lowerCase',()=>{
    expect(makeLowerCase("AKSHAYa")).toBe("akshaya")
    expect(makeLowerCase("DEV")).toBe("dev")
})