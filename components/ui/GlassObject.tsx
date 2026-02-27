'use client'

import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial, Environment, Float, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

function Scene() {
    const meshRef = useRef<THREE.Mesh>(null)
    const lightRef = useRef<THREE.PointLight>(null)
    const { viewport, mouse } = useThree()
    const [active, setActive] = useState(false)

    const { scale, intensity } = useSpring({
        scale: active ? 1.18 : 1,
        intensity: active ? 160 : 60,
        config: active
            ? { mass: 1, tension: 500, friction: 10 }
            : { mass: 1, tension: 120, friction: 18 },
        onRest: () => {
            if (active) setActive(false)
        },
    })

    const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.2, 3), [])

    useFrame(() => {
        if (!meshRef.current) return

        // Continuous slow spin
        meshRef.current.rotation.y += 0.004
        meshRef.current.rotation.z += 0.0015

        // Shiver when active
        if (active) {
            meshRef.current.position.x = (Math.random() - 0.5) * 0.12
            meshRef.current.position.y = (Math.random() - 0.5) * 0.12
        } else {
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, 0, 0.12)
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, 0, 0.12)
        }

        // Follow cursor as proximity light
        if (lightRef.current) {
            const x = (mouse.x * viewport.width) / 2
            const y = (mouse.y * viewport.height) / 2
            lightRef.current.position.set(x, y, 5)
        }
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <Environment preset="city" />

            {/* Cursor-proximity light (shine) */}
            <animated.pointLight
                ref={lightRef}
                intensity={intensity}
                color="#08979C"
                distance={22}
                decay={2}
            />
            <ambientLight intensity={0.15} />

            <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
                <animated.mesh
                    ref={meshRef}
                    onClick={() => { if (!active) setActive(true) }}
                    scale={scale}
                >
                    <primitive object={geometry} />
                    <MeshTransmissionMaterial
                        backside
                        thickness={1.5}
                        roughness={0.04}
                        transmission={1}
                        ior={1.5}
                        chromaticAberration={0.06}
                        anisotropy={0.1}
                        distortion={0.4}
                        distortionScale={0.5}
                        temporalDistortion={0.15}
                        color="#ffffff"
                    />
                </animated.mesh>
            </Float>
        </>
    )
}

export default function GlassObject() {
    return (
        <div className="w-full h-full cursor-pointer">
            <Canvas shadows gl={{ antialias: true, alpha: true }}>
                <Scene />
            </Canvas>
        </div>
    )
}
