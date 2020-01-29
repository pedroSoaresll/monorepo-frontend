import { action } from 'typesafe-actions'
import { ExamplesTypes } from './types'

export const sum = (a: number, b: number) => action(ExamplesTypes.SUM_REQUEST, { a, b });
