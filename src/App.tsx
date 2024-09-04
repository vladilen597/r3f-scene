import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import Lantern from './Components/Lantern/Lantern'
import Table from './Components/Table/Table'
import Floor from './Components/Floor/Floor'
import Wall from './Components/Wall/Wall'
import Sky from './Components/Sky/Sky'
import Window from './Components/Window/Window'

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas
        style={{ height: '100vh', width: '100vw' }}
        fallback={null}
        shadows
      >
        <OrbitControls panSpeed={0.5} />
        {/* switch to 0.1 #040409 later */}
        <ambientLight intensity={1} color='#fff' />
        <ambientLight intensity={0.1} color='#040409' />

        <Lantern />
        <Table />
        <Floor />
        <Wall />
        <Sky />
        <Window position={[1.95, 4.4, -3.3]} />
        {/* <Window position={[-1.95, 4.4, -3.3]} /> */}
        <axesHelper />
        <color attach='background' args={['#040409']} />
      </Canvas>
    </Suspense>
  )
}

export default App
