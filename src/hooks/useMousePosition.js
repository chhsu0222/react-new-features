import { useState, useEffect } from 'react'

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.pageX,
                y: event.pageY
            })
        }

        document.addEventListener('mousemove', handleMouseMove)

        // Do some clean up
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return position
}

export { useMousePosition as default }
