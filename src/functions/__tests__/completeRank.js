import completeRank from "../completeRank"

test("Rank equals 1 then add st", () => {
    expect(completeRank(1)).toBe("1st")
})

test("Rank equals 2 then add nd", () => {
    expect(completeRank(2)).toBe("2nd")
})

test("Rank equals 3 then add st", () => {
    expect(completeRank(3)).toBe("3rd")
})
