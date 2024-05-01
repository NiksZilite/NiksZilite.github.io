const ClickGallery = document.getElementById('gal_links');
const ClickHomework = document.getElementById('home_links');
    const ClickGifs = document.getElementById('gifs_links');
const ClickFeedback = document.getElementById('feed_links');
const ClickSocials= document.getElementById('socal_links');

const GalleryLinks = document.getElementById('link_container1');
const HomeworkLinks = document.getElementById('link_container2');
    const GifsGallery = document.getElementById('gifs_box_container');
const FeedbackLinks = document.getElementById('link_container3');
const SocialsLinks = document.getElementById('link_container4');

const overflowControl = document.getElementById('overflow'); // For gif gallerys that needs "overflow: vidiblr"
const backgroundImage = document.getElementById('backgroundImage');

const Shimer1 = document.getElementById('shimer1');
const Shimer2 = document.getElementById('shimer2');
const Shimer3 = document.getElementById('shimer3');
const Shimer4 = document.getElementById('shimer4');

const NavBar = document.getElementById('nav_bar');
const MainPageButton = document.getElementById('MainPageButton');
const GalleryButton = document.getElementById('GalleryButton');
const HomeworkButton = document.getElementById('HomeworkButton');
const FeedbackButton = document.getElementById('FeedbackButton');
const SocialsButton = document.getElementById('SocialButton');

const floatingAnimation = document.getElementById('backgroundStars');

  /////////////////////////////
 // Event: Clicked a Shimer //
/////////////////////////////

ClickGallery.addEventListener('click', Open_Gallery_Links);
ClickHomework.addEventListener('click', Open_Homework_Links);
ClickFeedback.addEventListener('click', Open_Feedback_Links);
ClickSocials.addEventListener('click', Open_Socials_Links);


// Open the clicked Shimers

function Hide_All_Shimers(){
    ClickGallery.classList.add('hide');
    ClickHomework.classList.add('hide');
    ClickFeedback.classList.add('hide');
    ClickSocials.classList.add('hide');
    Shimer1.classList.add('hide');
    Shimer2.classList.add('hide');
    Shimer3.classList.add('hide');
    Shimer4.classList.add('hide');
}

function Open_Gallery_Links() {
    Hide_All_Shimers();
    backgroundImage.classList.add('gallery');
        // Setup for navigation bar
        backgroundImage.classList.remove('homework');
        backgroundImage.classList.remove('feedback');
        backgroundImage.classList.remove('socials');
    GalleryLinks.classList.add('active');
    NavBar.classList.add('show');
    floatingAnimation.classList.add('zoomedIn');
}

function Open_Homework_Links() {
    Hide_All_Shimers();
    backgroundImage.classList.add('homework');
        // Setup for navigation bar
        backgroundImage.classList.remove('gallery');
        backgroundImage.classList.remove('feedback');
        backgroundImage.classList.remove('socials');
    HomeworkLinks.classList.add('active');
    NavBar.classList.add('show');
    floatingAnimation.classList.add('zoomedIn');
}

function Open_Feedback_Links() {
    Hide_All_Shimers();
    backgroundImage.classList.add('feedback');
        // Setup for navigation bar
        backgroundImage.classList.remove('homework');
        backgroundImage.classList.remove('gallery');
        backgroundImage.classList.remove('socials');
    FeedbackLinks.classList.add('active');
    NavBar.classList.add('show');
    floatingAnimation.classList.add('zoomedIn');
}

function Open_Socials_Links() {
    Hide_All_Shimers();
    backgroundImage.classList.add('socials');
        // Setup for navigation bar
        backgroundImage.classList.remove('homework');
        backgroundImage.classList.remove('feedback');
        backgroundImage.classList.remove('gallery');
    SocialsLinks.classList.add('active');
    NavBar.classList.add('show');
    floatingAnimation.classList.add('zoomedIn');
}

//Close all the opened Shimers and Links

function Show_All_Shimers(){
    ClickGallery.classList.remove('hide');
    ClickHomework.classList.remove('hide');
    ClickFeedback.classList.remove('hide');
    ClickSocials.classList.remove('hide');
    Shimer1.classList.remove('hide');
    Shimer2.classList.remove('hide');
    Shimer3.classList.remove('hide');
    Shimer4.classList.remove('hide');
        // Setup for Close_All
        backgroundImage.classList.remove('homework');
        backgroundImage.classList.remove('feedback');
        backgroundImage.classList.remove('gallery');
        backgroundImage.classList.remove('socials');
}

MainPageButton.addEventListener('click', Close_All);

function Close_All() {
    backgroundImage.classList.add('main');
    GalleryLinks.classList.remove('active');
    HomeworkLinks.classList.remove('active');
    FeedbackLinks.classList.remove('active');
    SocialsLinks.classList.remove('active');
    NavBar.classList.remove('show');
    Show_All_Shimers();
    floatingAnimation.classList.remove('zoomedIn');
    floatingAnimation.classList.remove('hide');
    // For gifs gallery
    GifsGallery.classList.remove('open');
    overflowControl.classList.remove('show');
    backgroundImage.classList.remove('gifs');
    document.documentElement.scrollTop = 0;
}

