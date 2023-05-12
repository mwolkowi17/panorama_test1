import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import {panorama1} from './panorama1'

//scena
export const scene = new THREE.Scene()

//camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 2

//renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//label_renderer
const labelRenderer = new CSS3DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild( labelRenderer.domElement );

//controls
const controls = new OrbitControls(camera, labelRenderer.domElement)
controls.enableDamping=true;
controls.enableZoom=false;

//dodawanie panoramy
scene.add(panorama1)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

//animate
function animate() {
    requestAnimationFrame(animate)

    render()
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    controls.update();
}

function render() {
    renderer.render(scene, camera)
}

animate()