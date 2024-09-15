import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

interface GlassNoTextureProps {
  position?: [number, number, number]
  args: [number, number, number]
}

const GlassNoTexture = ({
  position = [0, 0, 0],
  args = [1, 1, 1],
}: GlassNoTextureProps) => {
  const glassMap = useLoader(THREE.TextureLoader, './glass/glass-scratch.jpg')

  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial
        color='#88ccee'
        map={glassMap}
        transparent={true}
        opacity={0.4}
      />
    </mesh>
  )
}

export default GlassNoTexture
