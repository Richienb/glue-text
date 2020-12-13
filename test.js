const test = require("ava")
const glueText = require(".")

test("main", t => {
	t.is(glueText("a b c"), "a\u00A0b\u00A0c")
	t.is(glueText("o-o"), "o-⁠o")
})
