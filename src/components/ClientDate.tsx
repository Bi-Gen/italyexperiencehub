'use client'

import { useState, useEffect } from 'react'

interface ClientDateProps {
  format?: 'short' | 'long'
  className?: string
}

export default function ClientDate({ format = 'short', className = '' }: ClientDateProps) {
  const [date, setDate] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const currentDate = new Date()
    
    if (format === 'long') {
      setDate(currentDate.toLocaleDateString('it-IT', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }))
    } else {
      setDate(currentDate.toLocaleDateString('it-IT'))
    }
  }, [format])

  // Render static fallback during SSR
  if (!mounted) {
    return (
      <span className={className}>
        {format === 'long' ? '18 agosto 2025' : '18/08/2025'}
      </span>
    )
  }

  return <span className={className}>{date}</span>
}