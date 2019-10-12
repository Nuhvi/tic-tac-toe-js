const Player = (name, mark) => {
  let score = 0;

  const getName = () => name;
  const getMark = () => mark;
  const getScore = () => score;

  const updateScore = () => {
    score += 1;
  };
  const switchMark = () => {
    mark = mark === 'x' ? 'o' : 'x';
  };

  return {
    getName,
    getMark,
    getScore,
    updateScore,
    switchMark,
  };
};

export default Player;