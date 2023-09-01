import Image from 'next/image'

import Google from '../images/logo-google.png'
import Hp from '../images/logo-hp.png'
import Ibm from '../images/logo-ibm.png'
import Microsoft from '../images/logo-microsoft.png'
import VectorGraphics from '../images/logo-vector-graphics.png'

import IosButton from './Button/IosButton'
import MacButton from './Button/MacButton'
import Footer from './Footer'
import Paragraph from './Typograph/Paragraph'

export default function FooterPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-20 px-8 lg:h-fit lg:flex-row lg:items-center lg:gap-36">
        <Image className="lg:h-max lg:w-max" src={Google} alt="Google Icon" />
        <Image className="lg:h-max lg:w-max" src={Ibm} alt="IBM Icon" />
        <Image
          className="lg:h-fit lg:w-fit"
          src={Microsoft}
          alt="Microsoft Icon"
        />
        <Image className="lg:h-max lg:w-max" src={Hp} alt="HP Icon" />
        <Image
          className="lg:h-max lg:w-max"
          src={VectorGraphics}
          alt="Vector Graphics Icon"
        />
      </section>
      <section className="flex flex-col gap-6 px-8 py-24 lg:items-center lg:justify-center lg:py-36 lg:text-center">
        <article className="flex flex-col gap-7 pb-5">
          <h2 className="text-3xl font-semibold text-dark-gray lg:text-4xl">
            Clipboard for iOS and Mac OS
          </h2>
          <Paragraph
            text="Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard."
          />
        </article>
        <section className="flex flex-col items-center justify-center gap-6 lg:flex-row ">
          <IosButton />
          <MacButton />
        </section>
      </section>
      <Footer />
    </>
  )
}
