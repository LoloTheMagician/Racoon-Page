import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Paragraph = ({ children }) => {
    const { props: { value: SlotString } } = children
    const words = Object.values(SlotString).join('').split(' ')

    const element = useRef(null)

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })

    const colors = ['red', 'orange', 'hotpink', 'orangered']
    let counter = 0

    return (
        <motion.p
            ref={element}
            style={{
                opacity: scrollYProgress
            }}
            className="main-header__p"
        >
            {
                words.map((word, i, self) => {
                    const start = i / self.length
                    const end = start + (1 / self.length)
                    counter = counter === colors.length ? 0 : counter += 1
                    return (
                        <Word
                            key={i + word}
                            word={word}
                            range={[start, end]}
                            progress={scrollYProgress}
                            color={colors[counter]}
                        />
                    )
                }
                )
            }
        </motion.p>
    )
}

const Word = ({ word, range, progress, color }) => {
    const opacity = useTransform(progress, range, [0, 1])
    // const color = 'red'
    return (
        <span className='main-header__span'>
            <span className='main-header__span-shadow'>{word}</span>
            <motion.span
                style={{
                    opacity: opacity,
                    color: color
                }}
            >
                {word}
            </motion.span>
        </span>
    )

}


export {
    Paragraph
}