import nodePlop from "node-plop"

import generator from "../src"

test("loads generator", () => {
    const plop = nodePlop("tests/utils/plopfile.ts")
    expect(generator(plop)).toBeUndefined()
})
