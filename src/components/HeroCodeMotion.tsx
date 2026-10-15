import { useEffect, useState } from 'react';
import { MorphText, StreamText } from '@ai-animate/core';

const CODE = `public class PaymentGateway
{
  public async Task SettleAsync()
  {
    await bus.Publish(new Settled());
  }
}`;

const FOCUS = ['APIs', 'gateways', 'microservices', 'platforms'];

export default function HeroCodeMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.querySelector<HTMLElement>('[data-hero-fallback]')?.setAttribute('hidden', '');
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <div className="hero-code" aria-label="Animated code sample">
      <div className="hero-code-chrome" aria-hidden="true">
        <span className="hero-code-dot" />
        <span className="hero-code-dot" />
        <span className="hero-code-dot" />
        <span className="hero-code-file">PaymentGateway.cs</span>
      </div>

      <pre className="hero-code-body">
        {reduceMotion ? (
          <code>{CODE}</code>
        ) : (
          <StreamText
            className="hero-code-stream"
            text={CODE}
            mode="char"
            speed={26}
            holdMs={2400}
            loop
            cursorChar="▋"
            cursorColor="var(--accent)"
            fontSize="0.88rem"
            color="var(--ink)"
            background="transparent"
            fontWeight={400}
            style={{
              display: 'block',
              width: '100%',
              height: 'calc(0.88rem * 1.65 * 7)',
              minHeight: 'calc(0.88rem * 1.65 * 7)',
              maxHeight: 'calc(0.88rem * 1.65 * 7)',
              padding: 0,
              borderRadius: 0,
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.65,
              whiteSpace: 'pre',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}
          />
        )}
      </pre>

      <p className="hero-code-focus">
        <span className="hero-code-focus-label">Building</span>
        {reduceMotion ? (
          <span className="hero-code-focus-word">{FOCUS[0]}</span>
        ) : (
          <MorphText
            words={FOCUS}
            holdMs={1800}
            transitionMs={480}
            fontSize="1.05rem"
            fontWeight={650}
            color="var(--accent)"
            background="transparent"
            loop
            className="hero-code-morph"
            style={{
              minWidth: '14ch',
              width: '14ch',
              maxWidth: '14ch',
              minHeight: '1.4em',
              height: '1.4em',
              maxHeight: '1.4em',
              padding: 0,
              position: 'relative',
              display: 'inline-block',
              verticalAlign: 'baseline',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}
          />
        )}
      </p>
    </div>
  );
}
