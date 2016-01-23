function bubbleSort(arr){

   var sorted;
   var iterations=0;
   while(!sorted){
       sorted = true;
       for(var i=0; i<arr.length-1; i++){
           //check for changes.. if any then set sorted = false
           iterations++;

           if(arr[i] > arr[i+1]){
               var temp = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = temp;
               sorted = false;
           }
       }
   }
    return arr;

}
