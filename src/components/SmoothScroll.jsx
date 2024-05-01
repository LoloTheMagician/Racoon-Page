import { ReactLenis } from 'lenis/react'

function SmoothScroll({ children }) {

    return (
        <ReactLenis options={{
            duration: 1,
            lerp: 0.05,
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