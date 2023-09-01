import Image from 'next/image'

import logo from '../images/logo.svg'

import IosButton from './Button/IosButton'
import MacButton from './Button/MacButton'
import Paragraph from './Typograph/Paragraph'
import Subtitle from './Typograph/Subtitle'

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-9 lg:gap-14">
        <Image
          className="w-32 pb-12 pt-20 lg:w-44"
          src={logo}
          alt="Logo image"
        />
        <article className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold text-dark-gray lg:text-5xl">
            A history of everything you copy
          </h1>
          <Paragraph
            text="Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices."
          />
        </article>
        <section className="flex w-full flex-col justify-center gap-7 lg:flex-row">
          <IosButton />
          <MacButton />
        </section>
      </section>
      <article className="flex flex-col gap-5 pt-32">
        <Subtitle text="Keep track of your snippets" />
        <Paragraph
          text="Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything."
        />
      </article>
    </>
  )
}
