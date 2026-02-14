import React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

type AnimationType = "spring" | "smooth" | "elastic"
type Orientation = "horizontal" | "vertical"

interface PillNavContextValue {
    value?: string
    onValueChange?: (value: string) => void
    orientation: Orientation
    animationType: AnimationType
    disabled?: boolean
}

const PillNavContext = React.createContext<PillNavContextValue | undefined>(undefined)

interface PillNavProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
    orientation?: Orientation
    animationType?: AnimationType
    fullWidth?: boolean
    disabled?: boolean
    children: React.ReactNode
    className?: string
}

/**
 * PillNav
 * 
 * A fluid navigation component with animated active state.
 */
function PillNav({
    value: controlledValue,
    defaultValue,
    onValueChange,
    orientation = "horizontal",
    animationType = "spring",
    fullWidth = false,
    disabled = false,
    className,
    children,
    ...props
}: PillNavProps) {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : uncontrolledValue

    const handleValueChange = React.useCallback((newValue: string) => {
        if (!isControlled) {
            setUncontrolledValue(newValue)
        }
        onValueChange?.(newValue)
    }, [isControlled, onValueChange])

    // Keyboard Navigation
    const containerRef = React.useRef<HTMLDivElement>(null)

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return
        
        const items = Array.from(containerRef.current?.querySelectorAll('[role="tab"]:not([disabled])') || []) as HTMLButtonElement[]
        const currentIndex = items.indexOf(document.activeElement as HTMLButtonElement)
        
        let nextIndex = currentIndex

        if (orientation === "horizontal") {
            if (e.key === "ArrowRight") nextIndex = currentIndex + 1
            if (e.key === "ArrowLeft") nextIndex = currentIndex - 1
        } else {
            if (e.key === "ArrowDown") nextIndex = currentIndex + 1
            if (e.key === "ArrowUp") nextIndex = currentIndex - 1
        }

        if (nextIndex >= 0 && nextIndex < items.length && nextIndex !== currentIndex) {
            e.preventDefault()
            items[nextIndex].focus()
            // Optional: Automatically select on focus? 
            // Usually for tabs, selection follows focus or explicit enter. 
            // Let's keep it manual selection (Enter/Space) for now to allow browsing without activating?
            // Actually, "Pill Nav" often implies immediate selection. Let's trigger change.
            items[nextIndex].click()
        }
    }

    return (
        <PillNavContext.Provider value={{ value, onValueChange: handleValueChange, orientation, animationType, disabled }}>
            <LayoutGroup id={React.useId()}>
                <div
                    ref={containerRef}
                    className={`inline-flex ${orientation === "vertical" ? "flex-col" : "flex-row"} ${fullWidth ? "w-full" : ""} p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl relative overflow-hidden ring-1 ring-black/5 dark:ring-white/5 ${className || ""}`}
                    role="tablist"
                    aria-orientation={orientation}
                    onKeyDown={handleKeyDown}
                    {...props}
                >
                    {children}
                </div>
            </LayoutGroup>
        </PillNavContext.Provider>
    )
}

interface PillNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
    disabled?: boolean
    children: React.ReactNode
    className?: string
}

const TRANSITIONS = {
    spring: { type: "spring", stiffness: 300, damping: 30 },
    smooth: { type: "tween", ease: "easeInOut", duration: 0.3 },
    elastic: { type: "spring", stiffness: 300, damping: 20 }, // bouncier
}

function PillNavItem({
    value,
    disabled,
    className,
    children,
    ...props
}: PillNavItemProps) {
    const context = React.useContext(PillNavContext)
    if (!context) throw new Error("PillNav.Item must be used within PillNav")

    const isActive = context.value === value
    const isDisabled = disabled || context.disabled

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={isDisabled}
            onClick={() => !isDisabled && context.onValueChange?.(value)}
            className={`
                relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors duration-200 outline-none select-none rounded-lg
                ${isActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"}
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                ${className || ""}
            `}
            {...props}
        >
            {isActive && (
                <motion.div
                    layoutId="pill-nav-indicator"
                    className="absolute inset-0 bg-white dark:bg-neutral-700 shadow-sm rounded-lg -z-10"
                    initial={false}
                    transition={TRANSITIONS[context.animationType] as any}
                    style={{
                        originY: "0px" // Helps with some layout shifts
                    }}
                />
            )}
            <span className="relative z-10">{children}</span>
        </button>
    )
}

// Subcomponent assignment
const PillNavNamespace = Object.assign(PillNav, {
    Item: PillNavItem
})

export { PillNavNamespace as PillNav }
