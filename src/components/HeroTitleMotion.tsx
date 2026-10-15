import { useEffect, useState } from 'react';
import { GradientCycleText } from '@ai-animate/core';

interface Props {
  title: string;
}

/** Cobalt cycle — matches site accent, avoids purple AI-default gradients. */
const TITLE_COLORS = ['#1a4b86', '#3d7cc4', '#8eb4e8', '#5a9ad4', '#1a4b86'];

export default function HeroTitleMotion({ title }: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.querySelector<HTMLElement>('[data-hero-title-fallback]')?.setAttribute('hidden', '');
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  if (reduceMotion) {
    return <p className="hero-title">{title}</p>;
  }

  return (
    <p className="hero-title" aria-label={title}>
      <GradientCycleText
        text={title}
        colors={TITLE_COLORS}
        duration={5}
        fontSize="clamp(1.05rem, 2.2vw, 1.25rem)"
        fontWeight={560}
        background="transparent"
        className="hero-title-gradient"
        style={{
          display: 'block',
          padding: 0,
          lineHeight: 1.35,
          letterSpacing: '-0.015em',
        }}
      />
    </p>
  );
}
