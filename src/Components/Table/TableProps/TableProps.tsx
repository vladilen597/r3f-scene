// @ts-nocheck
import { useGLTF } from '@react-three/drei'
import Cactus from './Cactus/Cactus'

const TableProps = () => {
  const { nodes } = useGLTF('/tableProps/cc0_-_pencil_1k.glb')
  const { nodes: book } = useGLTF('/tableProps/book.glb')

  return (
    <group>
      <Cactus />
      <group name='books' scale={[1.5, 1.5, 1.5]} position={[-4, -0.55, -1.3]}>
        <group
          name='book'
          position={[0, 0.09, 0]}
          rotation={[Math.PI / 2, 0, Math.PI / 5]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={book.Architexture_0.geometry}
            material={book.Architexture_0.material}
          >
            <meshStandardMaterial color='#f13c00' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={book.Architexture_1.geometry}
            material={book.Architexture_1.material}
          />
        </group>
        <group name='book' rotation={[Math.PI / 2, 0, Math.PI / 6]}>
          <mesh
            castShadow
            receiveShadow
            geometry={book.Architexture_0.geometry}
            material={book.Architexture_0.material}
          >
            <meshStandardMaterial color='#33708b' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={book.Architexture_1.geometry}
            material={book.Architexture_1.material}
          />
        </group>
        <group
          name='book'
          position={[0.1, 0.18, -0.1]}
          rotation={[Math.PI / 2, 0, Math.PI / 3]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={book.Architexture_0.geometry}
            material={book.Architexture_0.material}
          >
            <meshStandardMaterial color='#330f8b' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={book.Architexture_1.geometry}
            material={book.Architexture_1.material}
          />
        </group>
      </group>
      <mesh
        scale={[0.18, 0.1, 0.18]}
        position={[2, -0.53, -1.5]}
        rotation={[Math.PI / 2, 0, -Math.PI / 8]}
        castShadow
        receiveShadow
        geometry={nodes.Pencil_Pencil_0.geometry}
        material={nodes.Pencil_Pencil_0.material}
      />
    </group>
  )
}

export default TableProps
