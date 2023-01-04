import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import lottieJson from './lottie/scroll-down.json';

export default function ScrollDown({ className }: { className?: string }) {
  return (
    <Lottie
      className={`h-20 md:h-[90px] ${className ?? ''}`}
      loop
      animationData={lottieJson}
      play
    />
  );
}
