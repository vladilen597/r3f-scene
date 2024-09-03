import { Box, Cone, Cylinder, Torus } from '@react-three/drei'
import * as THREE from 'three'
import GlassMaterial from '../Shared/GlassMaterial/GlassMaterial'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import FireParticles, { Fire } from '../Shared/FireParticles/FireParticles'

const Lantern = () => {
  const metalTexture = new THREE.TextureLoader().load('metal.jpg')

  return (
    <group>
      <Box receiveShadow castShadow args={[0.1, 1, 0.1]}>
        <meshStandardMaterial color='grey' />
      </Box>
      <Box
        receiveShadow
        castShadow
        args={[0.1, 1, 0.1]}
        position={[0.75, 0, 0]}
      >
        <meshStandardMaterial color='grey' />
      </Box>
      <Box
        receiveShadow
        castShadow
        args={[0.1, 1, 0.1]}
        position={[0.75, 0, 0.75]}
      >
        <meshStandardMaterial color='grey' />
      </Box>
      <Box
        receiveShadow
        castShadow
        args={[0.1, 1, 0.1]}
        position={[0, 0, 0.75]}
      >
        <meshStandardMaterial color='grey' />
      </Box>
      <Cone
        receiveShadow
        castShadow
        args={[0.65, 0.25, 4]}
        position={[0.37, 0.62, 0.37]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <meshStandardMaterial map={metalTexture} color='#fff' />
      </Cone>
      <Torus
        receiveShadow
        castShadow
        args={[0.2, 0.02, 16, 100]}
        position={[0.37, 0.92, 0.37]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <meshStandardMaterial
          map={metalTexture}
          attach='material'
          color='#fff'
        />
      </Torus>
      <Cylinder
        receiveShadow
        castShadow
        args={[0.05, 0.05, 0.2, 16]}
        position={[0.37, 0.75, 0.37]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
      >
        <meshStandardMaterial
          metalnessMap={metalTexture}
          map={metalTexture}
          color='#fff'
        />
      </Cylinder>
      <pointLight
        position={[0.37, 0, 0.37]}
        color='#fbf5d6'
        intensity={5}
        distance={10} // Increase the distance to cover a larger area
        castShadow
        shadow-mapSize-width={2048} // Increase shadow map size for better quality
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1} // Adjust near and far planes of the shadow camera
        shadow-camera-far={20}
      />
      <GlassMaterial position={[0.37, 0, 0.37]} />
      <Box
        receiveShadow
        castShadow
        args={[0.9, 0.1, 0.9]}
        position={[0.37, -0.54, 0.37]}
      >
        <meshStandardMaterial map={metalTexture} color='grey' />
      </Box>
      <FireParticles />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </group>
  )
}

export default Lantern
