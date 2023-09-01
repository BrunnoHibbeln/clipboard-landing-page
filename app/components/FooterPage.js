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
      <section className="flex flex-col items-center justify-center gap-20 px-8 xl:h-fit xl:flex-row xl:items-center xl:gap-36">
        <Image className="xl:h-max xl:w-max" src={Google} alt="Google Icon" />
        <Image className="xl:h-max xl:w-max" src={Ibm} alt="IBM Icon" />
        <Image
          className="xl:h-fit xl:w-fit"
          src={Microsoft}
          alt="Microsoft Icon"
        />
        <Image className="xl:h-max xl:w-max" src={Hp} alt="HP Icon" />
        <Image
          className="xl:h-max xl:w-max"
          src={VectorGraphics}
          alt="Vector Graphics Icon"
        />
      </section>
      <section className="flex flex-col gap-6 px-8 py-24 xl:items-center xl:justify-center xl:py-36 xl:text-center">
        <article className="flex flex-col gap-7 pb-5">
          <h2 className="text-3xl font-semibold text-dark-gray xl:text-4xl">
            Clipboard for iOS and Mac OS
          </h2>
          <Paragraph
            text="Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard."
          />
        </article>
        <section className="flex flex-col items-center justify-center gap-6 xl:flex-row ">
          <IosButton />
          <MacButton />
        </section>
      </section>
      <Footer />
    </>
  )
}
