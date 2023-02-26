/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useState } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    Plane_1: THREE.Mesh
    Plane_2: THREE.Mesh
    Plane_3: THREE.Mesh
    Cube009: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube009_2: THREE.Mesh
    Cube009_3: THREE.Mesh
    Cube009_4: THREE.Mesh
    Cube009_5: THREE.Mesh
    Cube010: THREE.Mesh
    Cube010_1: THREE.Mesh
    Cube010_2: THREE.Mesh
    Cube010_3: THREE.Mesh
    Cube010_4: THREE.Mesh
    Cube010_5: THREE.Mesh
    Cube017: THREE.Mesh
    Cube017_1: THREE.Mesh
    Cube011: THREE.Mesh
    Cube011_1: THREE.Mesh
    Cube013: THREE.Mesh
    Cube013_1: THREE.Mesh
    Cube014: THREE.Mesh
    Cube014_1: THREE.Mesh
    Cube015: THREE.Mesh
    Cube015_1: THREE.Mesh
    Cube014_2: THREE.Mesh
    Cube014_3: THREE.Mesh
    Cube011_2: THREE.Mesh
    Cube011_3: THREE.Mesh
    Cube011_4: THREE.Mesh
    Cube011_5: THREE.Mesh
    Cube012: THREE.Mesh
    Cube012_1: THREE.Mesh
    feet: THREE.Mesh
    Icosphere: THREE.Mesh
    Icosphere_1: THREE.Mesh
    keys: THREE.Mesh
    body: THREE.Mesh
    Frets: THREE.Mesh
    Nut: THREE.Mesh
    Saddle: THREE.Mesh
    Plane007: THREE.Mesh
    Plane007_1: THREE.Mesh
    StringsCylinder: THREE.Mesh
    Gear: THREE.Mesh
    Gear_1: THREE.Mesh
    Gear_2: THREE.Mesh
    Circle001: THREE.Mesh
    Circle001_1: THREE.Mesh
    Circle001_2: THREE.Mesh
    Circle001_3: THREE.Mesh
    Cube029: THREE.Mesh
    Cube029_1: THREE.Mesh
    Neck: THREE.Mesh
    Fingerboard: THREE.Mesh
    Top: THREE.Mesh
    Cube031: THREE.Mesh
    Cube031_1: THREE.Mesh
    Wheel: THREE.Mesh
    cyl2: THREE.Mesh
    cyl1: THREE.Mesh
    cyl3: THREE.Mesh
    cyl4: THREE.Mesh
    Cube006: THREE.Mesh
    MUG002: THREE.Mesh
    Circle: THREE.Mesh
    pccase: THREE.Mesh
    LIGHTBOLB: THREE.Mesh
    Circle011: THREE.Mesh
    Circle011_1: THREE.Mesh
    Circle011_2: THREE.Mesh
    Circle011_3: THREE.Mesh
    Circle011_4: THREE.Mesh
    website: THREE.Mesh
    vscode: THREE.Mesh
    boardbottom: THREE.Mesh
    leg1: THREE.Mesh
    ['table-top']: THREE.Mesh
    stand: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    ['lef-bottom']: THREE.Mesh
    ['lef-bottom001']: THREE.Mesh
    leg1001: THREE.Mesh
  }
  materials: {
    ['Office Chair_Fabric']: THREE.MeshStandardMaterial
    ['Office Chair_Metal']: THREE.MeshStandardMaterial
    ['Office Chair_Painted Metal']: THREE.MeshStandardMaterial
    ['Office Chair_Plastic']: THREE.MeshStandardMaterial
    ['White Nikon']: THREE.MeshStandardMaterial
    ['Screen.001']: THREE.MeshStandardMaterial
    ['White Plastic']: THREE.MeshPhysicalMaterial
    Metalic: THREE.MeshStandardMaterial
    ['White plastic touched']: THREE.MeshStandardMaterial
    BlackPlastic: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
    ['book cover']: THREE.MeshStandardMaterial
    ['stacked paper']: THREE.MeshStandardMaterial
    ['book cover']: THREE.MeshStandardMaterial
    ['stacked paper']: THREE.MeshStandardMaterial
    ['Plástico fosco 1']: THREE.MeshStandardMaterial
    Vidro: THREE.MeshPhysicalMaterial
    LED: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Black Plastic']: THREE.MeshPhysicalMaterial
    Frets: THREE.MeshStandardMaterial
    Ivory: THREE.MeshStandardMaterial
    ['Nylon strings']: THREE.MeshPhysicalMaterial
    ['Metal strings']: THREE.MeshStandardMaterial
    Brass: THREE.MeshStandardMaterial
    BlackMetal: THREE.MeshStandardMaterial
    LightWood: THREE.MeshPhysicalMaterial
    Rosette: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshPhysicalMaterial
    Wood: THREE.MeshPhysicalMaterial
    Fingerboard: THREE.MeshStandardMaterial
    ['Mouse - Mat Grey']: THREE.MeshStandardMaterial
    ['Mouse - Shiny Grey']: THREE.MeshStandardMaterial
    ['Mouse - Wheel Grey']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ['porcelain white.002']: THREE.MeshPhysicalMaterial
    coffee: THREE.MeshStandardMaterial
    crome: THREE.MeshStandardMaterial
    ['amarelo metal']: THREE.MeshStandardMaterial
    ['Braco metal']: THREE.MeshStandardMaterial
    ['Plastico preto']: THREE.MeshStandardMaterial
    luz: THREE.MeshStandardMaterial
    website: THREE.MeshStandardMaterial
    vscode: THREE.MeshStandardMaterial
    ['Pine Wood']: THREE.MeshStandardMaterial
    ['Pine Wood']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/pc_table.glb') as GLTFResult
  const [lamp, setLamp] = useState(false)
  const handleLamp = () => {
    setLamp(!lamp)
  }

  return (
    <>
      {lamp && (
        <spotLight
          position={[0.7, 1.13, 0.7]}
          castShadow
          shadowBias={0.1}
          intensity={0.6}
          angle={45}
          penumbra={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      )}
      <group {...props} dispose={null}>
        <group name="Scene">
          <group
            name="Office_Chair"
            position={[0.04, 0.16, -0.4]}
            rotation={[0, 0.46, 0]}
            scale={0.56}
          >
            <group
              name="Office_Chair_REX"
              position={[-0.52, -0.3, -0.44]}
              scale={1.8}
            >
              <mesh
                name="Plane"
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials['Office Chair_Fabric']}
              />
              <mesh
                name="Plane_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
                material={materials['Office Chair_Metal']}
              />
              <mesh
                name="Plane_2"
                castShadow
                receiveShadow
                geometry={nodes.Plane_2.geometry}
                material={materials['Office Chair_Painted Metal']}
              />
              <mesh
                name="Plane_3"
                castShadow
                receiveShadow
                geometry={nodes.Plane_3.geometry}
                material={materials['Office Chair_Plastic']}
              />
            </group>
          </group>
          <group
            name="White_ASUS_VZ249HE-W_LED_monitor"
            position={[-0.35, 0.76, 0.87]}
            rotation={[Math.PI, -0.01, Math.PI]}
          >
            <group
              name="White_ASUS_VZ249HE-W_LED_monitor001"
              position={[0.29, 0, 0.04]}
              rotation={[0, -0.27, 0]}
              scale={1.28}
            >
              <mesh
                name="Cube009"
                castShadow
                receiveShadow
                geometry={nodes.Cube009.geometry}
                material={materials['White Nikon']}
              />
              <mesh
                name="Cube009_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube009_1.geometry}
                material={materials['Screen.001']}
              />
              <mesh
                name="Cube009_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube009_2.geometry}
                material={materials['White Plastic']}
              />
              <mesh
                name="Cube009_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube009_3.geometry}
                material={materials.Metalic}
              />
              <mesh
                name="Cube009_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube009_4.geometry}
                material={materials['White plastic touched']}
              />
              <mesh
                name="Cube009_5"
                castShadow
                receiveShadow
                geometry={nodes.Cube009_5.geometry}
                material={materials.BlackPlastic}
              />
            </group>
            <group
              name="White_ASUS_VZ249HE-W_LED_monitor002"
              position={[-0.41, 0, -0.05]}
              scale={1.28}
            >
              <mesh
                name="Cube010"
                castShadow
                receiveShadow
                geometry={nodes.Cube010.geometry}
                material={materials['White Nikon']}
              />
              <mesh
                name="Cube010_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube010_1.geometry}
                material={materials.Screen}
              />
              <mesh
                name="Cube010_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube010_2.geometry}
                material={materials['White Plastic']}
              />
              <mesh
                name="Cube010_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube010_3.geometry}
                material={materials.Metalic}
              />
              <mesh
                name="Cube010_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube010_4.geometry}
                material={materials['White plastic touched']}
              />
              <mesh
                name="Cube010_5"
                castShadow
                receiveShadow
                geometry={nodes.Cube010_5.geometry}
                material={materials.BlackPlastic}
              />
            </group>
          </group>
          <group
            name="White_ASUS_VZ249HE-W_LED_monitor003"
            position={[0.38, 0.77, 0.7]}
            rotation={[Math.PI, -0.15, Math.PI]}
          />
          <group
            name="Empty007"
            position={[0.83, 0.66, 0.86]}
            rotation={[-Math.PI, 0.01, -Math.PI]}
          >
            <group
              name="Cube067"
              position={[-0.04, 0.12, 0.01]}
              rotation={[1.57, -0.18, -1.56]}
              scale={1.05}
            >
              <mesh
                name="Cube017"
                castShadow
                receiveShadow
                geometry={nodes.Cube017.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube017_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube017_1.geometry}
                material={materials['stacked paper']}
              />
            </group>
            <group
              name="Cube068"
              position={[-0.03, 0.12, 0.01]}
              rotation={[1.57, -0.18, -1.56]}
              scale={1.05}
            >
              <mesh
                name="Cube011"
                castShadow
                receiveShadow
                geometry={nodes.Cube011.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube011_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube011_1.geometry}
                material={materials['stacked paper']}
              />
            </group>
            <group
              name="Cube072"
              position={[-0.1, 0.1, 0]}
              rotation={[1.57, -0.32, -1.56]}
              scale={1.05}
            >
              <mesh
                name="Cube013"
                castShadow
                receiveShadow
                geometry={nodes.Cube013.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube013_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube013_1.geometry}
                material={materials['stacked paper']}
              />
            </group>
            <group
              name="Cube069"
              position={[-0.07, 0.12, 0.01]}
              rotation={[1.57, -0.18, -1.56]}
              scale={1.05}
            >
              <mesh
                name="Cube014"
                castShadow
                receiveShadow
                geometry={nodes.Cube014.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube014_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube014_1.geometry}
                material={materials['stacked paper']}
              />
            </group>
            <group
              name="Cube070"
              position={[-0.18, 0.11, 0.01]}
              rotation={[1.57, -0.34, -1.57]}
              scale={1.05}
            >
              <mesh
                name="Cube015"
                castShadow
                receiveShadow
                geometry={nodes.Cube015.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube015_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube015_1.geometry}
                material={materials['stacked paper']}
              />
            </group>
            <group
              name="Cube071"
              position={[-0.16, 0.12, 0]}
              rotation={[1.57, -0.34, -1.56]}
              scale={1.05}
            >
              <mesh
                name="Cube014_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube014_2.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube014_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube014_3.geometry}
                material={materials['stacked paper']}
              />
            </group>
            <group
              name="Cube075"
              position={[-0.2, 0.11, 0.01]}
              rotation={[1.57, -0.44, -1.56]}
            >
              <mesh
                name="Cube011_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube011_2.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube011_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube011_3.geometry}
                material={materials['stacked paper']}
              />
            </group>
            <group
              name="Cube073"
              position={[-0.12, 0.12, 0]}
              rotation={[1.57, -0.34, -1.56]}
              scale={1.05}
            >
              <mesh
                name="Cube011_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube011_4.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube011_5"
                castShadow
                receiveShadow
                geometry={nodes.Cube011_5.geometry}
                material={materials['stacked paper']}
              />
            </group>
            <group
              name="Cube074"
              position={[-0.13, 0.12, 0.01]}
              rotation={[1.57, -0.34, -1.56]}
              scale={1.05}
            >
              <mesh
                name="Cube012"
                castShadow
                receiveShadow
                geometry={nodes.Cube012.geometry}
                material={materials['book cover']}
              />
              <mesh
                name="Cube012_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube012_1.geometry}
                material={materials['stacked paper']}
              />
            </group>
          </group>
          <group
            name="Wireless_dell_keyboard_and_mouse_kit"
            position={[0.04, 0.56, 0.24]}
            rotation={[Math.PI, -0.01, Math.PI]}
          >
            <mesh
              name="feet"
              castShadow
              receiveShadow
              geometry={nodes.feet.geometry}
              material={materials['Plástico fosco 1']}
              position={[-0.05, 0.01, 0]}
              rotation={[0.09, 0, 0]}
            />
            <group
              name="leds"
              position={[0.14, 0.02, -0.06]}
              rotation={[0.09, 0, 0]}
            >
              <mesh
                name="Icosphere"
                castShadow
                receiveShadow
                geometry={nodes.Icosphere.geometry}
                material={materials.Vidro}
              />
              <mesh
                name="Icosphere_1"
                castShadow
                receiveShadow
                geometry={nodes.Icosphere_1.geometry}
                material={materials.LED}
              />
            </group>
            <mesh
              name="keys"
              castShadow
              receiveShadow
              geometry={nodes.keys.geometry}
              material={materials['Material.002']}
              position={[-0.01, 0.02, -0.03]}
              rotation={[0.09, 0, 0]}
            />
            <mesh
              name="body"
              castShadow
              receiveShadow
              geometry={nodes.body.geometry}
              material={materials['Black Plastic']}
              position={[-0.05, 0.01, 0]}
              rotation={[0.09, 0, 0]}
            />
          </group>
          <group
            name="Guitar"
            position={[-1.16, -0.1, 0.69]}
            rotation={[Math.PI, -1.56, Math.PI]}
          >
            <mesh
              name="Frets"
              castShadow
              receiveShadow
              geometry={nodes.Frets.geometry}
              material={materials.Frets}
            />
            <mesh
              name="Nut"
              castShadow
              receiveShadow
              geometry={nodes.Nut.geometry}
              material={materials.Ivory}
            />
            <mesh
              name="Saddle"
              castShadow
              receiveShadow
              geometry={nodes.Saddle.geometry}
              material={materials.Ivory}
            />
            <group name="Strings">
              <mesh
                name="Plane007"
                castShadow
                receiveShadow
                geometry={nodes.Plane007.geometry}
                material={materials['Nylon strings']}
              />
              <mesh
                name="Plane007_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane007_1.geometry}
                material={materials['Metal strings']}
              />
            </group>
            <mesh
              name="StringsCylinder"
              castShadow
              receiveShadow
              geometry={nodes.StringsCylinder.geometry}
              material={materials.Ivory}
            />
            <group name="Tuning_keys">
              <mesh
                name="Gear"
                castShadow
                receiveShadow
                geometry={nodes.Gear.geometry}
                material={materials.Brass}
              />
              <mesh
                name="Gear_1"
                castShadow
                receiveShadow
                geometry={nodes.Gear_1.geometry}
                material={materials.BlackMetal}
              />
              <mesh
                name="Gear_2"
                castShadow
                receiveShadow
                geometry={nodes.Gear_2.geometry}
                material={materials.Ivory}
              />
            </group>
            <group name="Body">
              <mesh
                name="Circle001"
                castShadow
                receiveShadow
                geometry={nodes.Circle001.geometry}
                material={materials.LightWood}
              />
              <mesh
                name="Circle001_1"
                castShadow
                receiveShadow
                geometry={nodes.Circle001_1.geometry}
                material={materials.Rosette}
              />
              <mesh
                name="Circle001_2"
                castShadow
                receiveShadow
                geometry={nodes.Circle001_2.geometry}
                material={materials.DarkWood}
              />
              <mesh
                name="Circle001_3"
                castShadow
                receiveShadow
                geometry={nodes.Circle001_3.geometry}
                material={materials.Wood}
              />
            </group>
            <group name="Bridge">
              <mesh
                name="Cube029"
                castShadow
                receiveShadow
                geometry={nodes.Cube029.geometry}
                material={materials.Wood}
              />
              <mesh
                name="Cube029_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube029_1.geometry}
                material={materials.Ivory}
              />
            </group>
            <mesh
              name="Neck"
              castShadow
              receiveShadow
              geometry={nodes.Neck.geometry}
              material={materials.Wood}
            />
            <mesh
              name="Fingerboard"
              castShadow
              receiveShadow
              geometry={nodes.Fingerboard.geometry}
              material={materials.Fingerboard}
            />
          </group>
          <group name="Wireless_Mouse" position={[-0.29, 0.56, 0.24]}>
            <mesh
              name="Top"
              castShadow
              receiveShadow
              geometry={nodes.Top.geometry}
              material={materials['Mouse - Mat Grey']}
              position={[0, 0.02, 0]}
            />
            <group name="Base" position={[0, 0.01, 0]}>
              <mesh
                name="Cube031"
                castShadow
                receiveShadow
                geometry={nodes.Cube031.geometry}
                material={materials['Mouse - Shiny Grey']}
              />
              <mesh
                name="Cube031_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube031_1.geometry}
                material={materials['Mouse - Mat Grey']}
              />
            </group>
            <mesh
              name="Wheel"
              castShadow
              receiveShadow
              geometry={nodes.Wheel.geometry}
              material={materials['Mouse - Wheel Grey']}
              position={[0, 0.02, 0.03]}
              rotation={[1.87, 0, 0]}
            />
          </group>
          <mesh
            name="cyl2"
            castShadow
            receiveShadow
            geometry={nodes.cyl2.geometry}
            material={materials.BlackPlastic}
            position={[0.03, 0.01, 0.64]}
            scale={1.18}
          />
          <mesh
            name="cyl1"
            castShadow
            receiveShadow
            geometry={nodes.cyl1.geometry}
            material={materials.BlackPlastic}
            position={[-1.36, 0.01, 0.8]}
            scale={1.18}
          />
          <mesh
            name="cyl3"
            castShadow
            receiveShadow
            geometry={nodes.cyl3.geometry}
            material={materials.BlackPlastic}
            position={[0.03, 0.01, 0.8]}
            scale={1.18}
          />
          <mesh
            name="cyl4"
            castShadow
            receiveShadow
            geometry={nodes.cyl4.geometry}
            material={materials.BlackPlastic}
            position={[-1.36, 0.01, 0.64]}
            scale={1.18}
          />
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.Material}
            position={[-0.3, 0.56, 0.28]}
            scale={[-0.41, 0, -0.32]}
          />
          <mesh
            name="MUG002"
            castShadow
            receiveShadow
            geometry={nodes.MUG002.geometry}
            material={materials['porcelain white.002']}
            position={[-0.18, 0.65, 0.53]}
            rotation={[Math.PI, -0.89, Math.PI]}
          >
            <mesh
              name="Circle"
              castShadow
              receiveShadow
              geometry={nodes.Circle.geometry}
              material={materials.coffee}
              position={[0, 0.07, 0]}
            />
          </mesh>
          <mesh
            name="pccase"
            castShadow
            receiveShadow
            geometry={nodes.pccase.geometry}
            material={materials.BlackMetal}
          />
          <mesh
            name="LIGHTBOLB"
            castShadow
            receiveShadow
            geometry={nodes.LIGHTBOLB.geometry}
            material={nodes.LIGHTBOLB.material}
            position={[0.57, 1.16, 0.69]}
            scale={0}
          />
          <group
            onClick={() => handleLamp()}
            name="Large_light_fixture"
            position={[0.67, 0.75, 0.83]}
            rotation={[0, -0.95, 0]}
          >
            <mesh
              name="Circle011"
              castShadow
              receiveShadow
              geometry={nodes.Circle011.geometry}
              material={materials.crome}
            />
            <mesh
              name="Circle011_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle011_1.geometry}
              material={materials['amarelo metal']}
            />
            <mesh
              name="Circle011_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle011_2.geometry}
              material={materials['Braco metal']}
            />
            <mesh
              name="Circle011_3"
              castShadow
              receiveShadow
              geometry={nodes.Circle011_3.geometry}
              material={materials['Plastico preto']}
            />
            <mesh
              name="Circle011_4"
              castShadow
              receiveShadow
              geometry={nodes.Circle011_4.geometry}
              material={materials.luz}
            />
          </group>
          <mesh
            name="website"
            castShadow
            receiveShadow
            geometry={nodes.website.geometry}
            material={materials.website}
            position={[-0.4, 1.06, 0.68]}
            rotation={[-1.54, 1.42, 0]}
          />
          <mesh
            name="vscode"
            castShadow
            receiveShadow
            geometry={nodes.vscode.geometry}
            material={materials.vscode}
            position={[0, 0.94, 0.63]}
            rotation={[-1.6, 1.54, 0]}
          />
          <mesh
            name="boardbottom"
            castShadow
            receiveShadow
            geometry={nodes.boardbottom.geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.69]}
            scale={1.18}
          />
          <mesh
            name="leg1"
            castShadow
            receiveShadow
            geometry={nodes.leg1.geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.7]}
            scale={1.18}
          />
          <mesh
            name="table-top"
            castShadow
            receiveShadow
            geometry={nodes['table-top'].geometry}
            material={materials['Pine Wood']}
            position={[0.03, -0.02, 0.69]}
            scale={0.11}
          />
          <mesh
            name="stand"
            castShadow
            receiveShadow
            geometry={nodes.stand.geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.64]}
            scale={1.18}
          />
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.88]}
            scale={1.18}
          />
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.91]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={1.18}
          />
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.64]}
            scale={1.18}
          />
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials['Pine Wood']}
            position={[0, 0, 0.7]}
            scale={[1, 1, 0.74]}
          />
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={1.18}
          />
          <mesh
            name="lef-bottom"
            castShadow
            receiveShadow
            geometry={nodes['lef-bottom'].geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.7]}
            scale={1.18}
          />
          <mesh
            name="lef-bottom001"
            castShadow
            receiveShadow
            geometry={nodes['lef-bottom001'].geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.81]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={1.18}
          />
          <mesh
            name="leg1001"
            castShadow
            receiveShadow
            geometry={nodes.leg1001.geometry}
            material={materials['Pine Wood']}
            position={[0.03, 0, 0.81]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={1.18}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/pc_table.glb')
