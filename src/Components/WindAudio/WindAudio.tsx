import { useEffect } from 'react'
import { useThree } from 'react-three-fiber'
import * as THREE from 'three'

const WindAudio = () => {
  const { camera } = useThree()

  useEffect(() => {
    const listener = new THREE.AudioListener()
    camera.add(listener)
    const sound = new THREE.Audio(listener)
    const audioLoader = new THREE.AudioLoader()
    audioLoader.load('/wind.mp3', (buffer) => {
      sound.setBuffer(buffer)
      sound.setLoop(true)
      sound.setVolume(1)
      sound.play()
    })

    return () => {
      camera.remove(listener)
    }
  }, [camera])

  return null
}

export default WindAudio
