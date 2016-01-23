function merge(first, second){
    var merged = [];

    while(first.length > 0 && second.length > 0){

        var firstSmaller = first[0] <= second[0];

        if(firstSmaller){
            merged.push(first.shift());
        }else{
            merged.push(second.shift());
        }

    }

    if(first.length > 0){
        merged = merged.concat(first);
    }else if(second.length > 0){
        merged = merged.concat(second);
    }

    return merged;
}

function mergeSort(array){
    if (array.length === 1 || array.length === 0)
        return array;
   var left = split(array)[0];
   var right = split(array)[1];

   left = mergeSort(left);
   right = mergeSort(right);

   return merge(left, right);

}

function split(array){
    var mid = Math.floor(array.length/2);
    var firstHalf = array.slice(0, mid);
    var secondHalf = array.slice(mid);

    return [firstHalf, secondHalf];
}
