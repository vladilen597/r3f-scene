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
import Terrain from './Components/Terrain/Terrain'
import Tree from './Components/Tree/Tree'
import Fence from './Components/Fence/Fence'
import { Physics } from '@react-three/cannon'
import Test from './Components/Cloth/Cloth'

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

        <group position={[3, 0, -1.5]} rotation={[0, Math.PI / 4, 0]}>
          <Lantern />
        </group>
        <Table />
        <Floor />
        <Wall />
        <Sky />
        <Window
          position={[-3.75, 4.4, -2.8]}
          rotation={[0, -2.4, 0]}
          animationEnd={-2.45}
        />
        <Window
          position={[3.75, 4.4, -2.8]}
          rotation={[0, -0.9, 0]}
          animationEnd={-0.95}
        />
        <Terrain />
        <Fence />
        <Physics>
          <group position={[80, 19, -290]}>
            <Tree />
          </group>
          <Test />
        </Physics>
      </Canvas>
    </Suspense>
  )
}

export default App
