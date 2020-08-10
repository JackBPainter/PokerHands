import valueCheck from "../valueCheck"

test("If val equals T then convert it to 10", () => {
    expect(valueCheck("T")).toBe("10")
})