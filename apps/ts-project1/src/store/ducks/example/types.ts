/**
 * Action Types
 */
export enum ExamplesTypes {
  SUM_REQUEST = '@example/SUM_REQUEST',
  SUM_SUCCESS = '@example/SUM_SUCCESS',
  SUM_FAILURE = '@example/SUM_FAILURE',
}

/**
 * Data types
 */

//  export interface Example {
//     sum: number
//  }

 /**
  * State type
  */

export interface ExamplesState {
  data: number[]
}
