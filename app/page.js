import BenefitsPage from './components/BenefitsPage'
import DevicesPage from './components/DevicesPage'
import FooterPage from './components/FooterPage'
import HomePage from './components/HomePage'
import ToolsPage from './components/ToolsPage'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-mobile bg-contain bg-top bg-no-repeat duration-500 xl:overflow-hidden xl:bg-desktop">
      <section className="flex h-fit flex-col items-center justify-center px-8 text-center duration-500 xl:h-screen xl:w-2/5 xl:p-0">
        <HomePage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-20 text-center duration-500 xl:relative xl:w-[120%] xl:flex-row  xl:items-start xl:gap-40 xl:p-0 xl:text-left">
        <BenefitsPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-40 text-center duration-500 xl:w-full xl:gap-20">
        <DevicesPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-40 text-center duration-500 xl:w-full xl:p-0">
        <ToolsPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 pt-40 text-center duration-500 xl:w-full xl:pt-52">
        <FooterPage />
      </section>
    </main>
  )
}
