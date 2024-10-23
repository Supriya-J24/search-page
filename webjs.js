const selectelmt=document.querySelector(".search-select");
const inputelmt=document.querySelector(".search-input");
const clearbtn=document.querySelector(".clear-btn");
    


function clearToggle(){
    if (inputelmt.value.trim() === '') {
            clearbtn.style.display = 'none'; // Hide clear button
        
    } else {
            clearbtn.style.display = 'inline-block'; // Show clear button
    }    
}
inputelmt.addEventListener('input',clearToggle);
clearbtn.addEventListener('click',()=>{
        
    inputelmt.value='';
    inputelmt.placeholder='Search Amazon.in';
    clearToggle();
});
selectelmt.addEventListener('change',()=>{
    inputelmt.placeholder='Search in'+" "+selectelmt.value+"....";
    clearToggle();
});

   
clearToggle();