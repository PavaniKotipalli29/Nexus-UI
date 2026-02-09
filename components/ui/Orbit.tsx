import * as React from "react"
import { motion, useReducedMotion, useAnimation, useAnimationFrame, useMotionValue, useTransform } from "framer-motion"

/**
 * Orbit Component
 * 
 * A decorative animation component where elements revolve around a center point.
 * Items are positioned using polar coordinates via a specific transform stack.
 * Animation is applied to the container, with optional counter-rotation for items.
 * 
 * @author Antigravity
 */

interface OrbitProps {
    radius: number
    speed: number
    direction: "clockwise" | "anticlockwise"
    itemSize: number
    keepUpright: boolean
    pauseOnHover: boolean
    borderRadius: number
    children?: React.ReactNode
}

export function Orbit(props: OrbitProps) {
    const {
        radius = 150,
        speed = 10,
        direction = "clockwise",
        itemSize = 60,
        keepUpright = true,
        pauseOnHover = false,
        borderRadius = 0,
        children,
    } = props

    const shouldReduceMotion = useReducedMotion()
    const childrenArray = React.Children.toArray(children)
    const itemCount = childrenArray.length

    // State to track hover
    const [isHovered, setIsHovered] = React.useState(false)

    // Motion values for smooth control and pausing
    const rotation = useMotionValue(0)
    
    // Manual animation loop to support seamless pausing and reduced motion
    useAnimationFrame((time: number, delta: number) => {
        if (shouldReduceMotion) {
            rotation.set(0)
            return
        }

        if (pauseOnHover && isHovered) return

        const degreesPerMs = 360 / (speed * 1000)
        const moveAmount = degreesPerMs * delta
        const currentRotation = rotation.get()
        
        if (direction === "clockwise") {
            rotation.set((currentRotation + moveAmount) % 360)
        } else {
            rotation.set((currentRotation - moveAmount) % 360)
        }
    })

    // To keep items upright, they must rotate by -rotation (the container's rotation)
    const counterRotation = useTransform(rotation, (r: number) => -r)

    const containerStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
    }

    const orbitContainerStyle: React.CSSProperties = {
        width: 0,
        height: 0,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div 
            style={containerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                style={{
                    ...orbitContainerStyle,
                    rotate: rotation,
                }}
            >
                {childrenArray.map((child, index) => {
                    // Orbit Math:
                    // Angle per item = 360 / itemCount
                    const angle = (360 / itemCount) * index
                    
                    const itemWrapperStyle: React.CSSProperties = {
                        position: "absolute",
                        width: itemSize,
                        height: itemSize,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: borderRadius,
                        overflow: "hidden",
                        // Transform stack per item (Mandatory):
                        // 1. rotate(angle)
                        // 2. translateX(radius)
                        // 3. rotate(-angle) (optional)
                        transform: `rotate(${angle}deg) translateX(${radius}px) ${
                            keepUpright ? `rotate(-${angle}deg)` : ""
                        }`,
                    }

                    return (
                        <div key={index} style={itemWrapperStyle}>
                            <motion.div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // Counter-rotate the container's rotation to remain upright relative to screen
                                    rotate: keepUpright && !shouldReduceMotion ? counterRotation : 0,
                                }}
                            >
                                {child}
                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

