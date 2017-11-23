import React from 'react'

const Column = ( { title, value }) => {

    return (
        <div className="column">
            <b>{title}:</b> {value ? value : "Não informado"}
        </div>
    )

}

export default Column