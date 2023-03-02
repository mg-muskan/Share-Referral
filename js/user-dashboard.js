window.addEventListener('DOMContentLoaded', () => {

    const noImage = document.getElementById('user-dashboard-info-image');

    // Image not present
    if(document.getElementById('user-dashboard-image').getAttribute('src') == '') {
        const name = document.getElementById('user-dashboard-info-rest-name').innerText;
        noImage.innerText = name.charAt(0).trim();
    }

    // Image is present
    else {
        noImage.classList.remove('no-image');
    }

})

const dashboardNav = document.getElementById('collapse-dashboard');
const dashboardNavToggle = document.getElementById('user-dashboard-nav-toggle');
dashboardNavToggle.addEventListener('click', function() {
    dashboardNav.classList.toggle('active');
    console.log('hey');
})