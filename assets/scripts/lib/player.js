const Player = (type) => {
  let name;
  let mark;
  let score = 0;

  if (type === 'p1') {
    name = 'Player 1';
    mark = 'x';
  } else {
    mark = 'o';
    if (type === 'p2') {
      name = 'Player 2';
      mark = 'o';
    }
  }


  const setName = (_name) => {
    name = _name;
  };
  const getName = () => name;
  const getMark = () => mark;
  const getScore = () => score;
  const getType = () => type;
  const updateScore = () => {
    score += 1;
  };
  const switchMark = () => {
    mark = mark === 'x' ? 'o' : 'x';
  };

  return {
    setName,
    getName,
    getMark,
    getScore,
    getType,
    updateScore,
    switchMark,
  };
};

export default Player;