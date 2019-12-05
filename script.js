function contentPanel(evt, contentId) {
    
    let i, tabcontent, tablinks, afterImage;
    
    tabcontent = document.getElementsByClassName("tab-content");
    
    for (i = 0; i < tabcontent.length; i++) {
        
      tabcontent[i].style.display = "none";
  
    }
    
    document.getElementById(contentId).style.display = "flex";
  
}

let slideIndex = 0;

let showSlides = function() {
    let i;
    let tabcontent = document.getElementsByClassName("tab-content");
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > tabcontent.length) {slideIndex = 1}    

    tabcontent[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 4000); // Change image every 10 seconds
}

showSlides();