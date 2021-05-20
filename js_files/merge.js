/*
Problem : Temporary arrays/objects are created to store the values in the
merge function () buth the values are referenced to the original array/objects

Links:

>https://stackoverflow.com/questions/9885821/copying-of-an-array-of-objects-to-another-array-without-object-reference-in-java

>https://stackoverflow.com/questions/12690107/clone-object-without-reference-javascript

>https://stackoverflow.com/questions/7486085/copy-array-by-value

>https://stackoverflow.com/questions/6612385/why-does-changing-an-array-in-javascript-affect-copies-of-the-array

>https://stackoverflow.com/questions/48219487/javascript-how-to-clone-array-without-reference

>https://bearnithi.com/2018/09/16/deep-copy-objects-in-javascript/



~ Kshitij Darekar
*/



//============================ Method :1     ==================>>

/*
function makeDuplicateObj(originalObj) {
  let duplicateObj = {};
  for(let key in originalObj) {
   if(typeof originalObj[key] === 'object') {
    duplicateObj[key] = this.makeDuplicateObj(originalObj[key]);
   } else {
    duplicateObj[key] = originalObj[key];
   }
  }
 return duplicateObj;
}

function copy_it(aObject) {
  if (!aObject) {
    return aObject;
  }

  let v;
  let bObject = Array.isArray(aObject) ? [] : {};
  for (const k in aObject) {
    v = aObject[k];
    bObject[k] = (typeof v === "object") ? copy_it(v) : v;
  }

  return bObject;
}

*/ 

// async function merge(p, q, r) {
//   let arr = document.querySelectorAll(".bar");
  
//   /*==> Different methods to copy object/array without references
//   but nothing is working out */
  
//   //let copy = JSON.parse(JSON.stringify(arr));
//   //let copy= Object.create(arr);
//   //let copy = makeDuplicateObj(arr);
//   //let copy = Object.assign({},arr);
//   //let copy = copy_it(arr);
//   let copy = [...arr];
// let copy=[];//copy of (".bar");
//   var i, j;
//   var n1 = q - p + 1;
//   var n2 = r - q;
//   var L = [];
//   var R = [];

//   for(i = 0; i < n1; i++) {
//     const templ=copy[p + i];
//       L.push(templ);
//   }
//   for(j = 0; j < n2; j++) {
//       const tempr = copy[q + j + 1]; 
//       R.push(tempr);

//   }
//   // L=Object.entries(arr).slice(p,p+n1).map(entry => entry[1]);
//   // R=Object.entries(arr).slice(q+1,q+n2+1).map(entry => entry[1]);



//   L.push(Infinity);
//   R.push(Infinity);

//   i = 0;
//   j = 0;

//   for(var k = p; k <= r; k++) {

//       if(Number(L[i].innerText) <= Number(R[j].innerText)) {
//           //arr[k] = L[i];
//           arr[k].style.height = L[i].style.height; 
//           arr[k].childNodes[0].innerText = L[i].childNodes[0].innerText;
//           i++;
//       }
//       else {
//           //arr[k] = R[j];
//           arr[k].style.height = R[j].style.height; 
//           arr[k].childNodes[0].innerText = R[j].innerText;
//           j++;
//       }


//   }


// }


//============================ Method :2



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
    console.log(typeof(bars));
    console.log(bars  ); 
    //  L= bars.slice(p,p+n1);
    L=Object.entries( bars).slice(p,p+n1).map(entry => entry[1]);
      //R= bars.slice(q+1,q+n2+1);
      R=Object.entries( bars).slice(q+1,q+n2+1).map(entry => entry[1]);
    
      // L.push(Infinity);
      // R.push(Infinity);
    
      i = 0;
      j = 0;
      
      // Initial index of merged subarray
      k = p;
     
      while (i < n1 && j < n2) {
        //arr = document.querySelectorAll(".bar");
        console.log("L[i]= "+L[i].innerText + "R[j]="+ R[j].innerText);
          if (Number(L[i].innerText) < Number(R[j].innerText)) {
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
        let tmp = arr[k];
        Object.assign([],bars,{k,tmp})
        // bars[k].style.height = arr[k].style.height; 
        // bars[k].innerText = arr[k].innerText;
        // bars[k].innerHtml = arr[k].innerHtml;
    
        bars[k].style.backgroundColor = "yellow"; 
     
      }
      //await sleep(delay);
    
      //if(p == 0 && r == size - 1)
         // setColorRange(p, r, SORTED);
      //else
        //  setColorRange(p, r, UNSORTED);
    
      }
 

async function mergeSort(p, r) {
  if(p < r) {
      var q = Math.floor( (p + r) / 2 );

      await mergeSort(p, q);

      await mergeSort(q + 1, r);

      await merge(p, q, r);
  }
}