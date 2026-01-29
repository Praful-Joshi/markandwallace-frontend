import { useState } from 'react'
import { onboardingSlides } from '@/features/onboarding/data/slides'
import { OnboardingSlide } from '@/features/onboarding/components/OnboardingSlide'

export function OnboardingRoute() {
  const [index, setIndex] = useState(0)
  const slide = onboardingSlides[index]
  const isLastSlide = index === onboardingSlides.length - 1

  const next = () => {
    if (!isLastSlide) {
      setIndex((i) => i + 1)
    } else {
      // later: navigate to auth/home
    }
  }

  return (
    <OnboardingSlide
      key={slide.id}
      slide={slide}
      onNext={next}
      onSkip={
        !isLastSlide ? () => setIndex(onboardingSlides.length - 1) : undefined
      }
    />
  )
}
