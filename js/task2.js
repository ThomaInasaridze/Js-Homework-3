function conv(temp) {
	return temp + " cels = " +((temp*9/5)+32)+ " fh ";
}

const theirInput = prompt("Enter in a celsius temperature ");


const result = conv(theirInput);

console.log(result);