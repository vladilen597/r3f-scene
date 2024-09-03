import { Box, Cone, Cylinder, Torus } from '@react-three/drei'
import * as THREE from 'three'
import GlassMaterial from '../Shared/GlassMaterial/GlassMaterial'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import FireParticles from '../Shared/FireParticles/FireParticles'
import { useLoader } from '@react-three/fiber'

const Lantern = () => {
  const metalTexture = useLoader(
    THREE.TextureLoader,
    '/metal/Metal053A_1K-PNG_Color.png'
  )
  const metalMetalness = useLoader(
    THREE.TextureLoader,
    '/metal/Metal053A_1K-PNG_Metalness.png'
  )
  const metalRoughness = useLoader(
    THREE.TextureLoader,
    '/metal/Metal053A_1K-PNG_Roughness.png'
  )

  return (
    <group>
      <Box receiveShadow castShadow args={[0.1, 1.5, 0.1]}>
        <meshStandardMaterial
          map={metalTexture}
          metalnessMap={metalMetalness}
          roughnessMap={metalRoughness}
          color='grey'
        />
      </Box>
      <Box
        receiveShadow
        castShadow
        args={[0.1, 1.5, 0.1]}
        position={[0.75, 0, 0]}
      >
        <meshStandardMaterial
          map={metalTexture}
          metalnessMap={metalMetalness}
          roughnessMap={metalRoughness}
          color='grey'
        />
      </Box>
      <Box
        receiveShadow
        castShadow
        args={[0.1, 1.5, 0.1]}
        position={[0.75, 0, 0.75]}
      >
        <meshStandardMaterial
          map={metalTexture}
          metalnessMap={metalMetalness}
          roughnessMap={metalRoughness}
          color='grey'
        />
      </Box>
      <Box
        receiveShadow
        castShadow
        args={[0.1, 1.5, 0.1]}
        position={[0, 0, 0.75]}
      >
        <meshStandardMaterial
          map={metalTexture}
          metalnessMap={metalMetalness}
          roughnessMap={metalRoughness}
          color='grey'
        />
      </Box>
      <Cone
        receiveShadow
        castShadow
        args={[0.65, 0.25, 4]}
        position={[0.37, 0.87, 0.37]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <meshStandardMaterial
          map={metalTexture}
          metalnessMap={metalMetalness}
          roughnessMap={metalRoughness}
          color='grey'
        />
      </Cone>
      <Torus
        receiveShadow
        castShadow
        args={[0.2, 0.02, 16, 100]}
        position={[0.37, 1.17, 0.37]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <meshStandardMaterial
          map={metalTexture}
          attach='material'
          color='grey'
        />
      </Torus>
      <Cylinder
        receiveShadow
        castShadow
        args={[0.05, 0.05, 0.2, 16]}
        position={[0.37, 1, 0.37]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
      >
        <meshStandardMaterial
          metalnessMap={metalTexture}
          map={metalTexture}
          color='grey'
        />
      </Cylinder>
      <pointLight
        position={[0.37, 0, 0.37]}
        color='#eabc3a'
        distance={10} // Increase the distance to cover a larger area
        castShadow
        intensity={10}
        args={[0.5, 0.5, 0.5]}
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
        <meshStandardMaterial
          map={metalTexture}
          metalnessMap={metalMetalness}
          roughnessMap={metalRoughness}
          color='grey'
        />
      </Box>
      <FireParticles />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </group>
  )
}

export default Lantern
