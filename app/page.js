import BenefitsPage from './components/BenefitsPage'
import HomePage from './components/HomePage'

export default function Home() {
  return (
    <main className="h-[500vh] w-full">
      <section className="flex h-fit flex-col items-center justify-center bg-mobile bg-contain bg-top bg-no-repeat px-8 text-center lg:h-screen lg:bg-desktop lg:p-0">
        <HomePage />
      </section>
      <section>
        <BenefitsPage />
      </section>
    </main>
  )
}
