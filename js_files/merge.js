
async function merge(p, r) {
  let bars = document.querySelectorAll(".bar");//.

  //await sleep(delay);
  var q = Math.floor( (p + r) / 2 );
  var i, j;
  var n1 = q - p + 1;
  var n2 = r - q;
  var L = [];
  var R = [];
  let arr=[];

  for(i = 0; i < n1; i++) {
      L.push(bars[p + i]);
     // console.log(arr[p+i].childNodes[0].innerText);
     // setColor(p + i, LEFT);
  }
  for(j = 0; j < n2; j++) {
      R.push(bars[q + j + 1]);
     // setColor(q + j + 1, RIGHT);
  }

  // L.push(Infinity);
  // R.push(Infinity);

  i = 0;
  j = 0;
  
  // Initial index of merged subarray
  k = 0;
 
  while (i < n1 && j < n2) {
    //arr = document.querySelectorAll(".bar");
    console.log("L[i]= "+L[i].innerText + "R[j]="+ R[j].innerText);
      if (L[i].innerText < R[j].innerText) {
          arr[k] = L[i];

          //arr.push(L[i]);

          //  console.log("L is "+ L);
          // arr[k].style.height = L[i].style.height; 
          // arr[k].childNodes[0].innerText = L[i].childNodes[0].innerText;
          // arr = document.querySelectorAll(".bar"); 
          i++;
      }
      else {
         arr[k] = R[j];
        // console.log("R is "+ R);
        //arr.push(R[j]);

        // arr[k].style.height = R[j].style.height; 
        // arr[k].childNodes[0].innerText = R[j].childNodes[0].innerText;
        // arr = document.querySelectorAll(".bar");  
          j++;
      }
      k++;
  }

  while(i<n1){


    arr[k] =L[i];

    // arr[k].style.height = L[i].style.height; 
    // arr[k].childNodes[0].innerText = L[i].childNodes[0].innerText; 

    //arr.push(L[i]);

    i++;
    k++; 
  }

  while(j<n2){

    arr[k] = R[j];

    //console.log(k)  
    //arr.push(R[j]);
    // arr[k].style.height = R[j].style.height;
    
    // arr[k].childNodes[0].innerText = R[j].childNodes[0].innerText; 


      j++;
      k++;
  }
 
  for(let k=p;k<=r;k++){
    bars[k].style.height = arr[k].style.height; 
    bars[k].childNodes[0].innerText = arr[k].innerText;
    bars[k].childNodes[0].innerHtml = arr[k].innerHtml;

    bars[k].style.backgroundColor = "yellow"; 
 
  }
  //await sleep(delay);

  //if(p == 0 && r == size - 1)
     // setColorRange(p, r, SORTED);
  //else
    //  setColorRange(p, r, UNSORTED);

  }



async function mergeSort(low, high) {
let count =0;
 if(low<high){
      
     //if(low < j-1)
     var j = Math.floor( (low + high) / 2 );


     await mergeSort(low,j);
     await mergeSort(j+1,high);
     await merge(low,high);
 }
 if(low>=high){
   return;
 }

 enable();
}