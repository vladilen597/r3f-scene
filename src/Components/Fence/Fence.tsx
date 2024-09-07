import FenceItem from './FenceItem/FenceItem'

const Fence = () => {
  return (
    <group name='fences'>
      <FenceItem position={[-143, 13, -290]} rotation={[1.5, 0.05, 0.9]} />
      <FenceItem position={[-121, 13, -290]} rotation={[1.5, 0.05, 0.9]} />
      <FenceItem position={[-100, 14.3, -290]} rotation={[1.5, 0.1, 0.9]} />
      <FenceItem position={[-79, 14.8, -290]} rotation={[1.5, 0.05, 0.9]} />
      <FenceItem position={[-59, 16, -290]} rotation={[1.5, 0.1, 0.9]} />
      <FenceItem position={[-19, 19.5, -290]} rotation={[1.5, 0.15, 0.9]} />
      <FenceItem position={[-39, 18, -290]} rotation={[1.5, 0.15, 0.9]} />
      <FenceItem position={[0, 22, -290]} rotation={[1.5, 0.15, 0.9]} />
    </group>
  )
}

export default Fence
