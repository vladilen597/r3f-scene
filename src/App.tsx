import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import Lantern from './Components/Lantern/Lantern'
import Table from './Components/Table/Table'
import Floor from './Components/Floor/Floor'
import Wall from './Components/Wall/Wall'

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas
        style={{ height: '100vh', width: '100vw' }}
        fallback={null}
        shadows
      >
        <OrbitControls />
        <ambientLight intensity={0.1} color='#fff' />
        {/* <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          color='#fff'
          castShadow
        /> */}
        <Lantern />
        <Table />
        <Floor />
        <Wall />
      </Canvas>
    </Suspense>
  )
}

export default App
