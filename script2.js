let currentIndex = 0;

const images = document.querySelectorAll('.gallery img');

function openImage(img){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=img.src;

currentIndex=Array.from(images).indexOf(img);
}

function closeImage(){

document.getElementById("lightbox").style.display="none";
}

function nextImage(){

currentIndex++;

if(currentIndex>=images.length){
currentIndex=0;
}

document.getElementById("lightbox-img").src=
images[currentIndex].src;
}

function prevImage(){

currentIndex--;

if(currentIndex<0){
currentIndex=images.length-1;
}

document.getElementById("lightbox-img").src=
images[currentIndex].src;
}

function filterImages(category){

let allImages=document.querySelectorAll('.gallery img');

allImages.forEach(img=>{

if(category==="all"){

img.style.display="block";
}

else if(img.classList.contains(category)){

img.style.display="block";
}

else{

img.style.display="none";
}

});

}
