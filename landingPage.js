const ClickGallery = document.getElementById('gal_links');
const ClickHomework = document.getElementById('home_links');

const GalleryLinks = document.getElementById('link_container1');
const HomeworkLinks = document.getElementById('link_container2');

const backgroundImage = document.getElementById('backgroundImage');

const Shimer1 = document.getElementById('shimer1');
const Shimer2 = document.getElementById('shimer2');

const NavBar = document.getElementById('nav_bar');
const MainPageButton = document.getElementById('MainPageButton');
const GalleryButton = document.getElementById('GalleryButton');
const HomeworkButton = document.getElementById('HomeworkButton');



function Close_All() {
    if (HomeworkLinks.classList.contains('active')) {
        Open_Homework_Links();
    };

    if (GalleryLinks.classList.contains('active')) {
        Open_Gallery_Links();
    };
}

MainPageButton.addEventListener('click', Close_All);







function Open_Gallery_Links() {
    GalleryLinks.classList.toggle('active');
    backgroundImage.classList.toggle('gallery');
    ClickGallery.classList.toggle('hide');
    NavBar.classList.toggle('show');
    Shimer1.classList.toggle('hide');
    Shimer2.classList.toggle('hide');
}

ClickGallery.addEventListener('click', Open_Gallery_Links);
GalleryButton.addEventListener('click', function() {
    Open_Gallery_Links(); // Change this later
    Open_Homework_Links();
});

function Open_Homework_Links() {
    HomeworkLinks.classList.toggle('active');
    backgroundImage.classList.toggle('homework');
    ClickHomework.classList.toggle('hide');
    NavBar.classList.toggle('show');
    Shimer1.classList.toggle('hide');
    Shimer2.classList.toggle('hide');
}

ClickHomework.addEventListener('click', Open_Homework_Links);
HomeworkButton.addEventListener('click', function() {
    Open_Gallery_Links(); // Change this later
    Open_Homework_Links();
});


