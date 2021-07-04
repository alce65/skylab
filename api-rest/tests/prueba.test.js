/* globals describe, test, expect */

describe('Probando Jest', () => {
	test('suma() should be 0', () => {
		const r = (a = 0, b = 0) => a + b
		expect(r()).toBe(0)
	})

	test('suma(a,b) should not be 0', () => {
		const r = (a = 0, b = 0) => a + b
		expect(r(1, 4)).not.toBe(0)
	})
})



