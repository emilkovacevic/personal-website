import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import styled from 'styled-components'
import { Model } from './Model'
import LoadingAnimation from '../loading/LoadingAnimation'

const Container = styled.div`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  margin: auto;
  height: 60vh;
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
  @media screen and (min-width: 768px) {
    height: 90vh;
    margin: auto 0;
  }
`

function ModelViewer(): JSX.Element {
  const ref = useRef<OrbitControlsImpl>(null)
  return (
    <Container>
      <React.Suspense
        fallback={
          <div
            style={{
              position: 'relative',
              top: '100vh',
              transform: 'translateY(-50vh)',
              textAlign: 'center',
            }}
          >
            <LoadingAnimation />
          </div>
        }
      >
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 90, position: [6, 6, 6] }}>
          <Stage preset="rembrandt" intensity={0} environment="apartment">
            <Model />
          </Stage>
          <OrbitControls ref={ref} autoRotate />
        </Canvas>
      </React.Suspense>
    </Container>
  )
}

export default ModelViewer
