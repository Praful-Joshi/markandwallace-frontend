import type { OnboardingSlide as Slide } from '../types'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'

type Props = {
  slide: Slide
  onNext: () => void
  onSkip?: () => void
}

export function OnboardingSlide({ slide, onNext, onSkip }: Props) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background layer */}
      <div
        className="
          absolute inset-0
          bg-no-repeat bg-center
          bg-cover
        "
        style={{ backgroundImage: `url(${slide.imageUrl})` }}
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end p-6">
        <div className="space-y-3 max-w-xl">
          <Text variant="heading">{slide.title}</Text>

          <Text variant="muted">{slide.description}</Text>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {onSkip && (
            <Button variant="ghost" onClick={onSkip}>
              Skip
            </Button>
          )}

          <Button onClick={onNext}>{slide.ctaLabel ?? 'Next'}</Button>
        </div>
      </div>
    </div>
  )
}
