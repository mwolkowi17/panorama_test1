import * as THREE from 'three';
import { create_icon } from './navigation_icon';
import { create_icon_left } from './navigation_icon_left';
import { scene } from './client';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { panorama_form } from './panorama_create';

// const geometry = new THREE.SphereGeometry(500, 60, 40);
// // invert the geometry on the x-axis so that all of the faces point inward
// geometry.scale(- 1, 1, 1);

// const texture = new THREE.TextureLoader().load('./kawiarnia4.png');
// const material = new THREE.MeshBasicMaterial({ map: texture });

export const panorama3 = new panorama_form('./test8_next_b.png').main;

export const navicon4 = new create_icon_left(20,-18,0,'nav4');

panorama3.add(navicon4.main)

navicon4.element.addEventListener('pointerdown', () => {
    panorama3.remove(navicon4.main);
    scene.remove(panorama3);
    //navicon4.element.style.visibility = 'hidden';
    scene.add(panorama2);
    panorama2.add(navicon2.main);
    panorama2.add(navicon3.main);
    navicon4.reset_size();
})

