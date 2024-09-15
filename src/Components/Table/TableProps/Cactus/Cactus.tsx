// @ts-nocheck

import { useGLTF } from '@react-three/drei'

const Cactus = () => {
  const { nodes: cactus } = useGLTF('./tableProps/cactus.gltf')

  return (
    <group
      scale={[0.3, 0.3, 0.3]}
      name='cactus'
      position={[-3, 0.8, -2.8]}
      rotation={[0, Math.PI / 3, 0]}
    >
      <mesh
        receiveShadow
        castShadow
        geometry={cactus.Circle.geometry}
        material={cactus.Circle.material}
        scale={cactus.Circle.scale}
        position={cactus.Circle.position}
      />
      <mesh
        receiveShadow
        geometry={cactus.Circle001.geometry}
        material={cactus.Circle001.material}
        scale={cactus.Circle001.scale}
        position={cactus.Circle001.position}
      />
      <mesh
        geometry={cactus.Cone004.geometry}
        material={cactus.Cone004.material}
        scale={cactus.Cone004.scale}
        position={cactus.Cone004.position}
        rotation={cactus.Cone004.rotation}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={cactus.Cylinder.geometry}
        material={cactus.Cylinder.material}
        scale={cactus.Cylinder.scale}
        position={cactus.Cylinder.position}
      />
    </group>
  )
}

export default Cactus
