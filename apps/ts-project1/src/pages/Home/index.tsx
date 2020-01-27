import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import IState from '../../interfaces/IState'
import * as ExampleActions from '../../store/modules/example/action'

export default function Home() {
  const [value, setValue] = useState('')
  const example = useSelector((state: IState) => state.example)
  const dispatch = useDispatch()

  function handleAdd() {
    dispatch(ExampleActions.sum(parseInt(value), 2))
    setValue('')
  }

  return (
    <>
      <h1>Ola mundo: Home --</h1>
      <ul>{ example.map(ex => (
        <li>{ex}</li>
      )) }</ul>

      <input type="number" value={value} onInput={(e) => setValue(e.currentTarget.value)}/>

      <button onClick={handleAdd}>Adicionar</button>
    </>

  );
}
