import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines Tailwind CSS classes with clsx for conditional styling
 * and resolves conflicts using twMerge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format date in a human-readable format
 */
export function formatDate(dateString: string): string {
  const [year, month] = dateString.split('-')
  const date = new Date(`${year}-${month}-01`)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}

/**
 * Calculate duration between two dates (in months and years)
 */
export function calculateDuration(startDate: string, endDate: string | null): { years: number; months: number } {
  const start = new Date(`${startDate.split('-')[0]}-${startDate.split('-')[1]}-01`)
  const end = endDate ? new Date(`${endDate.split('-')[0]}-${endDate.split('-')[1]}-01`) : new Date()

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())

  const years = Math.floor(months / 12)
  months = months % 12

  return { years, months }
}

/**
 * Truncate text to a specific length
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trimEnd() + '...'
}

/**
 * Convert CamelCase to human-readable text
 */
export function camelCaseToWords(str: string): string {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase())
}

/**
 * Group skills by category
 */
export function groupSkillsByCategory<T extends { category: string }>(skills: T[]): Record<string, T[]> {
  return skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, T[]>
  )
}

/**
 * Scroll to element by ID
 */
export function scrollToElement(elementId: string) {
  if (typeof window === 'undefined') return
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  if (typeof window === 'undefined') return false
  const rect = element.getBoundingClientRect()
  return rect.top <= window.innerHeight && rect.bottom >= 0
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

/**
 * Format number with K/M suffix
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}
