import Image from 'next/image'

import Devices from '../images/image-devices.png'
import Paragraph from './Typograph/Paragraph'

export default function DevicesPage() {
  return (
    <>
      <article className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold text-dark-gray lg:text-4xl">
          Access Clipboard anywhere
        </h2>
        <Paragraph
          text="Whether you’re on the go, or at your computer, you can access all your Clipboard 
          snippets in a few simple clicks."
        />
      </article>
      <Image className="lg:w-3/5" src={Devices} alt="Devices Image" />
    </>
  )
}
