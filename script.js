/* ATTEMPT #3 */
let matrix = []
let number = 1
let iterator1 = 0
let iterator2 = 1
function generateMatrix(num) {
    let top = 0
    let left = 0 
    let bottom = num - 1
    let right = num - 1
    let square = num*num
    //generate matrix arrays
    for (let i = 0; i < num; i++){
        matrix.push([])
        fillMatrix(matrix[i])  
    }
    function fillMatrix(arr){
        for (let i = 0; i < num; i++){
            arr.push(i - i)
        }
    }
    while (number <= square) {
        const recursion = () => {
            //top
            for (let i = left; i < num; i++) {
                matrix[top].splice(i, 1, number)
                number++
            }
            //right
            for (let i = top + 1; i < num; i++) {
                matrix[i].splice(right, 1, number)
                number++
            }
            //bottom
            for (let i = 1; i < num - left; i++) {
                if (number <= square) {
                matrix[bottom].splice(right - i, 1, number)
                number++
                }
            }
            //left
                for (let i = num - 2; i > 0 + left; i--) {
                    matrix[i].splice(left, 1, number)
                    number++
            }
            //top for odd
            left++
            top++
            bottom--
            right--
            num--
            }
            recursion()
        }
        console.log(matrix)
    }
generateMatrix(5)

/* ATTEMPT #5 */
/* let matrix = []
let number = 1
let iterator1 = 0
let iterator2 = 1
function generateMatrix(num) {
    let top = 0
    let left = 0 
    let bottom = num - 1
    let right = num - 1
    let movement = num 
    let square = num*num
    //generate matrix arrays
    for (let i = 0; i < num; i++){
        matrix.push([])
        fillMatrix(matrix[i])  
    }
    function fillMatrix(arr){
        for (let i = 0; i < num; i++){
            arr.push(i - i)
        }
    }
    while (number <= square) {
        // const recursion = () => {
            // number--
            //top
            if (matrix[top].includes(0)) {
                for (let i = iterator1; i < movement; i++) {
                    matrix[top].splice(i, 1, number)
                    number++
                }
            //right
            } else if (matrix[top + 1][right] === 0) {
                for (let i = iterator2; i < movement; i++) {
                    matrix[i].splice(right, 1, number)
                    number++
                }
            //bottom
            } else if (matrix[bottom].includes(0)) {
                for (let i = iterator2; i < movement - iterator1; i++) {
                    matrix[bottom].splice(right - i, 1, number)
                    number++
                }
            //left
            } else if (matrix[bottom - 1][left] === 0) {
                for (let i = movement - 2; i > 0; i--) {
                    matrix[i].splice(left, 1, number)
                    number++
                }
            }
            movement--
            left++
            top++
            bottom--
            right--
            iterator1++
            // number--
            // iterator2++
            }
            // recursion()
            console.log(matrix)
        }
        console.log(matrix)
generateMatrix(5)
*/

/* ATTEMPT #4 */
/* let matrix
    function generateMatrix(num) {
    let top = 0
    let left = 0
    let bottom = num - 1
    let right = num - 1
    let square = num*num
    matrix = [...Array(num).fill([...Array (num).fill(0)])]
    for (var i = 1; i <= square; i++) {         //i === 1 in recursion()
        recursion()
        const recursion = () => {
            if (matrix[top].includes(0)) {
                for (let j = left; j < num; j++) {
                    matrix[top].splice(j, 1, i) 
                    console.log(matrix[top])
                    console.log(matrix)

                }
            } else if (matrix[top + 1][right] === 0) {
                for (let j = top + 1; j < num;  j++) {
                    matrix[j].splice(right, 1, i)
                }
            } else if (matrix[bottom].includes(0)) {
                for (let j = right - 1; j > left; j--) {
                    matrix[bottom].splice(j, 1, i)
                }
            } else if (matrix[bottom - 1][left] === 0) {
                for (let j = bottom - 1; j > left; j--) {
                    matrix[j].splice(left, 1, i)
                }
            } 
            top++
            left++
            bottom--
            right--
            num--
            // recursion()
        }
    }
    console.log(matrix)
}

generateMatrix(5)
*/


/* ATTEMPT #2 */
/*
let row = 0
let rowPrevious = 0
let matrices = []
function matrixGenerator(num){
    //generate matrix arrays
    for (let i = 0; i < num; i++){
        matrices.push([])
    }
    //fill
    square = num * num
    for (let i = 0; i < square; i++){
        if (matrices[row].length === num && row === row - row){
            row++
            matrices[row].push(i + 1)
        } else if (matrices[rowPrevious].length === num && matrices[row].length <= 1 && row != num - 1) {
            row++
            matrices[row].push(i + 1)
        } else if (row === num -1 && matrices[row].length < num){
            matrices[row].unshift(i + 1)
        } else if (matrices[rowPrevious].length < num) {
            matrices[row].push(i + 1)
        } else if (matrices[num - 1].length === num && row != 0){
            row-- 
            matrices[row].unshift(i + 1)
        } else if ()
        console.log(matrices)
    }
}
matrixGenerator(5)
*/


/* FIRST ATTEMPT: not scaleable*/
/*
let matrix = []
let square = []
function matrixMaker(num) {
    //generate matrix arrays
    for (let i = 0; i < num; i++){
        matrix.push([])
    }
    //create & store num^2
    for (let i = 0; i < num * num; i++){
        square.push(i + 1)
    }
    //fill row 1
    for (let i = 0; i < num; i++){
        matrix[0].push(square[0])
        square.shift()
    }
    //fill the right column
    for (let i = 0; i < matrix.length - 1; i++){
        matrix[i + 1].push(square[0])
        square.shift()
    }
    //fill bottom row
    for (let i = 0; i < num - 1; i++){
        matrix[num - 1].unshift(square[0])
        square.shift()
    }
    //fill left row
    for (let i = matrix.length - 2; i > 0; i--){
        matrix[i].unshift(square[0])
        square.shift()
    }
    ring++
    //fill rest
    for (let i = 0; i < num - 2; i++){
        matrix[ring].splice(ring, 0, square[0])
        square.shift()
    }
    console.log(matrix)
}
matrixMaker(3)
*/