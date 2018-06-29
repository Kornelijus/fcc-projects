// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Project Description:
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
	var result = [];
	var loop = [];

	var nums = {
		'th': 'M',
		'hn': [
			[9, 'CM'],
			[5, 'D'],
			[4, 'CD'],
			[1, 'C']
		],
		'tn': [
			[9, 'XC'],
			[5, 'L'],
			[4, 'XL'],
			[1, 'X']
		],
		'rm': [
			[9, 'IX'],
			[5, 'V'],
			[4, 'IV'],
			[1, 'I']
		],
	}

	var th = Math.floor(num / 1000);
	var hn = Math.floor(num / 100) - 10 * th;
	var tn = Math.floor(num / 10) - 100 * th - 10 * hn;
	var rm = num - 1000 * th - 100 * hn - 10 * tn;

	if(th) result.push(nums['th'].repeat(th));
	if(hn) loop.push([hn, nums['hn']]);
	if(tn) loop.push([tn, nums['tn']]);
	if(rm) loop.push([rm, nums['rm']]);

	for(let n = 0; n < loop.length; n++) {
		for(let i = 0; i < loop[n][1].length; i++) {
			var max = 0;

			for(let j = 1; j < 4; j++) {
				let temp = loop[n][1][i][0] * j;
				if(temp <= loop[n][0]) {
					max = j;
				}
			}

			if(max != 0) {
				loop[n][0] -= loop[n][1][i][0] * max;
				result.push(loop[n][1][i][1].repeat(max));
			}
		}
	}
	return result.join('');
}