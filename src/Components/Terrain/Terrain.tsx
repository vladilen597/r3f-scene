import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'

const Terrain = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  const planeGeometry = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(500, 100, 100, 100)
    geometry.rotateX(-Math.PI / 2)

    // Manipulate vertices to create a rounder bulge in the center
    const vertices = geometry.attributes.position.array
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i]
      const z = vertices[i + 2]
      const distance = Math.sqrt(x * x + z * z)
      const maxDistance = 150
      const height =
        Math.exp((-distance * distance) / (1 * maxDistance * maxDistance)) * 20
      vertices[i + 1] = height
    }

    geometry.attributes.position.needsUpdate = true
    geometry.computeVertexNormals()

    return geometry
  }, [])

  return (
    <group>
      <mesh
        ref={meshRef}
        rotation={[Math.PI / 10, 0, 0]}
        position={[100, -10, -250]}
        geometry={planeGeometry}
      >
        <meshStandardMaterial color='green' />
      </mesh>
      <Plane
        args={[500, 500]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[100, -20, -250]}
        receiveShadow
      >
        <meshStandardMaterial color='green' />
      </Plane>
    </group>
  )
}

export default Terrain
