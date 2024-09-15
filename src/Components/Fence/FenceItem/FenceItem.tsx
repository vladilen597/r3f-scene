//@ts-nocheck

import { useGLTF } from '@react-three/drei'

interface IFenceItemProps {
  position: [number, number, number]
  rotation: [number, number, number]
}

const FenceItem = ({
  position = [0, 0, 0],
  rotation = [Math.PI / 2, 0, Math.PI / 3],
}: IFenceItemProps) => {
  const { nodes: fence } = useGLTF('./fence/fence.glb')

  return (
    <group position={position}>
      <mesh
        scale={[5, 5, 5]}
        rotation={rotation}
        geometry={fence.Object_2.geometry}
        material={fence.Object_2.material}
      />
    </group>
  )
}

export default FenceItem
