import { Box } from '@react-three/drei'
import * as THREE from 'three'

const Table = () => {
  const tableTexture = new THREE.TextureLoader().load('table.jpg')

  return (
    <group name='table'>
      <Box
        receiveShadow
        castShadow
        args={[10, 0.3, 5]}
        position={[0, -0.71, 0]}
      >
        <meshStandardMaterial map={tableTexture} color='#ffc18c' />
      </Box>
      <group name='legs'>
        <Box args={[0.3, 5, 4.8]} position={[4.8, -3.1, 0]}>
          <meshStandardMaterial map={tableTexture} color='#ffc18c' />
        </Box>
        <Box args={[0.3, 5, 4.8]} position={[-4.8, -3.1, 0]}>
          <meshStandardMaterial map={tableTexture} color='#ffc18c' />
        </Box>
      </group>
      <group name='side'>
        <Box args={[9.8, 2, 0.1]} position={[0, -2.5, -2.3]}>
          <meshStandardMaterial map={tableTexture} color='#ffc18c' />
        </Box>
      </group>
    </group>
  )
}

export default Table
