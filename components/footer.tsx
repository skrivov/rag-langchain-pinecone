import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Open source AI chatbot built with{' '}     
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>,{' '}
          <ExternalLink href="https://platform.openai.com/docs/introduction">Open AI API</ExternalLink>,{' '}
          <ExternalLink href="https://js.langchain.com/docs/get_started/introduction">
            Langchain.js
          </ExternalLink> ,{' '} and{' '}
          <ExternalLink href="https://www.pinecone.io/">
            Pinecone
          </ExternalLink>
      .
    </p>
  )
}
