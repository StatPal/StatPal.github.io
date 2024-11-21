function showTab(event, tabId) {
    event.preventDefault();
    const tabs = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.tabs a');

    // Hide all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    // Remove active state from links
    links.forEach(link => link.classList.remove('active'));

    // Activate the clicked tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
    event.target.classList.add('active');
}


// let slideIndex = 0;

// function showSlides() {
//     let slides = document.getElementsByClassName("mySlides");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;    
//     }
//     slides[slideIndex - 1].style.display = "block";  
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

// showSlides(); // Call the function to start the slideshow