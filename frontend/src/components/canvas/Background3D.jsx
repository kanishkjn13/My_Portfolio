import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function StarBackground() {
  const ref = useRef();
  // Using maath to spread points randomly inside a sphere geometry
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 10 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 40;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-[-1] min-h-screen w-full bg-transparent overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
        <Preload all />
      </Canvas>
    </div>
  );
}