// Navigation Buttons (LandingPage button added above)

GalleryButton.addEventListener('click', NavOpen_Gallery);
HomeworkButton.addEventListener('click', NavOpen_Homework);
FeedbackButton.addEventListener('click', NavOpen_Feedback);
SocialsButton.addEventListener('click', NavOpen_Socials);

function NavOpen_Gallery() {
    if (GalleryLinks.classList.contains('active')) {
        Close_All();
    } else {
        Close_All();
        Open_Gallery_Links();
    }
}

function NavOpen_Homework() {
    if (HomeworkLinks.classList.contains('active')) {
        Close_All();
    } else {
        Close_All();
        Open_Homework_Links();
    }
}

function NavOpen_Feedback() {
    if (FeedbackLinks.classList.contains('active')) {
        Close_All();
    } else {
        Close_All();
        Open_Feedback_Links();
    }
}

function NavOpen_Socials() {
    if (SocialsLinks.classList.contains('active')) {
        Close_All();
    } else {
        Close_All();
        Open_Socials_Links();
    }
}

// Open gifs gallery 

ClickGifs.addEventListener('click', Open_Gifs_Gallery);

function Open_Gifs_Gallery() {
    Close_All();
    // backgroundImage.classList.remove('homework');
    // // backgroundImage.classList.add('gifs');   // REMOVE IN CSS
    // HomeworkLinks.classList.remove('active');
    GifsGallery.classList.add('open');
    overflowControl.classList.add('show');
    floatingAnimation.classList.add('hide');
    NavBar.classList.add('show');
}

// function Close_All() {
//     floatingAnimation.classList.remove('zoomedIn');
//     ClickGallery.classList.remove('hide');
//     ClickHomework.classList.remove('hide');

//     if (HomeworkLinks.classList.contains('active')) {
//         Open_Homework_Links();
//     };

//     if (GalleryLinks.classList.contains('active')) {
//         Open_Gallery_Links();
//     };
    
// }

// MainPageButton.addEventListener('click', Close_All);




// ClickGallery.addEventListener('click', Open_Gallery_Links);

// function Open_Gallery_Links() {
//     GalleryLinks.classList.toggle('active');
//     backgroundImage.classList.toggle('gallery');
//     ClickGallery.classList.add('hide');
//     ClickHomework.classList.add('hide');
//     NavBar.classList.toggle('show');
//     Shimer1.classList.toggle('hide');
//     Shimer2.classList.toggle('hide');

//     if (GalleryLinks.classList.contains('active')) {
//         floatingAnimation.classList.add('zoomedIn');
//     } else {
//         ClickGallery.classList.remove('hide');
//         ClickHomework.classList.remove('hide');
//     }
// }

// GalleryButton.addEventListener('click', function() {
//     Open_Gallery_Links();
//     ClickHomework.classList.add('hide');
//     ClickGallery.classList.add('hide');
    
//     if(HomeworkLinks.classList.contains('active')){
//         Open_Homework_Links();
//     } else if(GifsGallery.classList.contains('open')) {
//         Open_Homework_Links();
//         // ClickHomework.classList.toggle('hide'); //CHANG the toggle for home_links to remove/add
//         Open_Gifs_Gallery();
//     } else {
//         floatingAnimation.classList.remove('zoomedIn');
//     }
// });



// ClickHomework.addEventListener('click', Open_Homework_Links);

// function Open_Homework_Links() {
//     HomeworkLinks.classList.toggle('active');
//     backgroundImage.classList.toggle('homework');
//     ClickHomework.classList.add('hide');
//     ClickGallery.classList.add('hide');
//     NavBar.classList.toggle('show');
//     Shimer1.classList.toggle('hide');
//     Shimer2.classList.toggle('hide');

//     if (HomeworkLinks.classList.contains('active')) {
//         floatingAnimation.classList.add('zoomedIn');
//     } else {
//         ClickHomework.classList.remove('hide');
//         ClickGallery.classList.remove('hide');
//     }
// }

// HomeworkButton.addEventListener('click', function() {
//     Open_Homework_Links();
//     ClickHomework.classList.add('hide');
//     ClickGallery.classList.add('hide');

//     if(GalleryLinks.classList.contains('active')){
//         Open_Gallery_Links();
//     } else if(GifsGallery.classList.contains('open')) {
//         Open_Homework_Links();
//         // ClickGallery.classList.toggle('hide'); //CHANG the toggle for gal_links to remove/add
//         Open_Gifs_Gallery();
//     } else {
//         floatingAnimation.classList.remove('zoomedIn');
//     }
// });

// ClickGifs.addEventListener('click', Open_Gifs_Gallery);

// function Open_Gifs_Gallery() {
//     GifsGallery.classList.toggle('open');
//     HomeworkLinks.classList.toggle('active');
//     backgroundImage.classList.toggle('hide');
//     overflowControl.classList.toggle('show');
//     floatingAnimation.classList.toggle('hide');
// }

// Animation faster if zoomed in