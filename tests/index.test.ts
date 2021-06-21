import sayHello from "../src"

test("says hello world", () => {
    expect(sayHello()).toEqual("Hello, world!")
})

test("says hello brad", () => {
    expect(sayHello("Brad")).toEqual("Hello, Brad!")
})
