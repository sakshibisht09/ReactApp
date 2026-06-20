
import React, { useContext } from 'react'
import Data from './context'

export default function M() {

    let ans = useContext(Data);

  return (
    <div>
        <h1>M Component</h1>
        <h4>Data : {ans}</h4>
    </div>
  )
}
