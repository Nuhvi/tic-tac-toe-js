const Player = (_name, _mark, _score = 0) => {
  const name = () => _name;
  const mark = () => _mark;
  const score = () => _score;
  const updateScore = () => { _score += 1; };
  const changeMark = () => {
    _mark = _mark === 0 ? 1 : 0;
  };

  return {
    name, mark, score, updateScore, changeMark,
  };
};

export default Player;