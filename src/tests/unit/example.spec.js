const { describe, test, expect } = require("@jest/globals");

describe("test", () => {
    test("Sum two numbers", () => {
        const sum = 1 + 1;
        expect(sum).toBe(2);
    })
})