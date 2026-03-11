import main from "./main.js";

test("Test 1: 28", () => {
    expect(main("011100")).toBe(7);
});

test("Test 2: 7", () => {
    expect(main("111")).toBe(5);
});

test("Test 3: 7855", () => {
    expect(main("1111010101111")).toBe(22);
});

test("Test 4: too much 1", () => {
    const binaryString = "1".repeat(400000);
    expect(main(binaryString)).toBe(799999);
});