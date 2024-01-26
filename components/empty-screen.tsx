import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'What is Nutriharvest brand?',
    message: `What is Nutriharvest brand, what are Nutriharvest organic fertilizer"?`
  },
  {
    heading: 'Summarize benefits of organic fertilizers',
    message: 'Summarize benefits of organic fertilizers for a 2nd grader: \n'
  },
   
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an open source AI chatbot illustrating Retrival Augmented Generation (RAG).
          This template is built with{' '}
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
        <p className="leading-normal text-muted-foreground">
          You can use Document panel to seed Pinecone database with documents. 
          After that, you can start a conversation related to the content of those documents.
        </p>

        <p className="leading-normal text-muted-foreground">
          If you use our pre-seeded database,
          You can try the follwoing examples
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
