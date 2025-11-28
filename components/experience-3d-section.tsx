"use client"

import { useRef, Suspense, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows, Html, RoundedBox, Cylinder } from "@react-three/drei"
import type * as THREE from "three"

function IPhoneModel({ color }: { color: string }) {
  const modelRef = useRef<THREE.Group>(null)

  // Color mapping
  const colorMap: Record<string, { body: string; accent: string; camera: string }> = {
    silver: { body: "#e4e4e4", accent: "#c0c0c0", camera: "#2a2a2a" },
    orange: { body: "#c75c00", accent: "#ff6b00", camera: "#1a1a1a" },
    navy: { body: "#1a1a3e", accent: "#2d2d6e", camera: "#0a0a1a" },
  }

  const colors = colorMap[color] || colorMap.orange

  // Auto-rotate with subtle oscillation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5 + state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={modelRef} position={[0, 0, 0]}>
      {/* Phone Body */}
      <RoundedBox args={[2.2, 4.5, 0.35]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color={colors.body} metalness={0.9} roughness={0.15} />
      </RoundedBox>

      {/* Screen (front) */}
      <RoundedBox args={[2, 4.2, 0.02]} radius={0.12} smoothness={4} position={[0, 0, 0.18]}>
        <meshStandardMaterial color="#000000" metalness={0.5} roughness={0.1} />
      </RoundedBox>

      {/* Dynamic Island */}
      <RoundedBox args={[0.8, 0.25, 0.02]} radius={0.1} smoothness={4} position={[0, 1.7, 0.19]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.5} />
      </RoundedBox>

      {/* Camera Module (back) */}
      <RoundedBox args={[1.1, 1.1, 0.15]} radius={0.15} smoothness={4} position={[-0.45, 1.4, -0.22]}>
        <meshStandardMaterial color={colors.accent} metalness={0.85} roughness={0.2} />
      </RoundedBox>

      {/* Main Camera Lens */}
      <Cylinder args={[0.25, 0.25, 0.12, 32]} position={[-0.7, 1.65, -0.32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={colors.camera} metalness={0.9} roughness={0.1} />
      </Cylinder>
      <Cylinder args={[0.18, 0.18, 0.05, 32]} position={[-0.7, 1.65, -0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#0a0a1a" metalness={0.95} roughness={0.05} />
      </Cylinder>

      {/* Ultra Wide Camera */}
      <Cylinder args={[0.22, 0.22, 0.1, 32]} position={[-0.2, 1.65, -0.32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={colors.camera} metalness={0.9} roughness={0.1} />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 0.05, 32]} position={[-0.2, 1.65, -0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#0a0a1a" metalness={0.95} roughness={0.05} />
      </Cylinder>

      {/* Telephoto Camera */}
      <Cylinder args={[0.22, 0.22, 0.1, 32]} position={[-0.45, 1.15, -0.32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={colors.camera} metalness={0.9} roughness={0.1} />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 0.05, 32]} position={[-0.45, 1.15, -0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#0a0a1a" metalness={0.95} roughness={0.05} />
      </Cylinder>

      {/* Flash / LiDAR */}
      <Cylinder args={[0.08, 0.08, 0.05, 32]} position={[-0.7, 1.15, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#f5f5dc"
          metalness={0.3}
          roughness={0.5}
          emissive="#f5f5dc"
          emissiveIntensity={0.1}
        />
      </Cylinder>

      {/* Side Button (Action Button) */}
      <RoundedBox args={[0.05, 0.15, 0.08]} radius={0.02} smoothness={4} position={[-1.13, 1.2, 0]}>
        <meshStandardMaterial color={colors.accent} metalness={0.9} roughness={0.2} />
      </RoundedBox>

      {/* Volume Buttons */}
      <RoundedBox args={[0.05, 0.35, 0.08]} radius={0.02} smoothness={4} position={[-1.13, 0.5, 0]}>
        <meshStandardMaterial color={colors.body} metalness={0.9} roughness={0.2} />
      </RoundedBox>

      {/* Power Button */}
      <RoundedBox args={[0.05, 0.5, 0.08]} radius={0.02} smoothness={4} position={[1.13, 0.8, 0]}>
        <meshStandardMaterial color={colors.body} metalness={0.9} roughness={0.2} />
      </RoundedBox>

      {/* Apple Logo (back) */}
      <mesh position={[0, -0.3, -0.19]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[0.4, 0.5]} />
        <meshStandardMaterial color={colors.body} metalness={0.95} roughness={0.1} opacity={0.6} transparent />
      </mesh>

      {/* USB-C Port */}
      <RoundedBox args={[0.35, 0.08, 0.1]} radius={0.03} smoothness={4} position={[0, -2.22, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
      </RoundedBox>
    </group>
  )
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#f5f5f7]/20 border-t-[#ff6b00] rounded-full animate-spin" />
        <p className="text-[#86868b] text-sm">Loading 3D Model...</p>
      </div>
    </Html>
  )
}

export function Experience3DSection() {
  const [activeColor, setActiveColor] = useState("orange")

  const colors = [
    { id: "silver", name: "Natural Titanium", hex: "#c0c0c0" },
    { id: "orange", name: "Desert Titanium", hex: "#ff6b00" },
    { id: "navy", name: "Blue Titanium", hex: "#1a1a3e" },
  ]

  return (
    <section className="relative bg-[#000000] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[#ff6b00] text-sm font-semibold tracking-wide uppercase mb-4">Interactive</p>
          <h2 className="text-[#f5f5f7] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
            Experience in 3D.
          </h2>
          <p className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto">
            Drag to rotate. Explore every angle of the new iPhone 17 Pro design.
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#1d1d1f] to-[#000000]">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
            <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />
            <pointLight position={[0, -5, 5]} intensity={0.3} color="#ff6b00" />

            <Suspense fallback={<LoadingSpinner />}>
              <IPhoneModel color={activeColor} />
              <Environment preset="city" />
              <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={12} blur={2.5} far={5} />
            </Suspense>

            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={5}
              maxDistance={12}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.5}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>

          {/* Controls Overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#1d1d1f]/80 backdrop-blur-md px-6 py-3 rounded-full">
            <span className="text-[#86868b] text-sm mr-2">Finish:</span>
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setActiveColor(color.id)}
                className={`group relative w-8 h-8 rounded-full transition-all duration-300 ${
                  activeColor === color.id
                    ? "ring-2 ring-white ring-offset-2 ring-offset-[#1d1d1f] scale-110"
                    : "hover:scale-110"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              >
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>

          {/* Gesture Hint */}
          <div className="absolute top-6 right-6 flex items-center gap-2 text-[#86868b] text-sm bg-[#1d1d1f]/60 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <span>Drag to rotate</span>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 rounded-2xl bg-[#1d1d1f]">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#ff6b00]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
            <h3 className="text-[#f5f5f7] font-semibold mb-2">Zoom In</h3>
            <p className="text-[#86868b] text-sm">Pinch or scroll to zoom and see every detail</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#1d1d1f]">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#ff6b00]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-[#f5f5f7] font-semibold mb-2">360° View</h3>
            <p className="text-[#86868b] text-sm">Drag to rotate and explore from any angle</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#1d1d1f]">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#ff6b00]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-[#f5f5f7] font-semibold mb-2">Switch Finish</h3>
            <p className="text-[#86868b] text-sm">Choose your preferred titanium finish</p>
          </div>
        </div>
      </div>
    </section>
  )
}
