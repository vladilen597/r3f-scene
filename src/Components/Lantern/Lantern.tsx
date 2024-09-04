import { Box, Cone, Cylinder, Torus } from '@react-three/drei'
import * as THREE from 'three'
import GlassMaterial from '../Shared/GlassMaterial/GlassMaterial'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import FireParticles from '../Shared/FireParticles/FireParticles'
import { useLoader } from '@react-three/fiber'
import { Subtraction, Base, Geometry } from '@react-three/csg'

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
        args={[0.2, 0.02, 16, 32]}
        position={[0.49, 0.95, 0.49]}
        rotation={[4.94, 3.37, 0]}
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
      <group name='bottom-lines'>
        <mesh castShadow receiveShadow position={[0.37, -0.47, 0.375]}>
          <Geometry>
            <Base>
              <boxGeometry args={[0.75, 0.05, 0.75]} />
            </Base>
          </Geometry>
          <meshStandardMaterial
            metalnessMap={metalTexture}
            map={metalTexture}
            color='grey'
          />
        </mesh>
      </group>
      <group name='arcs'>
        <mesh castShadow receiveShadow position={[0.37, 0.6, 0.375]}>
          <Geometry>
            <Base>
              <boxGeometry args={[0.7, 0.3, 0.7]} />
            </Base>
            <Subtraction position={[0, -0.2, 0]}>
              <sphereGeometry args={[0.47, 32, 32]} />
            </Subtraction>
          </Geometry>
          <meshStandardMaterial
            metalnessMap={metalTexture}
            map={metalTexture}
            color='grey'
          />
        </mesh>
      </group>
      <pointLight
        position={[0.37, 0, 0.37]}
        color='#eabc3a'
        distance={10}
        castShadow
        intensity={10}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-bias={-0.005}
        shadow-radius={10}
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
