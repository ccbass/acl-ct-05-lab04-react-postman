import React, { useState, useEffect } from 'react'
import { PostmanControls } from '../components/postman/Controls'
import Display from '../components/postman/Display'
import useFetchWithUrl from '../components/postman/Hooks'
import { PostmanHistory } from '../components/postman/History'

export function PostmanContainer() {
  const [ method, setMethod ] = useState(null)
  const [ url, setUrl ] = useState(null)
  const [body, setBody] = useState(null)
  const [ history, setHistory ] = useState([])
  const { status, data, fetchData } = useFetchWithUrl(url, method, body)


  function handleMethod (e) {
    setMethod(e.target.value)
  }

  function handleUrl (e) {
    setUrl(e.target.value)
  }

  function handleBody (e) {
    setBody(e.target.value)
  }

  function handleSubmit () {
    console.log('submitted')
    fetchData()
    setHistory(prevArr => [...prevArr, {method, url}])
  }

  return (
    <div style={{ display: 'flex' }}>
        <div>
          <h2>Mailman Clone</h2>

          <PostmanControls 
            handleMethod={handleMethod} 
            handleUrl={handleUrl} 
            handleSubmit={handleSubmit} 
            handleBody={handleBody}
            method={method}
          />


          <Display 
            data={data} 
          />

        </div>
        <div>
          <PostmanHistory 
            historyArr={history}
          />

        </div>
    </div>
  )

}
