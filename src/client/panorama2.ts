import * as THREE from 'three';
import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama1,navicon1 } from './panorama1';
import { panorama3,navicon4 } from './panorama3';
import { panorama_form } from './panorama_create';
import { infoicon1 } from './panorama1';



//panorama image

// const geometry = new THREE.SphereGeometry(500, 60, 40);
// // invert the geometry on the x-axis so that all of the faces point inward
// geometry.scale(- 1, 1, 1);

// const texture = new THREE.TextureLoader().load('./kawiarnia3.png');
// const material = new THREE.MeshBasicMaterial({ map: texture });

export const panorama2 = new panorama_form('./test7_next.png').main

export const navicon2 = new create_icon(20, -13, -30,'nav2');
export const navicon3 = new create_icon(-7, -13, 40,'nav3');

panorama2.add(navicon2.main);
panorama2.add(navicon3.main);

navicon2.element.addEventListener('pointerdown', () => {
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    scene.remove(panorama2);
    //navicon2.element.style.visibility = 'hidden';
    //navicon3.element.style.visibility = 'hidden';
    scene.add(panorama1);
    panorama1.add(navicon1.main)
    panorama1.add(infoicon1.main)
    navicon2.reset_size();
    navicon3.reset_size();

})

navicon3.element.addEventListener('pointerdown', () => {
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    scene.remove(panorama2);
    //navicon2.element.style.visibility = 'hidden';
    //navicon3.element.style.visibility = 'hidden';
    scene.add(panorama3);
    panorama3.add(navicon4.main);
    navicon2.reset_size();
    navicon3.reset_size();

})

