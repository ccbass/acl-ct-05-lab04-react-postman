import React from 'react'
import PropTypes, { object } from 'prop-types'

export function PostmanHistory ({ historyArr }) {
    return(
        <div>
            <h3>History:</h3>
            {historyArr.map((item, ind) => 
                <div key={`${item.method}-${item.url}-${ind}`}>
                    {item.method} - {item.url}
                </div>)}
            
        </div>
    )
}

PostmanHistory.PropTypes = {
    historyArr: PropTypes.arrayOf(object)
}