import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = ({ inputs }: { inputs: ClassValue[] }): string => {
  return twMerge(clsx(inputs))
}


