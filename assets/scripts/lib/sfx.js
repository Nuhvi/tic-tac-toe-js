const Sfx = (() => {
  const tickSound = new Audio('assets/sfx/tick.mp3');
  tickSound.preload = true;
  const tockSound = new Audio('assets/sfx/tock.mp3');
  tickSound.preload = true;

  const tick = () => {
    tickSound.play();
  };

  const tock = () => {
    tockSound.play();
  };

  return {
    tick,
    tock,
  };
})();

export default Sfx;