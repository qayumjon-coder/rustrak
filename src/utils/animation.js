export const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5, 
            staggerChildren: 0.2 
        }
    }
}

export const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
}

export const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
}

export const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
}

export const slideTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
}

export const shortFadeUp = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
}