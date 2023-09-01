import BenefitsPage from './components/BenefitsPage'
import DevicesPage from './components/DevicesPage'
import FooterPage from './components/FooterPage'
import HomePage from './components/HomePage'
import ToolsPage from './components/ToolsPage'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-mobile bg-contain bg-top bg-no-repeat duration-500 lg:overflow-hidden lg:bg-desktop">
      <section className="flex h-fit flex-col items-center justify-center px-8 text-center duration-500 lg:h-screen lg:w-2/5 lg:p-0">
        <HomePage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-20 text-center duration-500 lg:relative lg:w-[120%] lg:flex-row  lg:items-start lg:gap-40 lg:p-0 lg:text-left">
        <BenefitsPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-40 text-center duration-500 lg:w-full lg:gap-20">
        <DevicesPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-40 text-center duration-500 lg:w-full lg:p-0">
        <ToolsPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 pt-40 text-center duration-500 lg:w-full lg:pt-52">
        <FooterPage />
      </section>
    </main>
  )
}
