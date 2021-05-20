//------Selection Sort Algorithm Visualizer ---------------

//asynchronous function to perform "Selection Sort" 
async function SelectionSort(delay = 300) { 
    let bars = document.querySelectorAll(".bar"); 
    // Assign 0 to min_idx 
     var min_idx = 0; 
     for (var i = 0; i < bars.length; i += 1) { 
    
      // Assign i to min_idx 
      min_idx = i; 
    
      // Provide darkblue color to the ith bar 
      bars[i].style.backgroundColor = "#6c5b7b"; 
      for (var j = i + 1; j < bars.length; j += 1) { 
    
        // Provide red color to the jth bar 
        bars[j].style.backgroundColor = "#ff4242"; 
          
        // To pause the execution of code for 300 milliseconds 
        await new Promise((resolve) => 
          setTimeout(() => { 
            resolve(); 
          }, 300) 
        ); 
    
        // To store the integer value of jth bar to var1  
        var val1 = parseInt(bars[j].childNodes[0].innerHTML); 
    
        // To store the integer value of (min_idx)th bar to var2  
        var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML); 
          
        // Compare val1 & val2 
        if (val1 < val2) { 
          if (min_idx !== i) { 
    
            // Provide skyblue color to the (min-idx)th bar 
            bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)"; 
          } 
          min_idx = j;
          bars[min_idx].style.backgroundColor = "#f0a830"; 
        } else { 
    
          // Provide skyblue color to the jth bar 
          bars[j].style.backgroundColor = "  rgb(24, 190, 255)"; 
        } 
      } 
    
      // To swap ith and (min_idx)th bar 
      var temp1 = bars[min_idx].style.height; 
      var temp2 = bars[min_idx].childNodes[0].innerText; 
      bars[min_idx].style.height = bars[i].style.height; 
      bars[i].style.height = temp1; 
      bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
      bars[i].childNodes[0].innerText = temp2; 
        
      // To pause the execution of code for 300 milliseconds 
      await new Promise((resolve) => 
        setTimeout(() => { 
          resolve(); 
        }, 300) 
      ); 
    
      // Provide skyblue color to the (min-idx)th bar 
      bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)"; 
    
      // Provide lightgreen color to the ith bar 
      bars[i].style.backgroundColor = "#13CE66"; 
    } 
    // to enable buttons after sorting
    enable();
  } 
    

  // ~~~ Kshitij Darekar
