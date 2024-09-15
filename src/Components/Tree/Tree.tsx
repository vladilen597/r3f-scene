import { useGLTF } from '@react-three/drei'
import Rope from './Rope/Rope'

const Tree = () => {
  const { nodes } = useGLTF('./tree/tree.gltf')

  return (
    // @ts-ignore
    <>
      <mesh
        rotation={[0, Math.PI, -Math.PI / 16]}
        scale={[2, 2, 2]}
        // @ts-ignore
        geometry={nodes.mesh_0.geometry}
        // @ts-ignore
        material={nodes.mesh_0.material}
      />
      <group position={[-32, 16, 0]} rotation={[0, Math.PI / 5, 0]}>
        <Rope />
      </group>
    </>
  )
}

export default Tree
