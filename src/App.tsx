import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Lantern from './Components/Lantern/Lantern'
import Table from './Components/Table/Table'

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas
        style={{ height: '100vh', width: '100vw' }}
        fallback={null}
        shadows
      >
        <OrbitControls />
        <ambientLight intensity={0.5} color='#fff' />
        {/* <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          color='#fff'
          castShadow
        /> */}
        <Physics>
          {/* <GroundPlane /> */}
          {/* <PhysicsBox /> */}
        </Physics>
        <Lantern />
        <Table />
        <color attach='background' args={['#333']} />
      </Canvas>
    </Suspense>
  )
}

export default App
