'use strict';

const navBlock = document.querySelector('#nav');
const menuBtn = document.querySelector('#menu_btn');
const galleryBtn = document.querySelector('#gallery_btn');

menuBtn.addEventListener('click', () => {
  navBlock.classList.toggle('nav_show');
  menuBtn.classList.toggle('change_icon');
});

galleryBtn.addEventListener('click', () => {
  window.location.href = 'https://ruslanapodshyvalova.github.io/layout_miami/';
});
