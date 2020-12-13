"use strict"
const LineBreaker = require("linebreak")

const breakString = input => {
	const breaker = new LineBreaker(input)

	const sections = []

	let currentBreak = breaker.nextBreak()
	let lastBreakPosition

	while (currentBreak) {
		sections.push(input.slice(lastBreakPosition, currentBreak.position))
		lastBreakPosition = currentBreak.position
		currentBreak = breaker.nextBreak()
	}

	return sections
}

module.exports = input => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	// TODO: Use String#replaceAll when supported
	return breakString(input.replace(/ /g, "\u00A0")).join("\u2060")
}
