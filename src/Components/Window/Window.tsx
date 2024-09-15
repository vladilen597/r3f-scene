import { Addition, Base, Geometry, Subtraction } from '@react-three/csg'
import { RoundedBoxGeometry } from 'three-stdlib'
import { RoundedBox } from '@react-three/drei'
import { extend, useLoader } from '@react-three/fiber'
import GlassNoTexture from '../Shared/GlassNoTexture/GlassNoTexture'
import * as THREE from 'three'
import { useRef } from 'react'
import { useSpring, animated, easings } from '@react-spring/three'

extend({ RoundedBoxGeometry })

interface IWindowProps {
  position: [number, number, number]
  rotation: [number, number, number]
  animationEnd: number
}

const Window = ({ position, rotation, animationEnd }: IWindowProps) => {
  const woodTexture = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Color.jpg'
  )
  const woodTextureRoughness = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Roughness.jpg'
  )
  const groupRef = useRef<THREE.Group>(null)

  const { rotation: springRotation } = useSpring({
    from: { rotation: [0, rotation[1], 0] },
    to: async (next) => {
      await next({ rotation: [0, animationEnd, 0] })
      await next({ rotation: [0, rotation[1], 0] })
    },
    config: {
      mass: 5,
      tension: 280,
      friction: 20,
      duration: 15000,
      easing: easings.easeInOutCubic,
    },
    loop: true,
  })

  return (
    <animated.group
      ref={groupRef}
      position={position}
      // @ts-ignore
      rotation={springRotation}
    >
      <mesh receiveShadow castShadow position={[2, 0, 0]}>
        <Geometry>
          <Base rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[0.4, 7.55, 3.85]} />
          </Base>

          <Subtraction rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]}>
            <boxGeometry args={[0.4, 7.15, 3.45]} />
          </Subtraction>
          <RoundedBox
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 0, 0]}
            args={[0.2, 7.45, 0.2]}
          >
            <meshStandardMaterial
              color='#666'
              map={woodTexture}
              roughnessMap={woodTextureRoughness}
            />
          </RoundedBox>

          <Addition position={[0, 1.35, 0]}>
            <boxGeometry args={[3.85, 0.1, 0.1]} />
          </Addition>

          <Addition position={[0, -1.35, 0]}>
            <boxGeometry args={[3.85, 0.1, 0.1]} />
          </Addition>

          <GlassNoTexture args={[3.75, 7.35, 0.02]} />
        </Geometry>
        <meshStandardMaterial
          color='#666'
          map={woodTexture}
          roughnessMap={woodTextureRoughness}
        />
      </mesh>
    </animated.group>
  )
}

export default Window
