import valueCheck from "../valueCheck"

test("If val equals T then convert it to 10", () => {
    expect(valueCheck("T")).toBe("10")
})

test("If val doesn't equal T then keep it's value", () => {
    expect(valueCheck("5")).toBe("5")
})