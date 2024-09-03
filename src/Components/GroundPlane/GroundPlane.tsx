import { Box } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import * as THREE from 'three'

const GroundPlane = () => {
  const asphaltTexture = new THREE.TextureLoader().load('asphalt.jpg')
  asphaltTexture.wrapS = THREE.RepeatWrapping
  asphaltTexture.wrapT = THREE.RepeatWrapping
  asphaltTexture.repeat.set(4, 4)

  const [ref] = useBox(() => ({
    args: [10, 10, 0.5],
    rotation: [-Math.PI / 2, 0, 0],
  }))

  return (
    <Box
      receiveShadow
      args={[10, 10, 0.5]}
      ref={ref as React.MutableRefObject<THREE.Mesh>}
    >
      <meshStandardMaterial color='#888' map={asphaltTexture} />
    </Box>
  )
}

export default GroundPlane
