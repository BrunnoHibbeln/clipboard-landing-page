import Image from 'next/image'

import Blacklist from '../images/icon-blacklist.svg'
import Preview from '../images/icon-preview.svg'
import Text from '../images/icon-text.svg'

import Paragraph from './Typograph/Paragraph'
import Subtitle from './Typograph/Subtitle'

export default function ToolsPage() {
  return (
    <>
      <section className="pb-10">
        <h2 className="text-3xl font-semibold text-dark-gray lg:text-4xl">
          Supercharge your workflow
        </h2>
        <Paragraph text="We’ve got the tools to boost your productivity." />
      </section>

      <section className="flex flex-col gap-14">
        <article className="flex flex-col items-center justify-center gap-5">
          <Image className="pb-7" src={Blacklist} alt="Blacklist Icon" />
          <Subtitle text="Create blacklists" />
          <Paragraph text="Ensure sensitive information never makes its way to your clipboard by excluding certain sources." />
        </article>
        <article className="flex flex-col items-center justify-center gap-5">
          <Image className="pb-7" src={Text} alt="Text Icon" />
          <Subtitle text="Plain text snippets" />
          <Paragraph text="Remove unwanted formatting from copied text for a consistent look." />
        </article>
        <article className="flex flex-col items-center justify-center gap-5">
          <Image className="pb-7" src={Preview} alt="Preview Icon" />
          <Subtitle text="Sneak preview" />
          <Paragraph text="Quick preview of all snippets on your Clipboard for easy access." />
        </article>
      </section>
    </>
  )
}
