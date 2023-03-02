import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader()


// load resource
loader.load ( 'https://www.vectary.com/p/1wVE8q2T8634WlZZImboPH', function ( gltf )
{
 // [...]
});


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
scene.add(camera)

// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshNormalMaterial()
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Renderer
const renderer = new THREE.WebGL1Renderer({
  canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)



// Function

function animate() {
  requestAnimationFrame ( animate )
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01

  renderer.render(scene, camera)
}
animate()