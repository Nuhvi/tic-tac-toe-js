const Sfx = (() => {
  const tickSound = new Audio('assets/sfx/tick.mp3');
  const tockSound = new Audio('assets/sfx/tock.mp3');

  const initialize = () => {
    tickSound.preload = true;
    tickSound.preload = true;
  };

  const tick = () => {
    tickSound.play();
  };

  const tock = () => {
    tockSound.play();
  };

  return {
    initialize,
    tick,
    tock,
  };
})();

export default Sfx;
