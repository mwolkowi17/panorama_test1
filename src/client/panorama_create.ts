import * as THREE from 'three';


//klasa tworząca mesh panoramy
export class panorama_form {

    main:THREE.Mesh

    constructor(graphic_adress: string) {

        const geometry = new THREE.SphereGeometry(500, 60, 40);
        // invert the geometry on the x-axis so that all of the faces point inward
        geometry.scale(- 1, 1, 1);
        geometry.rotateY(-Math.PI/2)

        const texture = new THREE.TextureLoader().load(graphic_adress);
        const material = new THREE.MeshBasicMaterial({ map: texture });

        this.main = new THREE.Mesh(geometry, material);


    }
}