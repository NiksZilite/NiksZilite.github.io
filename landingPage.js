const ClickGallery = document.getElementById('gal_links');
const ClickHomework = document.getElementById('home_links');
const ClickGifs = document.getElementById('gifs_links');

const GalleryLinks = document.getElementById('link_container1');
const HomeworkLinks = document.getElementById('link_container2');
const GifsGallery = document.getElementById('gifs_box_container');

const overflowControl = document.getElementById('overflow');
const backgroundImage = document.getElementById('backgroundImage');


const Shimer1 = document.getElementById('shimer1');
const Shimer2 = document.getElementById('shimer2');

const NavBar = document.getElementById('nav_bar');
const MainPageButton = document.getElementById('MainPageButton');
const GalleryButton = document.getElementById('GalleryButton');
const HomeworkButton = document.getElementById('HomeworkButton');

const floatingAnimation = document.getElementById('backgroundStars');


function Close_All() {
    floatingAnimation.classList.remove('zoomedIn');

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
    ClickHomework.classList.toggle('hide');
    NavBar.classList.toggle('show');
    Shimer1.classList.toggle('hide');
    Shimer2.classList.toggle('hide');

    if (GalleryLinks.classList.contains('active')) {
        floatingAnimation.classList.add('zoomedIn');
    }
}

ClickGallery.addEventListener('click', Open_Gallery_Links);

GalleryButton.addEventListener('click', function() {
    Open_Gallery_Links();
    
    if(HomeworkLinks.classList.contains('active')){
        Open_Homework_Links();
    } else if(GifsGallery.classList.contains('open')) {
        Open_Homework_Links();
        ClickHomework.classList.toggle('hide'); //CHANG the toggle for home_links to remove/add
        Open_Gifs_Gallery();
    } else {
        floatingAnimation.classList.remove('zoomedIn');
    }
});

function Open_Homework_Links() {
    HomeworkLinks.classList.toggle('active');
    backgroundImage.classList.toggle('homework');
    ClickHomework.classList.toggle('hide');
    ClickGallery.classList.toggle('hide');
    NavBar.classList.toggle('show');
    Shimer1.classList.toggle('hide');
    Shimer2.classList.toggle('hide');

    if (HomeworkLinks.classList.contains('active')) {
        floatingAnimation.classList.add('zoomedIn');
    }
}

ClickHomework.addEventListener('click', Open_Homework_Links);

HomeworkButton.addEventListener('click', function() {
    Open_Homework_Links();

    if(GalleryLinks.classList.contains('active')){
        Open_Gallery_Links();
    } else if(GifsGallery.classList.contains('open')) {
        Open_Homework_Links();
        ClickGallery.classList.toggle('hide'); //CHANG the toggle for gal_links to remove/add
        Open_Gifs_Gallery();
    } else {
        floatingAnimation.classList.remove('zoomedIn');
    }
});

ClickGifs.addEventListener('click', Open_Gifs_Gallery);

function Open_Gifs_Gallery() {
    GifsGallery.classList.toggle('open');
    HomeworkLinks.classList.toggle('active');
    backgroundImage.classList.toggle('hide');
    overflowControl.classList.toggle('show');
    floatingAnimation.classList.toggle('hide');
}

// Animation faster if zoomed in