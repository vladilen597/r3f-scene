import { useLoader, useThree } from '@react-three/fiber'

import * as THREE from 'three'
import { EXRLoader } from 'three-stdlib'

const Background = () => {
  const texture = useLoader(THREE.TextureLoader, '/sky/sky.jpg')

  const { scene } = useThree()
  scene.background = texture
  return null
}

export default Background
