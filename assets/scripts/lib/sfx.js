const Sfx = (() => {
  const tickSound = new Audio('assets/sfx/tick.mp3');
  const tockSound = new Audio('assets/sfx/tock.mp3');
  const winSound = new Audio('assets/sfx/win.mp3');


  const initialize = () => {
    tickSound.preload = true;
    tickSound.preload = true;
    winSound.preload = true;
  };

  const tick = () => { tickSound.play(); };
  const tock = () => { tockSound.play(); };
  const win = () => { winSound.play(); };

  return {
    initialize,
    tick,
    tock,
    win,
  };
})();

export default Sfx;
