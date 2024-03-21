const GIF1_link = document.getElementById('GIF1');
const GIF2_link = document.getElementById('GIF2');
const GIF3_link = document.getElementById('GIF3');
const GIF4_link = document.getElementById('GIF4');
const GIF5_link = document.getElementById('GIF5');

// const filter = document.getElementById('filter');

GIF1_link.addEventListener('click', function() {
    GIF1_link.classList.toggle('active');
    // filter.classList.toggle('blur');
});

GIF2_link.addEventListener('click', function() {
    GIF2_link.classList.toggle('active');
});

GIF3_link.addEventListener('click', function() {
    GIF3_link.classList.toggle('active');
});

GIF4_link.addEventListener('click', function() {
    GIF4_link.classList.toggle('active');
});

GIF5_link.addEventListener('click', function() {
    GIF5_link.classList.toggle('active');
});