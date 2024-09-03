import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

class Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  size: number
  color: THREE.Color

  constructor() {
    this.position = new THREE.Vector3(
      (Math.random() + 0.1) * 0.63,
      (Math.random() - 0.5) * 1.3,
      (Math.random() + 0.1) * 0.6
    )
    this.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.0005, // Reduced velocity
      (Math.random() - 0.5) * 0.0005, // Reduced velocity
      (Math.random() - 0.5) * 0.0005 // Reduced velocity
    )
    this.size = Math.random() * 0.01
    this.color = new THREE.Color(`#eabc3a`)
  }

  update() {
    this.position.add(this.velocity)

    // Boundary conditions to bounce back on y and z axes
    if (this.position.y < -0.5 || this.position.y > 0.7) {
      this.velocity.y = -this.velocity.y
    }
    if (this.position.z < 0.05 || this.position.z > 0.2) {
      this.velocity.z = -this.velocity.z
    }

    if (this.position.x < 0.05 || this.position.x > 0.2) {
      this.velocity.x = -this.velocity.x
    }
  }
}

const FireParticles: React.FC = () => {
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 300; i++) {
      temp.push(new Particle())
    }
    return temp
  }, [])

  const particlesRef = useRef<THREE.Mesh[]>([])

  useFrame(() => {
    particles.forEach((particle, index) => {
      particle.update()
      if (particlesRef.current[index]) {
        particlesRef.current[index].position.copy(particle.position)
      }
    })
  })

  return (
    <>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          ref={(el) => (particlesRef.current[index] = el!)}
          position={particle.position}
        >
          <sphereGeometry args={[particle.size, 16, 4]} />
          <meshBasicMaterial color={particle.color} />
        </mesh>
      ))}
    </>
  )
}

export default FireParticles
