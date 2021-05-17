import React from 'react'
import PropTypes from 'prop-types'

function Display({ data }) {
    return (


        <pre style={{width: '50vw', height: '50vh', overflowY: 'scroll', border: '1px solid black', whiteSpace: 'pre-wrap'}}>
            {data ? JSON.stringify(data, null, 4) : null}
        </pre>

            
    )
}

Display.propTypes = {

}

export default Display

