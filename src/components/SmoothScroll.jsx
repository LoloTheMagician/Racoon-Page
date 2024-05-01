import { ReactLenis } from 'lenis/react'

function SmoothScroll({ children }) {

    return (
        <ReactLenis options={{
            duration: 1,
            lerp: 0.05,
            easing: (delta) => delta < 0.5
                ? 4 * delta * delta * delta
                : 1 - Math.pow(-2 * delta + 2, 3) / 2
        }} root>
            {
                children
            }
        </ReactLenis>
    )
}

export {
    SmoothScroll
}