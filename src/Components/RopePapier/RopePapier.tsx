import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Sphere } from '@react-three/drei'
import {
  RapierRigidBody,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier'
import { Base, Geometry, Subtraction } from '@react-three/csg'

const RopePapier = () => {
  const fixedRopeSegment1Ref = useRef<RapierRigidBody>(null)
  const ropeSegment2Ref = useRef<RapierRigidBody>(null)
  const ropeSegment3Ref = useRef<RapierRigidBody>(null)
  const tireRef = useRef<RapierRigidBody>(null)
  const groupRef = useRef<THREE.Group>(null)

  const [positions, setPositions] = useState([
    new THREE.Vector3(0, 15, 0),
    new THREE.Vector3(0, 10, 0),
    new THREE.Vector3(0, 5, 0),
  ])

  useRopeJoint(fixedRopeSegment1Ref, ropeSegment2Ref, [[0, 0, 0], [0, 0, 0], 5])
  useRopeJoint(ropeSegment2Ref, ropeSegment3Ref, [[0, 0, 0], [0, 0, 0], 5])
  useSphericalJoint(ropeSegment3Ref, tireRef, [
    [0, 0, 0],
    [0, 0.1, 0],
  ])

  useFrame(() => {
    if (
      fixedRopeSegment1Ref.current &&
      ropeSegment2Ref.current &&
      ropeSegment3Ref.current
    ) {
      const vector3 = new THREE.Vector3().copy(
        ropeSegment3Ref.current.translation()
      )
      vector3.y -= 1
      const worldPositions = [
        new THREE.Vector3().copy(fixedRopeSegment1Ref.current.translation()),
        new THREE.Vector3().copy(ropeSegment2Ref.current.translation()),
        vector3,
      ]
      const localPositions = worldPositions.map((pos) =>
        // @ts-ignore
        groupRef.current.worldToLocal(pos)
      )
      setPositions(localPositions)
    }
  })

  const applyImpulse = () => {
    if (tireRef.current) {
      tireRef.current.applyImpulse({ x: 200, y: 50, z: 0 }, true)
    }
  }

  useEffect(() => {
    applyImpulse()
  }, [])

  const path = new THREE.CatmullRomCurve3(positions)

  return (
    <group ref={groupRef}>
      <RigidBody
        ref={fixedRopeSegment1Ref}
        position={[0, 15, 0]}
        args={[1]}
        type='fixed'
      >
        <Sphere args={[0.1]}>
          <meshStandardMaterial color='red' />
        </Sphere>
      </RigidBody>
      <RigidBody
        ref={ropeSegment2Ref}
        position={[0, 10, 0]}
        args={[1]}
        mass={1}
      >
        <Sphere args={[0.1]}>
          <meshStandardMaterial color='green' />
        </Sphere>
      </RigidBody>
      <RigidBody ref={ropeSegment3Ref} position={[0, 5, 0]} args={[1]} mass={1}>
        <Sphere args={[0.1]}>
          <meshStandardMaterial color='green' />
        </Sphere>
      </RigidBody>

      <RigidBody
        onSleep={applyImpulse}
        ref={tireRef}
        position={[0, -3.6, 0]}
        args={[1]}
        mass={0}
      >
        <mesh onClick={applyImpulse}>
          <Geometry>
            <Base position={[0, -5, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[5, 5, 2, 20]} />
            </Base>
            <Subtraction position={[0, -5, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[3, 3, 2, 20]} />
            </Subtraction>
          </Geometry>

          <meshStandardMaterial color='#3d281d' />
        </mesh>
      </RigidBody>

      <mesh>
        <tubeGeometry args={[path, 20, 0.2, 8, false]} />
        <meshStandardMaterial color='#222' />
      </mesh>
    </group>
  )
}

export default RopePapier
