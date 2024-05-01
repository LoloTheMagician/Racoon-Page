import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const Text = ({ children, animation }) => {

    const title = useRef('')

    const { scrollYProgress } = useScroll({
        target: title,
        offset: animation
    })

    return (
        <motion.div
            ref={title}
            style={{
                opacity: scrollYProgress
            }}
        >
            {children}
        </motion.div>
    )
}

export {
    Text
}