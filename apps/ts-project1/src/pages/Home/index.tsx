import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Action } from 'typesafe-actions';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

export default function Home() {
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories
  );
  const dispatch = useDispatch<Dispatch<Action>>();

  useEffect(() => {
    dispatch(RepositoriesActions.loadRequest());
  }, [dispatch]);

  return (
    <>
      <ul>
        {repositories.data.map(ex => (
          <li key={ex.id}>{ex.name}</li>
        ))}
      </ul>
    </>
  );
}
