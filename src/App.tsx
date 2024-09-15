import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
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
import WindAudio from './Components/WindAudio/WindAudio'
import { animated, useSpring } from '@react-spring/web'

import './App.scss'
import Camera from './Components/Camera/Camera'

function App() {
  const [isOpened, setIsOpened] = useState(false)

  const style = useSpring({
    top: isOpened ? '-100vh' : '0',
  })

  const handleClick = () => {
    setIsOpened(true)
  }

  return (
    <div className='overlay'>
      <animated.div className='overlay__container' style={style}>
        <button onClick={handleClick} className='overlay__button'>
          Press to start
        </button>
      </animated.div>
      <Suspense fallback={null}>
        <Canvas
          style={{ height: '100vh', width: '100vw' }}
          fallback={null}
          shadows
          camera={{
            far: 3000,
            fov: 60,
            position: [-0.5, 1.5, 6],
          }}
        >
          {isOpened ? <WindAudio /> : null}
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
          <Camera />

          <Physics>
            <group position={[80, 19, -290]}>
              <Tree />
            </group>
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
