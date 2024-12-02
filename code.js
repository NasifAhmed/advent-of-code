const fs = require('fs');


const sort = (lis)=> {

	let smallest = 0
	let index = 0
	let sorted = []
	while(lis.length!==0) {
		for(i in lis) {
			if(i===0) {
				smallest = lis[0]
			}
			if(lis[i]<smallest) {
				smallest = lis[0]
				index = i
			}
		}
		delete lis[i]
		sorted.push(smallest)
	}

	return sorted

}
// Asynchronous reading
fs.readFile('input', 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading file:', err);
		return;
	}
	console.log('File content:', data);
	const lines = data.split("\n")
	console.log("One line : ", lines[2])
	let leftNum = []
	let rightNum = []
	for(x in lines) {
		console.log("For : ", x)
		leftNum[x] = parseInt(lines[x].split("   ")[0])
		rightNum[x] = parseInt(lines[x].split("   ")[1])
	}
	leftNum.sort()
	rightNum.sort()
	console.log("Sorted left : ", leftNum)
	let totalDifference = 0
	for(x in lines) {
		if(!leftNum[x]) { break }
		console.log("Difference : ", Math.abs(leftNum[x] - rightNum[x]))
		totalDifference = totalDifference + Math.abs(leftNum[x] - rightNum[x])
	}
	console.log("total difference : ", totalDifference)
})
