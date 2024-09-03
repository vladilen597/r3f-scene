import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

class Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  size: number
  color: THREE.Color

  constructor() {
    this.position = new THREE.Vector3(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    )
    this.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.1,
      (Math.random() - 0.5) * 0.1,
      (Math.random() - 0.5) * 0.1
    )
    this.size = Math.random() * 0.5 + 0.1
    this.color = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`)
  }

  update() {
    this.position.add(this.velocity)
    if (this.size > 0.01) this.size -= 0.01
  }
}

const FireParticles: React.FC = () => {
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 100; i++) {
      temp.push(new Particle())
    }
    return temp
  }, [])

  useFrame(() => {
    particles.forEach((particle) => {
      particle.update()
    })
  })

  return (
    <>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[particle.size, 16, 16]} />
          <meshBasicMaterial color={particle.color} />
        </mesh>
      ))}
    </>
  )
}

const App: React.FC = () => {
  return <FireParticles />
}

export default App
