// Decimal to Binary 
// Write a function called decimalConverter which takes a decimal number 
// and returns the binary version. For example: decimalConverter.convert(9) //=> 1001

module.exports = {

	convert: function(num) {
	var binaryNum = [1];
	var summedNum = 0;
	if (num === 0) {
		return 0;
	}
	for (var i = 1; binaryNum[0]<num; i++) {
		binaryNum.unshift(Math.pow(2, i));
	}
	for (var i = 0; i < binaryNum.length; i++) {
			if (binaryNum[i] <= num - summedNum) {
				summedNum += binaryNum[i];
				binaryNum[i] = 1;
			}
			else {
				binaryNum[i] = 0;
			}
		}

		return Number(binaryNum.join(""));
},
};


