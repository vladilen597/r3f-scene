import { Addition, Base, Geometry, Subtraction } from '@react-three/csg'
import { PivotControls } from '@react-three/drei'
import { useControls } from 'leva'

interface IWindowProps {
  position: [number, number, number]
}

const Window = ({ position }: IWindowProps) => {
  const { positionX, positionY, positionZ, xArg, yArg, zArg } = useControls({
    positionX: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
    },
    positionY: {
      value: 5.5,
      min: -10,
      max: 10,
      step: 0.1,
    },
    positionZ: {
      value: -3.3,
      min: -10,
      max: 10,
      step: 0.1,
    },
    xArg: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    yArg: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    zArg: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
  })

  return (
    <mesh receiveShadow position={position}>
      <Geometry>
        <Base rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.4, 7.55, 3.85]} />
        </Base>

        <Addition position={[positionX, positionY, positionZ]}>
          <cylinderGeometry args={[0.1, 0.1, zArg, 16]} />
        </Addition>
      </Geometry>
      <meshStandardMaterial color='#ccc' />
    </mesh>
  )
}

export default Window
