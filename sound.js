const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(frequency = 440, duration = 2) {
  const oscillator = audioCtx.createOscillator();
  const envelope = audioCtx.createGain();
  oscillator.connect(envelope);
  envelope.connect(audioCtx.destination);
  envelope.gain.setValueAtTime(0, audioCtx.currentTime);
  envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
  envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration);
}
playSound();
