import { useState } from 'react'
import { onboardingSlides } from '@/features/onboarding/data/slides'
import { OnboardingSlide } from '@/features/onboarding/components/OnboardingSlide'

export function OnboardingRoute() {
  const [index, setIndex] = useState(0)
  const slide = onboardingSlides[index]

  const next = () => {
    if (index < onboardingSlides.length - 1) {
      setIndex((i) => i + 1)
    } else {
      // later: navigate to auth/home
    }
  }

  return (
    <OnboardingSlide
      slide={slide}
      onNext={next}
      onSkip={() => setIndex(onboardingSlides.length - 1)}
    />
  )
}
