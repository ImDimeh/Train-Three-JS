import * as THREE from 'three';


const scene = new THREE.Scene();

// création de l'objet 3D
const CubeGeometry = new THREE.BoxGeometry(20, 10, 1);
// Texturing de l'objet 3D
const CubeMaterial = new THREE.MeshBasicMaterial({ color: 0x57CED7 });

// création du mesh ( fusion de la texture et de la géométrie )
const cubeMesh = new THREE.Mesh(
  CubeGeometry,
  CubeMaterial
)

// ajout de l'objet 3D à la scène
scene.add(cubeMesh);