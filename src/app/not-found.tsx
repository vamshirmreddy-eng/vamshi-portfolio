import Link from 'next/link'
import { portfolioConfig } from '@/data/social'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-heading text-7xl sm:text-8xl font-black text-primary mb-4">404</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-text mb-3">This page doesn&apos;t exist.</h1>
      <p className="text-secondary-text max-w-md mb-8">
        The link you followed may be broken, or the page may have moved. Here&apos;s everything else{' '}
        {portfolioConfig.name.split(' ')[0]}&apos;s built.
      </p>
      <Link href="/" className="button-primary">
        Back to homepage
      </Link>
    </div>
  )
}
