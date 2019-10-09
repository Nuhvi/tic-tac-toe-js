const UI = (() => {
  const renderCell = (cell, mark) => {
    document.body.querySelector(`.cell[data-id="${cell}"]`).classList.add(`${mark}`);
  };

  const getPlayersNames = () => ['player_1', 'player_2'];

  return {
    getPlayersNames,
    renderCell,
  };
})();

export default UI;
