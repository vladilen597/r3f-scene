import { OrbitControls } from '@react-three/drei'

const Camera = () => {
  return (
    <OrbitControls
      makeDefault
      target={[-0.5, 1.5, 5]}
      enablePan={false}
      rotateSpeed={0.05}
      maxAzimuthAngle={0.2}
      minAzimuthAngle={-0.2}
      maxPolarAngle={1.8}
      minPolarAngle={1.4}
    />
  )
}

export default Camera
