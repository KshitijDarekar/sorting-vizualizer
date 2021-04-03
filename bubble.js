//Asynchronous BubbleSort function 
async function BubbleSort(delay = 100) { 
    var bars = document.querySelectorAll(".bar"); 
  
    // BubbleSort Algorithm 
    for (var i = 0; i < bars.length; i += 1) { 
        for (var j = 0; j < bars.length - i - 1; j += 1) { 
  
            // To change background-color of the 
            // bars to be compared 
            bars[j].style.backgroundColor = "#FF4949"; 
            bars[j + 1].style.backgroundColor = "#FF4949"; 
  
            // To wait for .1 sec 
            await new Promise((resolve) => 
                setTimeout(() => { 
                    resolve(); 
                }, delay) 
            ); 
  
            console.log("run"); 
            var value1 = Number(bars[j].childNodes[0].innerHTML); 
            var value2 = Number(bars[j + 1] 
                        .childNodes[0].innerHTML); 
  
            // To compare value of two bars 
            if (value1 > value2) { 
                await swap(bars[j], bars[j + 1]); 
                bars = document.querySelectorAll(".bar"); 
            } 
  
            // Changing the color to the previous one 
            bars[j].style.backgroundColor = "#6b5b95"; //#6b5b95 
            bars[j + 1].style.backgroundColor = "#6b5b95"; //rgb(0, 183, 255)
        } 
  
        //changing the color of greatest element  
        //found in the above traversal 
        bars[bars.length - i - 1] 
                .style.backgroundColor = "#13CE66"; 
    } 
    enable();
} 



