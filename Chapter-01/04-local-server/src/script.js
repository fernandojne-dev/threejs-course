import { Scene, BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, WebGLRenderer } from 'three';

//Scene
const scene = new Scene();

//Red cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0xff0000 });
const mesh = new Mesh(geometry, material);
scene.add(mesh);

//Sizes
const sizes = {
  width: 800,
  height: 600,
}

//Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Renderer
const canvas = document.querySelector('.webgl');
const renderer = new WebGLRenderer({
  canvas,
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);