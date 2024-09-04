import { Subtraction, Base, Geometry } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import WindowFrame from '../WindowFrame/WindowFrame'

const Wall = () => {
  const wallTexture = useLoader(THREE.TextureLoader, '/wall/wallpaper.jpg')
  wallTexture.repeat.set(2, 1.5)
  wallTexture.wrapS = THREE.RepeatWrapping
  wallTexture.wrapT = THREE.RepeatWrapping
  return (
    <mesh receiveShadow castShadow>
      <Geometry>
        <Base position={[0, -0.5, -3.2]}>
          <boxGeometry args={[40, 30, 1]} />
        </Base>
        <Subtraction position={[0, 4.5, -3.2]}>
          <boxGeometry args={[8, 8, 2]} />
        </Subtraction>
      </Geometry>
      <WindowFrame />
      <meshStandardMaterial map={wallTexture} />
    </mesh>
  )
}

export default Wall
