import { Subtraction, Base, Geometry, Addition } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const Wall = () => {
  const wallTexture = useLoader(THREE.TextureLoader, '/wall/wallpaper.jpg')
  wallTexture.repeat.set(2, 1)
  wallTexture.wrapS = THREE.RepeatWrapping
  return (
    <mesh>
      <Geometry>
        <Base position={[0, -0.5, -3.2]}>
          <boxGeometry args={[40, 20, 1]} />
        </Base>
        <Subtraction position={[0, 4, -3.2]}>
          <boxGeometry args={[8, 6, 2]} />
        </Subtraction>
      </Geometry>
      <meshStandardMaterial map={wallTexture} />
    </mesh>
  )
}

export default Wall
