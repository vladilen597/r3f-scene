import { Sky as ThreeSky, Stars, Sphere } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Sky = () => {
  const moonTexture = useLoader(TextureLoader, '/moon/moon.jpg')
  const lightRef = useRef<THREE.DirectionalLight>(null)
  const { scene } = useThree()

  useEffect(() => {
    if (lightRef.current) {
      const helper = new THREE.DirectionalLightHelper(lightRef.current, 5)
      scene.add(helper)
    }
  }, [scene])

  return (
    <>
      <ThreeSky
        distance={90000}
        sunPosition={[0, -10, 0]}
        mieDirectionalG={0.8}
        rayleigh={10}
        turbidity={10}
      />
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={250} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={1} // Size factor (default=4)
        saturation={0.5} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
      <Sphere
        args={[5, 32, 16]}
        scale={2}
        position={[-180, 350, -1000]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshBasicMaterial map={moonTexture} />
      </Sphere>
      {/* <pointLight
        position={[-145, 245, -690]}
        color={'#ffffff'}
        intensity={1000}
        castShadow
      /> */}
    </>
  )
}

export default Sky
