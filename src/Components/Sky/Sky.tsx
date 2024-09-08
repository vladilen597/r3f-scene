import { Stars, Sphere } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

const Sky = () => {
  const moonTexture = useLoader(TextureLoader, '/moon/moon.jpg')

  return (
    <>
      {/* <group>
        <ThreeSky
          distance={90000}
          sunPosition={[0, -10, 0]}
          rayleigh={5}
          turbidity={10}
          mieCoefficient={0.7}
        />
      </group> */}
      <color attach='background' args={['#080b1c']} />
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={1000} // Depth of area where stars should fit (default=50)
        count={2500} // Amount of stars (default=5000)
        factor={1} // Size factor (default=4)
        saturation={0.5} // Saturation 0-1 (default=0)
        fade
      />
      <Sphere
        args={[5, 32, 16]}
        scale={2}
        position={[-180, 350, -1000]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshBasicMaterial map={moonTexture} />
      </Sphere>
    </>
  )
}

export default Sky
