import { profile } from '@/content/profile';
import { Img } from '@/components/ui/Img';
import { Todo } from '@/components/ui/Todo';
import { Arrow } from '@/components/ui/Arrow';

export function Hero() {
  const [first, second] = profile.nameLines;
  return (
    <section id="intro" data-chapter="intro" aria-labelledby="hero-name" className="tone-ink grain relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="shell relative flex flex-1 flex-col pb-8 pt-[calc(var(--nav-h)+clamp(28px,6vh,72px))]">
        <div className="intro-fade flex items-center gap-4" style={{ animationDelay: '150ms' }}>
          <span className="mono accent-gold">01</span>
          <span className="h-px w-10 bg-[var(--line)]" />
          <span className="mono faint">A portfolio, in eight chapters</span>
        </div>

        <h1 id="hero-name" className="display mt-auto uppercase leading-[0.84] tracking-[-0.025em]" style={{ fontSize: 'var(--fs-hero)' }}>
          <span className="mask">
            <span className="mask-inner intro-rise" style={{ animationDelay: '200ms' }}>{first}</span>
          </span>
          <span className="mask">
            <span className="mask-inner intro-rise flex items-baseline gap-[0.28em] sm:pl-[0.9em]" style={{ animationDelay: '320ms' }}>
              <em className="accent-gold font-light normal-case">{second.split(' ')[0]}</em>
              <span>{second.split(' ').slice(1).join(' ')}</span>
            </span>
          </span>
        </h1>

        <span className="intro-draw mt-[clamp(24px,4vh,44px)] block h-px w-full bg-[var(--line)]" style={{ animationDelay: '600ms' }} />

        <div className="mt-[clamp(24px,4vh,40px)] grid grid-cols-12 gap-x-6 gap-y-8">
          <p className="display h3 intro-fade col-span-12 italic md:col-span-6 lg:col-span-5" style={{ animationDelay: '700ms' }}>
            {profile.tagline}
          </p>
          <div className="intro-fade col-span-12 flex flex-col gap-7 md:col-span-6 lg:col-span-5 lg:col-start-8" style={{ animationDelay: '820ms' }}>
            <p className="dim measure">{profile.heroIntro}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#about" className="btn-line">
                Explore my journey <Arrow />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(32px,6vh,64px)] flex items-end justify-between gap-6">
          <div className="intro-fade flex items-center gap-4" style={{ animationDelay: '1000ms' }} aria-hidden="true">
            <span className="relative block h-12 w-px overflow-hidden bg-[var(--line)]">
              <span className="scroll-cue absolute inset-0 bg-gold" />
            </span>
            <span className="mono faint">Scroll</span>
          </div>
          <dl className="intro-fade hidden gap-10 md:flex" style={{ animationDelay: '1000ms' }}>
            {profile.heroMeta.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <dt className="mono faint">{m.label}</dt>
                <dd className="text-[0.95rem]">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {profile.portrait ? (
          <div className="pointer-events-none absolute right-[var(--gutter)] top-[calc(var(--nav-h)+40px)] hidden w-[min(26vw,360px)] lg:block">
            <Img image={profile.portrait} priority sizes="26vw" reveal={false} className="intro-fade" />
          </div>
        ) : (
          <Todo items="An editorial portrait (optional): the hero is designed to work without one" className="absolute right-[var(--gutter)] top-[calc(var(--nav-h)+16px)]" />
        )}
      </div>
    </section>
  );
}
