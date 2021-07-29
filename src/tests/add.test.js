const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test("should add two numbers", () => {
    const result = add(3, 4)
    expect(result).toBe(7);
});

test("should add name!", () => {
    const nameResult = generateGreeting("Leo")
    expect(nameResult).toBe(`Hello Leo!`)
})