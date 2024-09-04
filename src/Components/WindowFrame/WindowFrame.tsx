import { Base, Geometry, Subtraction } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { RoundedBoxGeometry } from 'three-stdlib'
import { RoundedBox } from '@react-three/drei'

extend({ RoundedBoxGeometry })

const WindowFrame = () => {
  const woodTexture = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Color.jpg'
  )
  const woodTextureRoughness = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Roughness.jpg'
  )

  return (
    <mesh receiveShadow castShadow>
      <Geometry>
        <Base position={[0, 4.5, -3.3]}>
          <boxGeometry args={[8, 9, 1]} />
        </Base>
        <Subtraction position={[0, 4.2, -3]}>
          <boxGeometry args={[7.8, 8, 2]} />
        </Subtraction>
      </Geometry>
      <meshStandardMaterial
        color='#666'
        map={woodTexture}
        roughnessMap={woodTextureRoughness}
      />
      <RoundedBox
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 0.5, -3]}
        args={[1.5, 0.2, 8.5]}
      >
        <meshStandardMaterial
          color='#666'
          map={woodTexture}
          roughnessMap={woodTextureRoughness}
        />
      </RoundedBox>
    </mesh>
  )
}

export default WindowFrame
