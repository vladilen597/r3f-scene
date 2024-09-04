import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Cloth = () => {
  const clothRef = useRef<THREE.Mesh>(null)
  const clothGeometryRef = useRef<THREE.PlaneGeometry>(null)

  useEffect(() => {
    if (clothGeometryRef.current) {
      const geometry = clothGeometryRef.current
      geometry.dynamic = true
    }
  }, [])

  useFrame(() => {
    if (clothGeometryRef.current) {
      const geometry = clothGeometryRef.current
      const time = performance.now() * 0.001
      const windStrength = Math.cos(time / 7) * 20 + 40
      const windForce = new THREE.Vector3(
        Math.sin(time / 4),
        Math.cos(time / 3),
        Math.sin(time / 2)
      )
        .normalize()
        .multiplyScalar(windStrength)

      const position = geometry.attributes.position
      for (let i = 0; i < position.count; i++) {
        const y = position.getY(i)
        const windEffect = windForce.y * Math.sin(i / 5 + (time + i) / 7)
        position.setY(i, y + windEffect * 0.1)
      }
      position.needsUpdate = true
    }
  })

  return (
    <mesh ref={clothRef}>
      <planeGeometry ref={clothGeometryRef} args={[10, 10, 20, 20]} />
      <meshBasicMaterial color='blue' side={THREE.DoubleSide} wireframe />
    </mesh>
  )
}

export default Cloth
