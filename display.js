const GIF1_link = document.getElementById('GIF1_img');
const GIF2_link = document.getElementById('GIF2_img');
const GIF3_link = document.getElementById('GIF3_img');
const GIF4_link = document.getElementById('GIF4_img');
const GIF5_link = document.getElementById('GIF5_img');
const GIF6_link = document.getElementById('GIF6_img');

const GIF1_GIF = document.getElementById('GIF1_gif');
const GIF2_GIF = document.getElementById('GIF2_gif');
const GIF3_GIF = document.getElementById('GIF3_gif');
const GIF4_GIF = document.getElementById('GIF4_gif');
const GIF5_GIF = document.getElementById('GIF5_gif');
const GIF6_GIF = document.getElementById('GIF6_gif');

function Open_Gif_1() {
    GIF1_GIF.classList.toggle('active');
}

GIF1_link.addEventListener('click', Open_Gif_1);
GIF1_GIF.addEventListener('click', Open_Gif_1);

function Open_Gif_2() {
    GIF2_GIF.classList.toggle('active');
}

GIF2_link.addEventListener('click', Open_Gif_2);
GIF2_GIF.addEventListener('click', Open_Gif_2);

function Open_Gif_3() {
    GIF3_GIF.classList.toggle('active');
}

GIF3_link.addEventListener('click', Open_Gif_3);
GIF3_GIF.addEventListener('click', Open_Gif_3);

function Open_Gif_4() {
    GIF4_GIF.classList.toggle('active');
}

GIF4_link.addEventListener('click', Open_Gif_4);
GIF4_GIF.addEventListener('click', Open_Gif_4);

function Open_Gif_5() {
    GIF5_GIF.classList.toggle('active');
}

GIF5_link.addEventListener('click', Open_Gif_5);
GIF5_GIF.addEventListener('click', Open_Gif_5);


function Open_Gif_6() {
    GIF6_GIF.classList.toggle('active');
}

GIF6_link.addEventListener('click', Open_Gif_6);
GIF6_GIF.addEventListener('click', Open_Gif_6);