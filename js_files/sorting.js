const container = document.querySelector(".data-container"); 

//take input from arr_sz to change number of bars
let arr_size=document.getElementById("arr_sz")
let num= parseInt(arr_size.value);




// function to generate bars 
function generatebars(num =20) {
  
  //Remove Previous Childnodes (bars) if any

  while(container.hasChildNodes()){
    container.removeChild(container.firstChild);
  }     
  //for loop to generate 20 bars 
  for (let i = 0; i < num; i += 1) {
      // set width of bars
      let max_width;
      if(window.outerWidth > 600){
         max_width = 600;

      }
      else{
        max_width = 300;

      }
    // To generate random values from 1 to 100 
    const value = Math.floor(Math.random() * 99) + 6;  
    // To create element "div" 
    const bar = document.createElement("div"); 
    // To add class "bar" to "div" 
    bar.classList.add("bar"); 
    // Provide height to the bar 
    bar.style.height = `${value * 3}px`; 
    // Translate the bar towards positive X axis 
    bar.style.width=`${(max_width+5)/num}px`; 
    let width =max_width/num  ;
    bar.style.transform = `translateX(${i * (width+3)  }px)`;
    // To create element "label" 
    const barLabel = document.createElement("label"); 
    // To add class "bar_id" to "label" 
    barLabel.classList.add("bar_id"); 
    // Assign value to "label" 
    barLabel.innerHTML = value;
    // if width of bar is too small then don't show the innerHTML value
    if(width<26){
      barLabel.style.display="none";
    } 
    // Append "Label" to "div" 
    bar.appendChild(barLabel); 
    // Append "div" to "data-container div" 
    container.appendChild(bar); 
  } 
} 

    //Promise to swap two bars 
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
  
  
// Call "generatebars" function 
generatebars(); 
  
// function to generate new random array  
 function generate() 
{ 
  generatebars(parseInt(arr_size.value));
 } 
  

 //  function to disable the button 
function disable() 
{ 
  // To disable the button "Generate New Array" 
  document.getElementById("Button1").disabled = true; 
  document.getElementById("Button1").style.backgroundColor = "#b2bec3"; 
  
  // To disable the button "Bubble Sort" 
  document.getElementById("Button2").disabled = true; 
  document.getElementById("Button2").style.backgroundColor = "#b2bec3";
  
  // To disable the button "Selection Sort" 
  document.getElementById("Button3").disabled = true; 
  document.getElementById("Button3").style.backgroundColor = "#b2bec3";

  // To disable the button "Quick Sort" 
  document.getElementById("Button4").disabled = true; 
  document.getElementById("Button4").style.backgroundColor = "#b2bec3";

  // To disable the button "Insertion Sort" 
  document.getElementById("Button5").disabled = true; 
  document.getElementById("Button5").style.backgroundColor = "#b2bec3";   
}

//  function to enable the button 
function enable() 
{ 
  // To enable the button "Generate New Array" 
  document.getElementById("Button1").disabled = false; 
  document.getElementById("Button1").style.backgroundColor = "#6c757d"; 
  
  // To enable the button "Bubble Sort" 
  document.getElementById("Button2").disabled = false; 
  document.getElementById("Button2").style.backgroundColor = "#212529";
  
  // To enable the button "Selection Sort" 
  document.getElementById("Button3").disabled = false; 
  document.getElementById("Button3").style.backgroundColor = "#212529";

  // To enable the button "Quick Sort" 
  document.getElementById("Button4").disabled = false; 
  document.getElementById("Button4").style.backgroundColor = "#212529";

  // To enable the button "Insertion Sort" 
  document.getElementById("Button5").disabled = false; 
  document.getElementById("Button5").style.backgroundColor = "#212529";
}
