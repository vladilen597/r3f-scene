// @ts-nocheck
import { useGLTF } from '@react-three/drei'
import Cactus from './Cactus/Cactus'

const TableProps = () => {
  const { nodes } = useGLTF('/tableProps/pencil.glb')
  const { nodes: book } = useGLTF('/tableProps/book.glb')
  console.log(nodes)

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

      <group
        position={[2, -0.53, -1.5]}
        rotation={[Math.PI / 2, 0, -Math.PI / 8]}
        scale={[0.4, 0.4, 0.4]}
      >
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part.geometry}
          material={nodes.Pen_Part.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part001.geometry}
          material={nodes.Pen_Part001.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part002.geometry}
          material={nodes.Pen_Part002.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part003.geometry}
          material={nodes.Pen_Part003.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part004.geometry}
          material={nodes.Pen_Part004.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          rotation={[0, 0, -Math.PI / 9]}
          position={[0.3, 0.5, 0]}
          geometry={nodes.Pen_Part005.geometry}
          material={nodes.Pen_Part005.material}
          castShadow
          receiveShadow
        />
      </group>

      <group
        position={[1.7, -0.53, -1.2]}
        rotation={[Math.PI / 2, 0, Math.PI / 1.1]}
        scale={[0.4, 0.4, 0.4]}
      >
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part.geometry}
          material={nodes.Pen_Part.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part001.geometry}
          material={nodes.Pen_Part001.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part002.geometry}
          material={nodes.Pen_Part002.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part003.geometry}
          material={nodes.Pen_Part003.material}
          castShadow
          receiveShadow
        />
        <mesh
          // scale={[0.18, 0.1, 0.18]}
          geometry={nodes.Pen_Part004.geometry}
          material={nodes.Pen_Part004.material}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}

export default TableProps
