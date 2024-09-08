import { Box } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import TableProps from './TableProps/TableProps'

const Table = () => {
  const tableTexture = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Color.jpg'
  )
  const tableTextureRoughness = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Roughness.jpg'
  )

  return (
    <group name='table'>
      <Box
        receiveShadow
        castShadow
        args={[10, 0.3, 5]}
        position={[0, -0.71, 0]}
      >
        <meshStandardMaterial
          map={tableTexture}
          roughnessMap={tableTextureRoughness}
          color='#ffc18c'
        />
      </Box>
      <group name='legs'>
        <Box
          castShadow
          receiveShadow
          args={[0.3, 5, 4.8]}
          position={[4.8, -3.1, 0]}
        >
          <meshStandardMaterial
            map={tableTexture}
            roughnessMap={tableTextureRoughness}
            color='#ffc18c'
          />
        </Box>
        <Box
          castShadow
          receiveShadow
          args={[0.3, 5, 4.8]}
          position={[-4.8, -3.1, 0]}
        >
          <meshStandardMaterial
            map={tableTexture}
            roughnessMap={tableTextureRoughness}
            color='#ffc18c'
          />
        </Box>
      </group>
      <group name='side'>
        <Box
          castShadow
          receiveShadow
          args={[9.8, 2, 0.1]}
          position={[0, -2.5, -2.3]}
        >
          <meshStandardMaterial
            map={tableTexture}
            roughnessMap={tableTextureRoughness}
            color='#ffc18c'
          />
        </Box>
      </group>
      <group>
        <TableProps />
      </group>
    </group>
  )
}

export default Table
