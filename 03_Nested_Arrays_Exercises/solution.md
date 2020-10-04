```javascript 
function rotate(arr, num) {
    let _arr = arr.splice();

    for(let i = 0; i < num; i++){
        let lastIndex = _arr.pop();
        _arr.unshift(lastIndex);
    }

    return _arr;
}

rotate([1,2,3], 1) // [3,1,2]
```