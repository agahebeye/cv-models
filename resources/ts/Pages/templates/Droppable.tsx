import {useDroppable} from '@dnd-kit/core'
import React from 'react'

type DropabbleProps = {
    className?: string,
    children?: React.ReactNode
}

function Droppable({className, children}: DropabbleProps) {
    return <div>
        {children}
    </div>
}

export default Droppable