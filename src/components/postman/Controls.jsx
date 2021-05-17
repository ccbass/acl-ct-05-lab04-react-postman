import React from 'react'
import PropTypes from 'prop-types'

export function PostmanControls ({handleMethod, handleUrl, handleSubmit, handleBody, method}) {
    return (
        <div>
            <input style={{width: '50vw'}} type="text" onChange={handleUrl}/>
            <br />
            <button onClick={handleSubmit}>Submit Request</button>
            <br />
            Selected method: {method ? method : 'Choose method below!'}
            <br />

            <button value="GET" onClick={handleMethod}>GET</button>
            <button value="POST" onClick={handleMethod}>POST</button>
            <button value="PUT" onClick={handleMethod}>PUT</button>
            <button value="DELETE" onClick={handleMethod}>DELETE</button>
            
            <br />
            <textarea 
                style={{width: '50vw', height: '15vh', overflowY: 'scroll', border: '1px solid black', whiteSpace: 'pre-wrap'}} 
                type="text" 
                onChange={handleBody} 
                placeholder={'Insert JSON here:'}
            />

        </div>
    )
}

PostmanControls.PropTypes = {
    handleMethod: PropTypes.func.isRequired, 
    handleUrl: PropTypes.func.isRequired, 
    handleSubmit: PropTypes.func.isRequired, 
    handleBody: PropTypes.func.isRequired, 
    method: PropTypes.string,
}