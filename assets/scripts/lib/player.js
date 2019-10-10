const Player = (name, mark, score = 0) => {
  const getName = () => name;
  const getMark = () => mark;
  const getScore = () => score;
  const updateScore = () => { score += 1; };
  const changeMark = () => {
    mark = mark === 'x' ? 'o' : 'x';
  };

  return {
    getName, getMark, getScore, updateScore, changeMark,
  };
};

export default Player;
