import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function Test() {

    const count = useAppSelector(state => state.counters);

  return (
    <div>test {count} </div>
  )
}


