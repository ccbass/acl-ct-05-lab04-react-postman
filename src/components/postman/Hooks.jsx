import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function useFetchWithUrl(url, method, body) {
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState(null)
    const [submit, setSubmit] = useState(false)

    const fetchData = () => setSubmit(true)


    useEffect (() => {
        
        if (submit){
            fetch(url, {
                'method': method, 
                body: ['POST', 'PUT'].includes(method) ? JSON.stringify(JSON.parse(body)) : null,
                headers: {
                    'Content-type': 'application/json',
                  }
            })
                .then(res => {
                    if (res.ok){
                        return res.json()
                    }
                    else{
                        return res.status
                    }
                })
                .then(res => {
                    if(typeof res === 'object'){
                        setData(res)
                        setStatus('fulfilled')
                    }
                    else{
                        setData(res)
                        setStatus('server response')
                    }
                    setSubmit(false)
                })
                .catch(err => {
                    setStatus('invalid domain/network error')
                    setSubmit(false)
                    setData('invalid URL/Resource/Method')
                })
        }

    }, [submit])
    
    return {status, data, fetchData}
    
}

useFetchWithUrl.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default useFetchWithUrl


