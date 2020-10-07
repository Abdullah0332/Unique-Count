let arr = [1,9,5,7,9,3,6,4,7,8,2,9,4,1,3,8,7,2,6,8,1]

const uniqueNum = (value, index, self) => {
  return self.indexOf(value) === index
}

const uniqueElements = arr.filter(uniqueNum)

uniqueElements.forEach(element => {
  countInArray(arr, element)
})


function countInArray(array, num) {
    let Count =  array.filter(item => item === num).length;
    console.log(`Number of times ${num} appeared = ${Count}`)
}
