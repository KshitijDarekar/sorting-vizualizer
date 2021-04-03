

function swap(el1, el2) { 
    return new Promise((resolve) => { 
  
        // For exchanging styles of two bars 
        var temp = el1.style.transform; 
        el1.style.transform = el2.style.transform; 
        el2.style.transform = temp; 
  
        window.requestAnimationFrame(function() { 
  
            // For waiting for .25 sec 
            setTimeout(() => { 
                container.insertBefore(el2, el1); 
                resolve(); 
            }, 250); 
        }); 
    }); 
} 

async function partition(start, end){
    let bars = document.querySelectorAll(".bar");//. 

    // Taking the last element as the pivot
    const pivotValue = Number(bars[end].childNodes[0].innerHTML);
    console.log(pivotValue);
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {

        var value1 = Number(bars[i].childNodes[0].innerHTML); 
        //var value2 = Number(bars[pivotValue].childNodes[0].innerHTML); 
        if (value1 < pivotValue) {
        // Swapping elements
        //[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        swap(bars[i],bars[pivotIndex]);
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    //[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    swap(bars[pivotIndex],bars[end]);
    return pivotIndex;
};

async function quickSort(start, end) {

   // let bars = document.querySelectorAll(".bar"); //..
    //let start =0;
   // let end = bars.length -1 ;

    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = await partition(start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    await quickSort(start, index - 1);
    await quickSort(index + 1, end);
}