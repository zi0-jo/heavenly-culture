import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import lottieJson from './lottie/scroll-down.json';

export default function ScrollDown({ className }: { className?: string }) {
  return (
    <Lottie
      className={`md:h-30 h-20 ${className}`}
      loop
      animationData={lottieJson}
      play
    />
  );
}
