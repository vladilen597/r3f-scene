import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

interface GlassMaterialProps {
  position: [number, number, number]
}

const GlassMaterial = ({ position = [0, 0, 0] }: GlassMaterialProps) => {
  const glassRoughness = useLoader(THREE.TextureLoader, '/glass-roughness.jpg')
  // Create a glass material with enhanced shine
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x88ccee,
    metalness: 0.1,
    roughness: 0.1,
    transmission: 1, // Make the material transparent
    opacity: 0.5, // Set the opacity
    transparent: true,
    reflectivity: 1, // Reflectivity of the material
    clearcoat: 1, // Adds a clear coat layer
    clearcoatRoughness: 0,
    normalMap: glassRoughness,
  })

  // Create a geometry for the glass object
  const geometry = new THREE.BoxGeometry(0.7, 1.5, 0.7)

  // Create a mesh with the geometry and the glass material
  const glassMesh = new THREE.Mesh(geometry, glassMaterial)

  return <primitive object={glassMesh} position={position} />
}

export default GlassMaterial
