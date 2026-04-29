import { useEffect, useRef } from "react"

/**
 * Возвращает ref — когда элемент входит во viewport,
 * добавляет класс "revealed", убирает "hidden-reveal".
 * delay — задержка в мс (для stagger-эффекта внутри секции)
 */
export function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed")
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}