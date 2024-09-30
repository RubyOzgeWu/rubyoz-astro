import * as THREE from 'three';

export function initParticleEffect(container) {
  // Set up scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Create particle geometry
  const particleCount = 1000;
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 2 });

  const particles = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    particles[i] = (Math.random() - 0.5) * 10;
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));

  const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);

  // Set camera position
  camera.position.z = 5;

  // Cursor interaction
  const cursor = { x: 0, y: 0 };
  window.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / window.innerWidth) * 2 - 1;
    cursor.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  // Animate particles
  const animate = () => {
    requestAnimationFrame(animate);

    particleSystem.rotation.y += 0.002;

    // Cursor effect
    particleSystem.rotation.x = cursor.y * 0.5;
    particleSystem.rotation.z = cursor.x * 0.5;

    renderer.render(scene, camera);
  };

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}
