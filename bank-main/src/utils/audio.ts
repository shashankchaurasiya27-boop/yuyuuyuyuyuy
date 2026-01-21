// Simple Web Audio API synthesizer for game sounds

const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();

const playTone = (freq: number, type: OscillatorType, duration: number, startTime: number = 0) => {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime + startTime);
  
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime + startTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + startTime + duration);
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc.start(audioCtx.currentTime + startTime);
  osc.stop(audioCtx.currentTime + startTime + duration);
};

export const playClick = () => {
  playTone(800, 'square', 0.05);
};

export const playCorrect = () => {
  playTone(600, 'sine', 0.1, 0);
  playTone(1200, 'sine', 0.2, 0.1);
};

export const playWrong = () => {
  playTone(300, 'sawtooth', 0.2, 0);
  playTone(200, 'sawtooth', 0.3, 0.15);
};

export const playSuccess = () => {
  const now = 0;
  playTone(523.25, 'triangle', 0.2, now);       // C5
  playTone(659.25, 'triangle', 0.2, now + 0.1); // E5
  playTone(783.99, 'triangle', 0.2, now + 0.2); // G5
  playTone(1046.50, 'triangle', 0.4, now + 0.3); // C6
};
