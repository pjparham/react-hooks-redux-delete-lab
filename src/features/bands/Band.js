import React from 'react'
import { bandRemoved } from "./bandsSlice";
import { useDispatch } from 'react-redux';

export default function Band({ band }) {
  const dispatch = useDispatch()

  function onDeleteBand(){
    dispatch(bandRemoved(band.id))
  }


  return (
    <li>{band.name}<button onClick={onDeleteBand}>Delete Band</button></li>
  )
}
