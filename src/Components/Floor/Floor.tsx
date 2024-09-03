import { Plane } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const Floor = () => {
  const floorTexture = useLoader(
    THREE.TextureLoader,
    '/floor/WoodFloor054_1K-PNG_Color.png'
  )
  const floorTextureRoughness = useLoader(
    THREE.TextureLoader,
    '/floor/WoodFloor054_1K-PNG_Roughness.png'
  )

  floorTexture.repeat.set(4, 1)
  floorTexture.wrapS = THREE.RepeatWrapping

  return (
    <Plane
      args={[40, 10]}
      position={[0, -5.5, 2]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        map={floorTexture}
        roughnessMap={floorTextureRoughness}
        color='grey'
      />
    </Plane>
  )
}

export default Floor
