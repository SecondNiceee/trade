import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-gradient-to-b from-white to-[#f8f8f8] px-3 py-2 text-base shadow-[0_2px_8px_rgba(150,150,150,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:shadow-[0_4px_15px_rgba(150,150,150,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
