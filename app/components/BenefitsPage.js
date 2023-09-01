import Image from 'next/image'

import Computer from '../images/image-computer.png'
import Paragraph from './Typograph/Paragraph'
import Subtitle from './Typograph/Subtitle'

export default function BenefitsPage() {
  return (
    <>
      <Image
        className="lg:static lg:left-0 lg:w-[45%]"
        src={Computer}
        alt="Computer Image"
      />

      <section className="flex flex-col items-start gap-16 lg:w-[42rem] lg:pr-52 lg:pt-24">
        <article className="flex flex-col gap-3">
          <Subtitle text="Quick Search" />
          <Paragraph
            text="Easily search your snippets by content, category, web address,
          application, and more."
          />
        </article>
        <article className="flex flex-col gap-3">
          <Subtitle text="iCloud Sync" />
          <Paragraph
            text="Instantly saves and syncs snippets
          across all your devices."
          />
        </article>
        <article className="flex flex-col gap-3">
          <Subtitle text="Complete History" />
          <Paragraph
            text="Retrieve any snippets from the
          first moment you started using the app."
          />
        </article>
      </section>
    </>
  )
}
