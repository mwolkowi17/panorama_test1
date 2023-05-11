import * as THREE from 'three';
import { create_icon } from './navigation_icon';
import { create_info_icon } from './info_icon';
import { invoDiv } from './info_div';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { scene } from './client';
import { panorama_form } from './panorama_create';


export const panorama1 = new panorama_form('./test7.png').main;

export const navicon1 = new create_icon(-0, -18, -30,'nav1');


setTimeout(() => {
    panorama1.add(navicon1.main);
  }, 1000)

navicon1.element.addEventListener('pointerdown', () => {
    panorama1.remove(navicon1.main)
    scene.remove(panorama1);
    //navicon1.element.style.visibility = 'hidden';
    scene.add(panorama2);
    panorama2.add(navicon2.main);
    panorama2.add(navicon3.main);
    navicon1.reset_size();
    panorama1.remove(infoicon1.main);

})

export  const infoicon1 = new create_info_icon(-30, 0, 30,'imageInfo1')

// setTimeout(() => {
//     panorama1.add(infoicon1.main);
//   }, 1000)


infoicon1.element.addEventListener('pointerdown',()=>{
console.log('pointer clicked');
const infodiv1 = new invoDiv();
document.body.appendChild(infodiv1.main)
infodiv1.main.style.visibility = 'visible';
infoicon1.element.style.visibility='hidden';

infodiv1.offButton.addEventListener("click", function () {

  infodiv1.main.style.visibility = 'hidden';
  infoicon1.element.style.visibility='visible';
})

})



