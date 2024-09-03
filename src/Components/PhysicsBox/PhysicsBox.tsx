import { useBox } from '@react-three/cannon'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const PhysicsBox = () => {
  const woodTexture = new THREE.TextureLoader().load('wood.jpg')

  const [ref] = useBox(() => ({
    mass: 1,
    args: [1, 1, 1],
    position: [0, 3, 0],
  }))

  return (
    <RoundedBox
      ref={ref as React.MutableRefObject<THREE.Mesh>}
      castShadow
      receiveShadow
      args={[1, 1, 1]}
      position={[0, 3, 0]}
    >
      <meshStandardMaterial map={woodTexture} />
    </RoundedBox>
  )
}

export default PhysicsBox
