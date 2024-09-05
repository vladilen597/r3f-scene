import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three-stdlib'
import * as THREE from 'three'

const Tree = () => {
  const objLoader = new THREE.ObjectLoader()
  const texture = useLoader(THREE.TextureLoader, '/tree/normalMap.png')
  const material = new THREE.MeshPhongMaterial({
    map: texture,
  })
  let tree
  objLoader.load('model.obj', (model) => {
    model.traverse((child) => {
      if (child.isMesh) {
        child.material = material
      }
    })
    tree = model
  })
  console.log(tree)
  if (!tree) return null
  return <primitive object={tree} />
}

export default Tree
