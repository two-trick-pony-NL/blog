import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
      blog
      </h1>
      
      <img src="https://petervandoorn.com/logo.png" width="500" alt="Italian Trulli"></img>
    </section>
  )
}

export default Intro
