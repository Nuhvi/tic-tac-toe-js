"use-strict"

const board = (() => {
  const state = [[null,null,null], [null,null,null], [null,null,null]];
  
  const get = () => state ;

  const set = (row, column, mark) => {
    state[row][column] = mark;
  };

  return { get, set };
})()
