async function merge(p, r) {
  let arr = document.querySelectorAll(".bar");//. 

  //await sleep(delay);
  var q = Math.floor( (p + r) / 2 );
  var i, j;
  var n1 = q - p + 1;
  var n2 = r - q;
  var L = [];
  var R = [];

  for(i = 0; i < n1; i++) {
      L.push(arr[p + i]);
     // setColor(p + i, LEFT);
  }
  for(j = 0; j < n2; j++) {
      R.push(arr[q + j + 1]);
     // setColor(q + j + 1, RIGHT);
  }

  //L.push(Infinity);
 // R.push(Infinity);

  i = 0;
  j = 0;

  for(var k = p; k <= r; k++) {
      //await sleep(delay);

      if(L[i] <= R[j]) {
        console.log(arr[k].childNodes[0].innerText);
        arr[k].childNodes[0].innerText= L[i];
          i++;
      }
      else {
        arr[k].childNodes[0].innerText = R[j];
          j++;
      }

     // setHeight(k, arr[k]);
      //setColor(k, SELECTED);
  }

  //await sleep(delay);

  //if(p == 0 && r == size - 1)
     // setColorRange(p, r, SORTED);
  //else
    //  setColorRange(p, r, UNSORTED);
}



// async function merge(start, end){
//   let mid = (start+end)/2;
//   let bars = document.querySelectorAll(".bar");//. 
//   let i= start + 1;
//   let piv = Number(bars[start].childNodes[0].innerHTML) ;            //make the first element as pivot element.
//   for(let j =start + 1; j <= end ; j++ )  {
//   /*rearrange the array by putting elements which are less than pivot
//      on one side and which are greater that on other. */

     
//      // To pause the execution of code for 600 milliseconds
//                   await new Promise((resolve) =>
//                   setTimeout(() => {
//                   resolve();
//                   }, 100)
//               );

//         if ( Number(bars[j].childNodes[0].innerHTML) < piv) {
//                //swap (bars[ i ],bars[ j ]);
                                  
//   // Changing the color of elements to be swapped 
//   bars[i].style.backgroundColor = " rgb(49, 226, 13)"; //#6b5b95 
//   bars[j].style.backgroundColor = " rgb(49, 226, 13)"; //rgb(0, 183, 255)

//   // To pause the execution of code for 600 milliseconds
//   await new Promise((resolve) =>
//   setTimeout(() => {
//   resolve();
//   }, 200)
// );

//               temp1 = bars[j].style.height; 
//               temp2 = bars[j].childNodes[0].innerText; 
//               bars[j].style.height = bars[i].style.height; 
//               bars[i].style.height = temp1; 
//               bars[j].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
//               bars[i].childNodes[0].innerText = temp2;

// // To pause the execution of code for 600 milliseconds
// await new Promise((resolve) =>
// setTimeout(() => {
// resolve();
// }, 200)
// );

              
//   //  // Changing the color to the previous one 
//    bars[i].style.backgroundColor = "rgb(0, 183, 255)"; //#6b5b95 
//    bars[j].style.backgroundColor = "rgb(0, 183, 255)"; //rgb(0, 183, 255)            
//           i += 1;
//       }
//  }
//                   // To pause the execution of code for 600 milliseconds
//                   await new Promise((resolve) =>
//                   setTimeout(() => {
//                   resolve();
//                   }, 200)
//               );

//  //put the pivot element in its proper place.
//   temp1 = bars[start].style.height; 
//   temp2 = bars[start].childNodes[0].innerText; 
//   bars[start].style.height = bars[i-1].style.height; 
//   bars[i-1].style.height = temp1; 
//   bars[start].childNodes[0].innerText = bars[i-1].childNodes[0].innerText; 
//   bars[i-1].childNodes[0].innerText = temp2;
                  

//                       // To pause the execution of code for 600 milliseconds
//                       await new Promise((resolve) =>
//                       setTimeout(() => {
//                       resolve();
//                       }, 100)
//                   );
  
//  return i-1;                      //return the position of the pivot
// }


async function mergeSort(low, high, delay = 100) {
let count =0;
 if(low<high){
      
     //if(low < j-1)
     var j = Math.floor( (low + high) / 2 );


     await mergeSort(low,j);
     await mergeSort(j+1,high);
     await merge(low,high);
 }

 enable();
}