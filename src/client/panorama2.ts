import * as THREE from 'three';
import { create_icon } from './navigation_icon';
import { create_icon_left } from './navigation_icon_left';
import { scene } from './client';
import { panorama1, navicon1 } from './panorama1';
import { panorama3, navicon4, infoicon4 } from './panorama3';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { invoDiv } from './info_div';



export const panorama2 = new panorama_form('./test8_next.png').main

export const navicon2 = new create_icon_left(-35, 4, -3, 'nav2');
export const navicon3 = new create_icon(0, -13, 40, 'nav3');

panorama2.add(navicon2.main);
panorama2.add(navicon3.main);

navicon2.element.addEventListener('pointerdown', () => {
    console.log('navicon2')
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(infoicon2.main)
    panorama2.remove(infoicon3.main)
    scene.remove(panorama2);
    //navicon2.element.style.visibility = 'hidden';
    //navicon3.element.style.visibility = 'hidden';
    scene.add(panorama3);
    panorama3.add(navicon4.main);
    panorama3.add(infoicon4.main)
    navicon2.reset_size();
    navicon3.reset_size();
})

navicon3.element.addEventListener('pointerdown', () => {
    console.log("navicon3")
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(infoicon2.main)
    panorama2.remove(infoicon3.main)
    scene.remove(panorama2);
    //navicon2.element.style.visibility = 'hidden';
    //navicon3.element.style.visibility = 'hidden';
    scene.add(panorama1);
    panorama1.add(navicon1.main)
    //navicon1.element.style.visibility = 'visible';
    //panorama1.add(infoicon1.main)

    navicon2.reset_size();
    navicon3.reset_size();


})

export const infoicon2 = new create_info_icon(-8, 15, -10, 'imageInfo1')

panorama2.add(infoicon2.main)

infoicon2.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    const infodiv2 = new invoDiv('./picture1.png');
    document.body.appendChild(infodiv2.main)
    infodiv2.main.style.visibility = 'visible';
    infoicon2.element.style.visibility = 'hidden';


    infodiv2.offButton.addEventListener("click", function () {

        infodiv2.main.style.visibility = 'hidden';
        infoicon2.element.style.visibility = 'visible';
    })

})

export const infoicon3 = new create_info_icon(38, 17, -10, 'imageInfo2')

panorama2.add(infoicon3.main)

infoicon3.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    const infodiv3 = new invoDiv('./picture3.png');
    document.body.appendChild(infodiv3.main)
    infodiv3.main.style.visibility = 'visible';
    infoicon3.element.style.visibility = 'hidden';


    infodiv3.offButton.addEventListener("click", function () {

        infodiv3.main.style.visibility = 'hidden';
        infoicon3.element.style.visibility = 'visible';
    })

})