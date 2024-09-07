// @ts-nocheck
import {
  useBox,
  useCylinder,
  usePointToPointConstraint,
} from '@react-three/cannon'
import { Base, Geometry, Subtraction } from '@react-three/csg'
import { Cylinder } from '@react-three/drei'
import { useEffect } from 'react'

const Rope = () => {
  const [ref] = useCylinder(() => ({
    mass: 0,
    args: [0.1, 0.1, 1],
    position: [0, 12, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box1ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 11, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box2ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 10, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box3ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 9, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box4ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 8, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box5ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 7, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box6ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 6, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box7ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 5, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box8ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 4, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box9ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 3, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box10ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 2, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box11ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 1, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [box12ref] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 1],
    position: [0, 0, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))
  const [tireRef, tireApi] = useBox(() => ({
    mass: 24,
    args: [1, 1, 1],
    position: [0, -2.5, 0],
    collisionFilterGroup: 0,
    collisionFilterMask: 0,
  }))

  usePointToPointConstraint(ref, box1ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box1ref, box2ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box2ref, box3ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box3ref, box4ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box4ref, box5ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box5ref, box6ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box6ref, box7ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box7ref, box8ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box8ref, box9ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box9ref, box10ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box10ref, box11ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box11ref, box12ref, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 0.44, 0],
  })

  usePointToPointConstraint(box12ref, tireRef, {
    pivotA: [0, -0.44, 0],
    pivotB: [0, 2.5, 0],
  })

  const applyImpulse = () => {
    tireApi.applyImpulse([10, 0, 0], [0, 0, 0])
  }

  useEffect(() => {
    tireApi.applyImpulse([50, 0, 0], [0, 0, 0])
  }, [])

  return (
    <group>
      <Cylinder ref={ref} args={[0.1, 0.1, 2]} position={[0, 12, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box1ref} args={[0.1, 0.1, 1]} position={[0, 11, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box2ref} args={[0.1, 0.1, 1]} position={[0, 10, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box3ref} args={[0.1, 0.1, 1]} position={[0, 9, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box4ref} args={[0.1, 0.1, 1]} position={[0, 8, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box5ref} args={[0.1, 0.1, 1]} position={[0, 7, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box6ref} args={[0.1, 0.1, 1]} position={[0, 6, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box7ref} args={[0.1, 0.1, 1]} position={[0, 5, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box8ref} args={[0.1, 0.1, 1]} position={[0, 4, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box9ref} args={[0.1, 0.1, 1]} position={[0, 3, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box10ref} args={[0.1, 0.1, 1]} position={[0, 2, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box11ref} args={[0.1, 0.1, 1]} position={[0, 1, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <Cylinder ref={box12ref} args={[0.1, 0.1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color='#3d281d' />
      </Cylinder>
      <mesh ref={tireRef} onClick={applyImpulse}>
        <Geometry>
          <Base position={[0, -2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[5, 5, 2, 32]} />
          </Base>
          <Subtraction position={[0, -2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[3, 3, 2, 32]} />
          </Subtraction>
        </Geometry>

        <meshStandardMaterial color='#3d281d' />
      </mesh>
    </group>
  )
}

export default Rope
