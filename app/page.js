import BenefitsPage from './components/BenefitsPage'
import DevicesPage from './components/DevicesPage'
import FooterPage from './components/FooterPage'
import HomePage from './components/HomePage'
import ToolsPage from './components/ToolsPage'

export default function Home() {
  return (
    <main>
      <section className="flex h-fit flex-col items-center justify-center bg-mobile bg-contain bg-top bg-no-repeat px-8 text-center lg:h-screen lg:bg-desktop lg:p-0">
        <HomePage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-20 text-center lg:h-screen lg:p-0">
        <BenefitsPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-40 text-center lg:h-screen lg:p-0">
        <DevicesPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 px-8 pt-40 text-center lg:h-screen lg:p-0">
        <ToolsPage />
      </section>
      <section className="flex h-fit flex-col items-center justify-center gap-14 pt-40 text-center lg:h-screen lg:p-0">
        <FooterPage />
      </section>
    </main>
  )
}
