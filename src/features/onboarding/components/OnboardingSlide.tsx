import { motion, AnimatePresence } from 'framer-motion'
import type { OnboardingSlide as Slide } from '../types'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import { APP_NAME } from '@/app/config/app'

type Props = {
  slide: Slide
  onNext: () => void
  onSkip?: () => void
}

export function OnboardingSlide({ slide, onNext, onSkip }: Props) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.imageUrl}
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ===== Top bar (logo) ===== */}
      <div className="absolute flex items-start pl-8 pt-5">
        <Text variant="brandName">{APP_NAME}</Text>
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end p-6">
        <div className="space-y-3 ml-3 max-w-xl">
          <Text variant="heading">{slide.title}</Text>

          <Text variant="muted">{slide.description}</Text>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {/* Left slot */}
          <div className="flex-1">
            {onSkip && (
              <Button variant="ghost" onClick={onSkip}>
                Skip
              </Button>
            )}
          </div>

          {/* Right slot (PRIMARY CTA — never moves) */}
          <div className="flex justify-end">
            <Button onClick={onNext}>{slide.ctaLabel ?? 'Next'}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
