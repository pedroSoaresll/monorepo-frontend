import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from '../../store'
import * as ExampleActions from '../../store/ducks/example/actions'

export default function Home() {
  const [value, setValue] = useState('')
  const examples = useSelector((state: ApplicationState) => state.examples)
  const dispatch = useDispatch()

  function handleAdd() {
    dispatch(ExampleActions.sum(parseInt(value), 2))
    setValue('')
  }

  return (
    <>
      <h1>Ola mundo: Home --</h1>
      <ul>{ examples.data.map(ex => (
        <li>{ex}</li>
      )) }</ul>

      <input type="number" value={value} onInput={(e) => setValue(e.currentTarget.value)}/>

      <button onClick={handleAdd}>Adicionar</button>
    </>

  );
}
