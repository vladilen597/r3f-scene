import { Addition, Base, Geometry, Subtraction } from '@react-three/csg'
import { RoundedBoxGeometry } from 'three-stdlib'
import { Box, Cylinder, RoundedBox, Sphere } from '@react-three/drei'
import { extend, useLoader } from '@react-three/fiber'
import GlassNoTexture from '../Shared/GlassNoTexture/GlassNoTexture'
import * as THREE from 'three'
import { useRef } from 'react'
import {
  RapierRigidBody,
  RigidBody,
  useRevoluteJoint,
} from '@react-three/rapier'

extend({ RoundedBoxGeometry })

interface IWindowProps {
  position: [number, number, number]
  rotation: [number, number, number]
  limits: [[number, number, number], [number, number, number]]
  isLeft?: boolean
}

const WindowRapier = ({ position, rotation, limits, isLeft }: IWindowProps) => {
  const [limit1, limit2] = limits
  const woodTexture = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Color.jpg'
  )
  const woodTextureRoughness = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Roughness.jpg'
  )
  const hingeRef = useRef<RapierRigidBody>(null)
  const windowRef = useRef<RapierRigidBody>(null)

  useRevoluteJoint(hingeRef, windowRef, [
    [0, 0, 0],
    [-0.1, 0, 0],
    [0, 1, 0],
  ])

  const applyImpulse = () => {
    if (windowRef.current) {
      const isPlus = Math.random() < 0.8 ? 1 : -1
      windowRef.current.applyImpulse(
        { x: Math.random() * 5 * isPlus, y: 0, z: 0 },
        true
      )
    }
  }

  return (
    <group position={position}>
      <RigidBody type='fixed' position={limit1} includeInvisible>
        <Sphere args={[0.1]} visible={false} />
      </RigidBody>
      <RigidBody type='fixed' position={limit2} includeInvisible>
        <Sphere args={[0.1]} visible={false} />
      </RigidBody>

      <RigidBody
        type='fixed'
        ref={hingeRef}
        collisionGroups={0}
        includeInvisible
      >
        <Sphere args={[0.1]} visible={false}>
          <meshStandardMaterial color='red' />
        </Sphere>
      </RigidBody>
      <RigidBody
        linearDamping={0.8}
        angularDamping={0.8}
        rotation={rotation}
        ref={windowRef}
        onSleep={applyImpulse}
      >
        <mesh
          onClick={applyImpulse}
          receiveShadow
          castShadow
          position={[2, 0, 0]}
        >
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
            <group name='hinges'>
              <Box args={[0.03, 0.5, 0.2]} position={[-1.94, -3, 0]}>
                <meshStandardMaterial color='#453a3c' />
              </Box>
              <Box args={[0.03, 0.5, 0.2]} position={[-1.94, 3, 0]}>
                <meshStandardMaterial color='#453a3c' />
              </Box>

              <Cylinder
                args={[0.05, 0.05, 0.5, 8]}
                position={[-1.98, 3, isLeft ? -0.1 : 0.1]}
              >
                <meshStandardMaterial color='#453a3c' />
              </Cylinder>

              <Cylinder
                args={[0.05, 0.05, 0.5, 8]}
                position={[-1.98, -3, isLeft ? -0.1 : 0.1]}
              >
                <meshStandardMaterial color='#453a3c' />
              </Cylinder>
            </group>

            <GlassNoTexture args={[3.75, 7.35, 0.02]} />
          </Geometry>
          <meshStandardMaterial
            color='#666'
            map={woodTexture}
            roughnessMap={woodTextureRoughness}
          />
        </mesh>
      </RigidBody>
    </group>
  )
}

export default WindowRapier
