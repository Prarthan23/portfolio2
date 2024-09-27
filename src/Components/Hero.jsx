/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import { MeshPhongMaterial, MeshStandardMaterial, Vector3, DoubleSide } from 'three'

extend({ MeshPhongMaterial, MeshStandardMaterial })

const OrbitingLight = () => {
  const lightRef = useRef()
  const radius = 8
  const speed = 0.8
  const yOffset = 0.5
  const center = new Vector3(0, 0, 0)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    const x = Math.cos(t) * radius
    const z = Math.sin(t) * radius
    lightRef.current.position.set(x, yOffset, z)
    lightRef.current.lookAt(center)
  })

  return (
    <pointLight ref={lightRef} color={0xffffff} intensity={5} distance={80} decay={2} />
  )
}

const ResponsiveText = ({ children, fontSize, position, ...props }) => {
  const { size } = useThree()
  const scale = Math.min(1, size.width / 1000) // Adjust 1000 to your needs

  return (
    <Text
      fontSize={fontSize * scale}
      position={position.map(p => p * scale)}
      {...props}
    >
      {children}
    </Text>
  )
}

const StaticText = () => {
  const textRef = useRef()
  const subtitleRef = useRef()

  useEffect(() => {
    if (textRef.current) {
      textRef.current.geometry.center()
    }
    if (subtitleRef.current) {
      subtitleRef.current.geometry.center()
    }
  }, [])

  return (
    <group>
      <ResponsiveText
        ref={textRef}
        fontSize={2.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.2}
        textAlign="center"
        receiveShadow
        castShadow
        position={[0, 1, 0]}
      >
        PRARTHAN
        <meshPhongMaterial
          attach="material"
          color={0xffffff}
          emissive={0x000000}
          specular={0xffffff}
          shininess={100}
          side={DoubleSide}
        />
      </ResponsiveText>
      <ResponsiveText
        ref={subtitleRef}
        fontSize={1}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        receiveShadow
        castShadow
        position={[0, -1, 0]}
      >
        Web Developer
        <meshPhongMaterial
          attach="material"
          color={0xC0C0C0}
          emissive={0x000000}
          specular={0xffffff}
          shininess={100}
          side={DoubleSide}
        />
      </ResponsiveText>
    </group>
  )
}       

const Hero = () => {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas 
        camera={{ position: [0, 0, 12] }}
        style={{ width: '100%', height: '100%' }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.03} />
          <StaticText />
          <OrbitingLight />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-transparent pointer-events-auto md:pointer-events-none" />
    </div>
  )
}

export default Hero