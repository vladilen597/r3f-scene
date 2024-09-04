import { Sky as ThreeSky, Stars, Sphere } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

const Sky = () => {
  const moonTexture = useLoader(TextureLoader, '/moon/moon.jpg')

  return (
    <>
      <ThreeSky
        distance={900000}
        sunPosition={[0, -10, 0]}
        mieDirectionalG={0.8}
        rayleigh={10}
      />
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={100} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
      <Sphere args={[5, 32, 32]} position={[-150, 150, -700]}>
        <meshStandardMaterial attach='material' map={moonTexture} />
      </Sphere>
      <pointLight
        position={[-140, 150, -690]}
        color={'#ffffff'}
        intensity={1000}
        castShadow
      />
    </>
  )
}

export default Sky
