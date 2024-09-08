import { Base, Geometry, Subtraction } from '@react-three/csg'
import { useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { RoundedBoxGeometry } from 'three-stdlib'
import { Box, RoundedBox } from '@react-three/drei'
import { useEffect, useRef } from 'react'

extend({ RoundedBoxGeometry })

const WindowFrame = () => {
  const woodTexture = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Color.jpg'
  )
  const woodTextureRoughness = useLoader(
    THREE.TextureLoader,
    '/wood/Wood092_2K-JPG_Roughness.jpg'
  )

  const { camera } = useThree()

  useEffect(() => {
    const listener = new THREE.AudioListener()
    camera.add(listener)

    const sound = new THREE.Audio(listener)

    const audioLoader = new THREE.AudioLoader()
    audioLoader.load('/wind.mp3', (buffer) => {
      sound.setBuffer(buffer)
      sound.setLoop(true)
      sound.setVolume(0.5)
      sound.play()
    })

    return () => {
      camera.remove(listener)
    }
  }, [camera])

  return (
    <mesh receiveShadow castShadow>
      <Geometry>
        <Base position={[0, 4.5, -3.3]}>
          <boxGeometry args={[8, 9, 1]} />
        </Base>
        <Subtraction position={[0, 4.2, -3]}>
          <boxGeometry args={[7.8, 8, 2]} />
        </Subtraction>
      </Geometry>
      <meshStandardMaterial
        color='#666'
        map={woodTexture}
        roughnessMap={woodTextureRoughness}
      />
      <group name='hinges'>
        <Box args={[0.03, 0.5, 0.2]} position={[-3.9, 7.4, -3]}>
          <meshStandardMaterial color='#453a3c' />
        </Box>
        <Box args={[0.03, 0.5, 0.2]} position={[-3.9, 1.4, -3]}>
          <meshStandardMaterial color='#453a3c' />
        </Box>

        <Box args={[0.03, 0.5, 0.2]} position={[3.9, 7.4, -3]}>
          <meshStandardMaterial color='#453a3c' />
        </Box>
        <Box args={[0.03, 0.5, 0.2]} position={[3.9, 1.4, -3]}>
          <meshStandardMaterial color='#453a3c' />
        </Box>
      </group>
      <RoundedBox
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 0.5, -3]}
        args={[1.5, 0.2, 8.5]}
      >
        <meshStandardMaterial
          color='#666'
          map={woodTexture}
          roughnessMap={woodTextureRoughness}
        />
      </RoundedBox>
    </mesh>
  )
}

export default WindowFrame
