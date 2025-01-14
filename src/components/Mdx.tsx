"use client"

import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { BlurImage } from './BlurImage'

const components = {
  Image: ({ alt = '', src, ...props }: { alt?: string; src: string; [key: string]: any }) => (
    <BlurImage
      alt={alt}
      src={src}
      {...props}
      className="rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
      sizes="(min-width: 1536px) 50rem, (min-width: 1280px) 45rem, (min-width: 1024px) 40rem, (min-width: 768px) 35rem, (min-width: 640px) 30rem, calc(100vw - 2rem)"
      width={1200}
      height={630}
    />
  ),
  a: ({ href, children }: { href: string; children: React.ReactNode }) => {
    if (href.startsWith('/')) {
      return (
        <Link href={href as `/posts/${string}/${string}`} className="text-blue-500 hover:text-blue-600 no-underline">
          {children}
        </Link>
      )
    }

    if (href.startsWith('#')) {
      return (
        <a href={href} className="text-blue-500 hover:text-blue-600 no-underline">
          {children}
        </a>
      )
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 no-underline"
      >
        {children}
      </a>
    )
  },
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="relative rounded-lg bg-gray-900 p-4 dark:bg-gray-800">
      {children}
    </pre>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-800">{children}</code>
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
} 