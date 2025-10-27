// map , filter , arrow fns 

// map ,filter => helper functions for array's 

// given an array , give me back a new array in which every value is multiplied by 2 
// ip : [1,2,3,4,5]
// op : [2,4,6,8,10]

// UGLY CODE
// const input = [1,2,3,4,5] ; 

// const newArr = [] ; 

// for ( let i = 0 ; i < input.length ; i++ ) { 
//     newArr.push(input[i] * 2 ) ; 
// }
// console.log(newArr)

// CLEAR CODE 


// const input = [1,2,3,4,5] ; 

// const ans = input.map((i) => { 
//     return i*2 ; 
// }) 

// console.log(ans)

// Assignment - create a map function that takes 2 input an array , a transformation function and transforms the array into a new one using the transformation function 

//------------------------------------------------------------------------------------

// FILTERING 

// UGLY CODE 
// const arr = [1,2,3,4,5] ; 

// const newArr = [] ; 

// for(let i = 0 ; i<arr.length ; i++) { 
//     if(arr[i] % 2 === 0) { 
//         newArr.push(arr[i]); 
//     }
// }

// console.log(newArr)

// CLEAN CODE 

const arr = [1,2,3,4,5]  ; 

function filterLogic(n) { 
    if ( n % 2 === 0 ) { 
        return true ; 
    } else { 
        return false ; 
    }
}

const ans = arr.filter(filterLogic) ; 
console.log(ans)