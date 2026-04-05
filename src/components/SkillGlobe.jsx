import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const skillsData = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
];

const getGlobeDots = (numPoints, radius) => {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(-1 + (2 * i) / numPoints);
    const theta = Math.sqrt(numPoints * Math.PI) * phi;
    points.push(
      new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      )
    );
  }
  return points;
};

const getSkillPoints = (numPoints, radius) => {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < numPoints; i++) {
    const y = 1 - (i / (numPoints - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * radiusAtY * radius,
        y * radius,
        Math.sin(theta) * radiusAtY * radius
      )
    );
  }
  return points;
};

const GlobeWithSkills = () => {
  const groupRef = useRef();

  const globeDots = useMemo(() => getGlobeDots(1000, 4.5), []);
  const skillPositions = useMemo(() => getSkillPoints(skillsData.length, 5), []);

  const dotGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(globeDots.length * 3);
    globeDots.forEach((point, i) => {
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
    });
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [globeDots]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={dotGeometry}>
        <pointsMaterial
          size={0.07}           
          color="#60a5fa"
          transparent
          opacity={1}
          toneMapped={false}
          depthWrite={false}   
        />
      </points>

      {skillsData.map((skill, index) => (
        <Html
          key={index}
          position={skillPositions[index]}
          center
          distanceFactor={10}
          zIndexRange={[100, 0]}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              cursor: 'pointer',
            }}
          >
            <div style={{ backgroundColor: '#f8fafc', padding: '4px', borderRadius: '50%', display: 'flex' }}>
              <img src={skill.icon} alt={skill.name} style={{ width: '22px', height: '22px' }} />
            </div>
            <span style={{ color: '#f8fafc', fontWeight: 'bold', fontSize: '11px', textShadow: '0 0 5px #000' }}>
              {skill.name}
            </span>
          </div>
        </Html>
      ))}
    </group>
  );
};

export default function SkillGlobe() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <GlobeWithSkills />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}