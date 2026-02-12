import React, { useEffect, useState, useRef } from "react";
import { 
    motion, 
    useSpring, 
    useMotionValue, 
    useReducedMotion,
    AnimatePresence,
} from "framer-motion";

/**
 * TargetCursor v2 (Reticle Edition)
 * 
 * A high-end reticle-style cursor that snaps to element boundaries.
 * Features:
 * - 4 corner brackets
 * - Precision center dot
 * - Dimensions-aware element snapping
 * 
 * @author Antigravity
 */

export interface TargetCursorProps {
    /** Primary brand color */
    color?: string;
    /** Padding around the element when snapped */
    padding?: number;
    /** Transition smoothing */
    stiffness?: number;
    /** Custom class for the wrapper */
    className?: string;
}

export function TargetCursor({
    color = "#8B5CF6", // Violet
    padding = 8,
    stiffness = 400,
    className = "",
}: TargetCursorProps) {
    const shouldReduceMotion = useReducedMotion();
    
    // State
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [hoverType, setHoverType] = useState<string | null>(null);

    // Movement tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Target dimensions for snapping
    const targetWidth = useMotionValue(24);
    const targetHeight = useMotionValue(24);

    // Physics
    const springConfig = { damping: 35, stiffness: stiffness, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    const width = useSpring(targetWidth, springConfig);
    const height = useSpring(targetHeight, springConfig);

    useEffect(() => {
        if (shouldReduceMotion) return;

        document.body.style.cursor = "none";
        const style = document.createElement("style");
        style.innerHTML = `* { cursor: none !important; } .custom-cursor-area { cursor: cell; }`;
        document.head.appendChild(style);

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            const target = (e.target as HTMLElement).closest('[data-cursor-target="true"]');
            
            if (target) {
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                mouseX.set(centerX);
                mouseY.set(centerY);
                targetWidth.set(rect.width + padding * 2);
                targetHeight.set(rect.height + padding * 2);
                
                setIsHovering(true);
                setHoverType(target.getAttribute("data-cursor-type") || "default");
            } else {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
                targetWidth.set(24); // Idle reticle size
                targetHeight.set(24);
                
                setIsHovering(false);
                setHoverType(null);
            }
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            document.body.style.cursor = "auto";
            document.head.removeChild(style);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY, targetWidth, targetHeight, isVisible, shouldReduceMotion, padding]);

    if (shouldReduceMotion) return null;

    return (
        <div className={`fixed inset-0 pointer-events-none z-[9999] overflow-hidden ${className}`}>
            <motion.div
                animate={{
                    rotate: isHovering ? 0 : 360,
                }}
                transition={{
                    rotate: isHovering 
                        ? { type: "spring", stiffness: 300, damping: 30 } 
                        : { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                style={{
                    x: cursorX,
                    y: cursorY,
                    width: width,
                    height: height,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
                className="relative flex items-center justify-center p-0"
            >
                {/* 4 Corner Brackets */}
                <div className="absolute inset-0">
                    {/* Top Left */}
                    <motion.div 
                        animate={{ 
                            scale: isClicked ? 0.8 : 1,
                        }}
                        style={{ borderColor: color }}
                        className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" 
                    />
                    {/* Top Right */}
                    <motion.div 
                        animate={{ 
                            scale: isClicked ? 0.8 : 1,
                        }}
                        style={{ borderColor: color }}
                        className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" 
                    />
                    {/* Bottom Left */}
                    <motion.div 
                        animate={{ 
                            scale: isClicked ? 0.8 : 1,
                        }}
                        style={{ borderColor: color }}
                        className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" 
                    />
                    {/* Bottom Right */}
                    <motion.div 
                        animate={{ 
                            scale: isClicked ? 0.8 : 1,
                        }}
                        style={{ borderColor: color }}
                        className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" 
                    />
                </div>

                {/* Precision Center Dot */}
                <motion.div
                    animate={{
                        scale: isHovering ? 0 : 1,
                        opacity: isHovering ? 0 : 1,
                    }}
                    style={{ backgroundColor: color }}
                    className="w-1 h-1 rounded-full shadow-[0_0_8px_rgba(255,255,240,0.6)]"
                />

                {/* Snap Indicator (Subtle background) */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.05 }}
                            exit={{ opacity: 0 }}
                            style={{ backgroundColor: color }}
                            className="absolute inset-0 rounded-sm"
                        />
                    )}
                </AnimatePresence>

                {/* Contextual Label */}
                <AnimatePresence>
                    {isHovering && hoverType && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: height.get() / 2 + 15 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute pointer-events-none whitespace-nowrap"
                        >
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8B5CF6] opacity-80">
                                {hoverType}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
