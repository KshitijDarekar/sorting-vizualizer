// async function partition(low, high){
    
//     let bars = document.querySelectorAll(".bar");
//     let pivot = Number(bars[low].childNodes[0].innerHTML);
//     let i=low;
//     let j=high;


//     while(i<j){
//         do{
//             i++;
//                 // To pause the execution of code for 600 milliseconds
//                 await new Promise((resolve) =>
//                 setTimeout(() => {
//                 resolve();
//                 }, 100)
//             );
//             console.log( "Child Node = "+(bars[i].childNodes[0].innerHTML + " i = " + i)) ;

//         }while( Number(bars[i].childNodes[0].innerHTML)  < pivot);
    
//         do{
//             j--;
//                     // To pause the execution of code for 600 milliseconds
//                     await new Promise((resolve) =>
//                     setTimeout(() => {
//                     resolve();
//                     }, 100)
//                 );
                

//         }while( Number(bars[j].childNodes[0].innerHTML) >  pivot);
    
        
//     // Changing the color of elements to be swapped 
//     bars[i].style.backgroundColor = " rgb(49, 226, 13)"; //#6b5b95 
//     bars[j].style.backgroundColor = " rgb(49, 226, 13)"; //rgb(0, 183, 255)
//         if(i<j){
//         //await swap(bars[i],bars[j]);
//           var temp1 = bars[j].style.height; 
//           var temp2 = bars[j].childNodes[0].innerText; 
//           bars[j].style.height = bars[i].style.height; 
//           bars[i].style.height = temp1; 
//           bars[j].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
//           bars[i].childNodes[0].innerText = temp2; 
//           //bars = document.querySelectorAll(".bar");
    
//         }
        

        
//     //  // Changing the color to the previous one 
//      bars[i].style.backgroundColor = "rgb(0, 183, 255)"; //#6b5b95 
//      bars[j].style.backgroundColor = "rgb(0, 183, 255)"; //rgb(0, 183, 255)
            
//     }
    

//     // // Changing the color of elements to be swapped 
//     // bars[low].style.backgroundColor = " rgb(49, 226, 13)"; //#6b5b95 
//     // bars[j].style.backgroundColor = " rgb(49, 226, 13)"; //rgb(0, 183, 255)

//     //swap(bars[low],bars[j]);
//       temp1 = bars[j].style.height; 
//       temp2 = bars[j].childNodes[0].innerText; 
//       bars[j].style.height = bars[low].style.height; 
//       bars[low].style.height = temp1; 
//       bars[j].childNodes[0].innerText = bars[low].childNodes[0].innerText; 
//       bars[low].childNodes[0].innerText = temp2; 
     
//     //  // Changing the color to the previous one 
//     //  bars[low].style.backgroundColor = "rgb(0, 183, 255)"; //#6b5b95 
//     //  bars[j].style.backgroundColor = "rgb(0, 183, 255)"; //rgb(0, 183, 255)
//     bars[j].style.backgroundColor = "rgb(49, 226, 13)"; //rgb(0, 183, 255)

//     return j ;

// };
//take input from arr_sz to change number of bars

const button4 = document.getElementById("Button4");
button4.addEventListener("click", quickSort.bind(null,0,num-1));



async function partition(start, end){
    let bars = document.querySelectorAll(".bar");//. 
    let i= start + 1;
    let piv = Number(bars[start].childNodes[0].innerHTML) ;            //make the first element as pivot element.
    for(let j =start + 1; j <= end ; j++ )  {
    /*rearrange the array by putting elements which are less than pivot
       on one side and which are greater that on other. */

       
       // To pause the execution of code for 600 milliseconds
                    await new Promise((resolve) =>
                    setTimeout(() => {
                    resolve();
                    }, 100)
                );

          if ( Number(bars[j].childNodes[0].innerHTML) < piv) {
                 //swap (bars[ i ],bars[ j ]);
                                    
                // Changing the color of elements to be swapped 
                bars[i].style.backgroundColor = " rgb(49, 226, 13)"; //#6b5b95 
                bars[j].style.backgroundColor = " rgb(49, 226, 13)"; //rgb(0, 183, 255)

                // To pause the execution of code for 600 milliseconds
                await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 200)
            );

                temp1 = bars[j].style.height; 
                temp2 = bars[j].childNodes[0].innerText; 
                bars[j].style.height = bars[i].style.height; 
                bars[i].style.height = temp1; 
                bars[j].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
                bars[i].childNodes[0].innerText = temp2;

// To pause the execution of code for 600 milliseconds
await new Promise((resolve) =>
setTimeout(() => {
resolve();
}, 200)
);

                
    //  // Changing the color to the previous one 
     bars[i].style.backgroundColor = "rgb(0, 183, 255)"; //#6b5b95 
     bars[j].style.backgroundColor = "rgb(0, 183, 255)"; //rgb(0, 183, 255)            
            i += 1;
        }
   }
                    // To pause the execution of code for 600 milliseconds
                    await new Promise((resolve) =>
                    setTimeout(() => {
                    resolve();
                    }, 200)
                );

   //put the pivot element in its proper place.
    temp1 = bars[start].style.height; 
    temp2 = bars[start].childNodes[0].innerText; 
    bars[start].style.height = bars[i-1].style.height; 
    bars[i-1].style.height = temp1; 
    bars[start].childNodes[0].innerText = bars[i-1].childNodes[0].innerText; 
    bars[i-1].childNodes[0].innerText = temp2;
                    

                        // To pause the execution of code for 600 milliseconds
                        await new Promise((resolve) =>
                        setTimeout(() => {
                        resolve();
                        }, 100)
                    );
    
                    // for(k=start +1;k<end;k++){
                    //     bars[k].style.backgroundColor="rgb(49, 226, 13)";
                    // }
   return i-1;                      //return the position of the pivot
}


async function quickSort(low, high, delay = 100) {
let count =0;
let bars = document.querySelectorAll(".bar");//. 

   if(low<high){
       
       let j= await partition(low,high);
       if(low < j-1)
        //       // To pause the execution of code for 600 milliseconds
        //       await new Promise((resolve) =>
        //       setTimeout(() => {
        //       resolve();
        //       }, 100)
        //   );

       await quickSort(low,j);
       for(i=low;i<=j;i++){
            bars[i].style.backgroundColor="#6b5b95 ";
       }
       //console.log(++count);
        //       // To pause the execution of code for 600 milliseconds
        //       await new Promise((resolve) =>
        //       setTimeout(() => {
        //       resolve();
        //       }, 100)
        //   );
       await quickSort(j+1,high);
       for(i=j+1;i<=high;i++){
        bars[i].style.backgroundColor="#6b5b95 ";
   }
       //console.log(++count);
   }

   enable();
}