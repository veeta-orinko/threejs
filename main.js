import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// target the HTML embed 
const canvas = document.querySelector('canvas.webgl')

// create a scene
const scene = new THREE.Scene();

// create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
scene.add(camera)


// lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, );
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera)

// load the model using GLTFLoader
const gltfLoader = new GLTFLoader();
gltfLoader.load('dist/assets/models/melodydefenestratorwhite.glb', function (gltf) {
  // add the model to the scene
  scene.add(gltf.scene);
});

function animate() {
  requestAnimationFrame(animate);

  // rotate the model
  scene.traverse((object) => {
    if (object.isMesh) {
      object.rotation.y += 0.01;
    }
  });

  // render the scene
  renderer.render(scene, camera);
}

animate();