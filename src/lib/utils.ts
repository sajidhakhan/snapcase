import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = 'SnapCase - custom high-quality phone cases',
  description = 'Create custom high-quality phone cases in seconds',
  image = '/thumbnail.png',
  icons = '/favicon.io',
}:{
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}) : Metadata {
  return {
    title,
    description,
    openGraph:{
      title,
      description,
      images: [{ url: image}]
    },
    icons
  }
}