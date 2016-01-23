describe('merge', function(){
    it('zips up arrays', function(){
        expect(merge([1, 4, 9], [2, 3])).toEqual([1, 2, 3, 4, 9]);
    });
});

describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
    it('handles a single-item array', function(){
        expect(mergeSort([5])).toEqual([5]);
    });
    it('handles an array with multiple items', function(){
        expect( mergeSort([12, 4, 9, 2, 1]) ).toEqual( [1, 2, 4, 9, 12] );
    });
});

// (function perfTest(){
//   for (var i = 9; i <= 15; i++) {
//     var numItems = Math.pow(2, i);
//     var nativeTestArray = [];
//
//     for(var j = 0; j < numItems; j++) {
//       var rand = Math.floor(Math.random() * numItems);
//       nativeTestArray.push(rand);
//     }
//
//     var bTestArray = nativeTestArray.slice(0);
//     var mTestArray = nativeTestArray.slice(0);
//
//     console.time(numItems + ' native');
//     nativeTestArray.sort(function(a, b){ return a - b; });
//     console.timeEnd(numItems + ' native');
//
//     console.time(numItems + ' bubble');
//     bubbleSort(bTestArray);
//     console.timeEnd(numItems + ' bubble');
//
//     console.time(numItems + ' merge');
//     mergeSort(mTestArray);
//     console.timeEnd(numItems + ' merge');
//   }
// })();
