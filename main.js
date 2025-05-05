
  const images = [
    'https://queen-of-motorsport.com/wp-content/uploads/2024/07/verstappen-hamilton-fia-crash-race-hungary.jpg',
    'https://ewscripps.brightspotcdn.com/dims4/default/ba55247/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F37%2F80%2F0e45764147f39e1e02812fe6f1f5%2Fewscripps-brightspotcdn.jpg',
    'https://cdn.ferrari.com/cms/network/media/img/resize/6557711689a200002375f810-2023-ferrari-las-vegas-gp-free-practice-report-desk'
  ];

let current = 0;
const imgElement = document.getElementById('gallery-image');

function showImage(index) {
  imgElement.src = images[index];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

document.querySelector('.arrow.left').onclick = () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
};

document.querySelector('.arrow.right').onclick = () => {
  nextImage();
};

setInterval(nextImage, 6000);
