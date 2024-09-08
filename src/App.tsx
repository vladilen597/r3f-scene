import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense, useEffect } from 'react'
import { OrbitControls, Stats } from '@react-three/drei'
import Lantern from './Components/Lantern/Lantern'
import Table from './Components/Table/Table'
import Floor from './Components/Floor/Floor'
import Wall from './Components/Wall/Wall'
import Sky from './Components/Sky/Sky'
import Terrain from './Components/Terrain/Terrain'
import Tree from './Components/Tree/Tree'
import Fence from './Components/Fence/Fence'
import { Physics } from '@react-three/cannon'
import { Physics as PhysicsRapier } from '@react-three/rapier'
import WindowRapier from './Components/WindowRapier/WindowRapier'

function App() {
  const soundLoader = new Audio('/sounds/ambient.mp3')
  soundLoader.loop = true

  useEffect(() => {
    soundLoader.play()
  }, [])

  return (
    <Suspense fallback={null}>
      <Canvas
        style={{ height: '100vh', width: '100vw' }}
        fallback={null}
        shadows
        camera={{
          far: 3000,
        }}
      >
        <OrbitControls panSpeed={0.5} />
        {/* switch to 0.1 #040409 later */}
        {/* <ambientLight intensity={1} color='#fff' /> */}
        <ambientLight intensity={0.1} color='#040409' />

        <group position={[3, 0, -1.5]} rotation={[0, Math.PI / 4, 0]}>
          <Lantern />
        </group>
        <Table />
        <Floor />
        <Wall />
        <Sky />
        <PhysicsRapier>
          <WindowRapier
            position={[3.75, 4.4, -2.8]}
            rotation={[0, -0.9, 0]}
            limits={[
              [2, 1, 1],
              [0.4, 1, 1.7],
            ]}
            isLeft
          />
          <WindowRapier
            position={[-3.75, 4.4, -2.9]}
            rotation={[0, -2.4, 0]}
            limits={[
              [-2, 1, 1],
              [-1, 1, 1.7],
            ]}
          />
        </PhysicsRapier>
        <Terrain />
        <Fence />

        <Physics>
          <group position={[80, 19, -290]}>
            <Tree />
          </group>
        </Physics>
        <Stats />
      </Canvas>
    </Suspense>
  )
}

export default App
