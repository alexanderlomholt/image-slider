const images = ['image1.jpeg','image2.jpeg','image3.jpeg','image4.jpeg','image5.jpeg'];
const startPosition = document.querySelector('.img-box');
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const bullets = document.querySelectorAll('.bullet');
let counter = 0;

// initialize first image
startPosition.style.backgroundImage = `url('images/${images[0]}')`;

// moving left
let imageBackwards = () => {
  const imgBox = document.querySelector('.img-box');
  if (counter === 0) {
    imgBox.style.backgroundImage = `url('images/${images[4]}')`;
  } else {
    imgBox.style.backgroundImage = `url('images/${images[counter - 1]}')`;
  }
}

let bulletBackwards = () => {
  const bullet = document.querySelector('.active');
  bullet.classList.remove("active");
  if (counter > 0) {
    bullet.previousElementSibling.classList.add('active');
    counter -= 1;
  } else {
    document.querySelector('.bullet:last-child').classList.add('active');
    counter = 4;
  }
}

leftArrow.addEventListener('click', (e) => {
  imageBackwards();
  bulletBackwards();
});

// moving right
let imageForward = () => {
  const imgBox = document.querySelector('.img-box');
  if (counter === 4) {
    imgBox.style.backgroundImage = `url('images/${images[0]}')`;
  } else {
    imgBox.style.backgroundImage = `url('images/${images[counter + 1]}')`;
  }
}

let bulletForward = () => {
  const bullet = document.querySelector('.active');
  bullet.classList.remove("active");
  if (counter < 4) {
    bullet.nextElementSibling.classList.add('active');
    counter += 1;
  } else {
    document.querySelector('.bullet:first-child').classList.add('active');
    counter = 0;
  }
}

rightArrow.addEventListener('click', (e) => {
  imageForward();
  bulletForward();
});

// bullet events
bullets.forEach((i) => {
  i.addEventListener('click', (e) => {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`#${i.id}`).classList.add('active');
    let index = Number(i.id[1]);
    document.querySelector('.img-box').style.backgroundImage = `url('images/${images[index]}')`;
    counter = index;
  });
});
