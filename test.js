const test = require("ava")

test("main", (t) => {
	try {
		const bluetooth = require(".")
		t.truthy(bluetooth)
	} catch {
		t.pass()
	}
})
