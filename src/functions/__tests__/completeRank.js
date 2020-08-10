import completeRank from "../completeRank"

test("Rank equals 1 then add st", () => {
    expect(completeRank(1)).toBe("1st")
})