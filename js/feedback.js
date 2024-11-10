'use strict'

document.getElementById('button-mail').addEventListener(
    'click',
    () => document.querySelector('.forms').classList.remove('remove-element')
);

document.querySelector('.forms_feedback__button-close').addEventListener(
    'click',
     () => document.querySelector('.forms').classList.add('remove-element')
);