import Image from 'next/image'

import Computer from '../images/image-computer.png'
import Paragraph from './Typograph/Paragraph'
import Subtitle from './Typograph/Subtitle'

export default function BenefitsPage() {
  return (
    <>
      <Image src={Computer} alt="Computer Image" />

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
    </>
  )
}
