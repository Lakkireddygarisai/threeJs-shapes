import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 20;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Materials
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    // Geometries
    const geometries = [
      { name: 'Sphere', geometry: new THREE.SphereGeometry(1, 32, 32) },
      { name: 'Cylinder', geometry: new THREE.CylinderGeometry(1, 1, 2, 32) },
      { name: 'Plane', geometry: new THREE.PlaneGeometry(2, 2, 32, 32) },
      { name: 'Torus', geometry: new THREE.TorusGeometry(1, 0.4, 16, 100) },
      { name: 'Dodecahedron', geometry: new THREE.DodecahedronGeometry(1) },
      { name: 'Icosahedron', geometry: new THREE.IcosahedronGeometry(1) },
      { name: 'Octahedron', geometry: new THREE.OctahedronGeometry(1) },
      { name: 'Tetrahedron', geometry: new THREE.TetrahedronGeometry(1) },
      { name: 'Ring', geometry: new THREE.RingGeometry(1, 1.5, 32) },
      { name: 'Circle', geometry: new THREE.CircleGeometry(1, 32) },
      { name: 'Box', geometry: new THREE.BoxGeometry() },
      { name: 'Cone', geometry: new THREE.ConeGeometry(1, 2, 32) },
    ];

    // Positions for the geometries
    const positions = [
      { x: -25, y: 5, z: 0 },
      { x: -15, y: 5, z: 0 },
      { x: -5, y:5, z: 0 },
      { x: 5, y: 5, z: 0 },
      { x: 15, y: 5, z: 0 },
      { x: 25, y: 5, z: 0 },
      { x: -25, y: -5, z: 0 },
      { x: -15, y: -5, z: 0 },
      { x: -5, y: -5, z: 0 },
      { x: 5, y: -5, z: 0 },
      { x: 15, y: -5, z: 0 },
      { x: 25, y: -5, z: 0 }
    ];

    // Function to create text sprite
    const createTextSprite = (message) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = 'Bold 30px Arial'; // Increase font size
      context.fillStyle = 'rgba(255,255,255,1)';
      context.fillText(message, 0, 30); // Adjust text position

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;

      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(10, 5, 1); // Scale the sprite to desired size
      return sprite;
    };

    // Array to store mesh objects for animation
    const meshObjects = [];

    // Add geometries and labels to the scene
    geometries.forEach((item, index) => {
      const mesh = new THREE.Mesh(item.geometry, material);
      mesh.position.set(positions[index].x, positions[index].y, positions[index].z);
      mesh.scale.set(3, 3, 3); // Scale the mesh to make it larger
      scene.add(mesh);
      meshObjects.push(mesh);

      const label = createTextSprite(item.name);
      label.position.set(positions[index].x, positions[index].y - 5, positions[index].z); // Position label below the object
      scene.add(label);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      meshObjects.forEach(mesh => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeScene;
