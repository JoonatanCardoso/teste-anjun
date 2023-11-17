import styles from './page.module.css';

export default function Home() {

  return (
    <main className="h-full min-h-screen bg-white dark:bg-black">
      <div className='bg-white dark:bg-black flex flex-col items-center justify-between py-10 px-80'>
        <div className="w-full items-center justify-between font-mono flex">
          <div>
            <img
              className="w-10 h-10"
              src="Logo.svg"
              alt="Logo"
            />
          </div>
          <div className="flex items-center">
            <label className={styles.switch}>
              <input type="checkbox"/>
              <span className={styles.slider} />
            </label>
            <img
              className="pl-5"
              src="moon.svg"
              alt="Theme Dark"
            />
          </div>
        </div>

        <div className="relative w-full mx-5 my-10">
          <textarea
            className="p-1 h-14 text-black text-xl w-full rounded-lg resize-none bg-gray-light" required
          />
          <img
            className='w-5 h-5 absolute inset-y-3 right-3'
            src='iconSearch.svg'
            alt='Icon Search'
          />
        </div>

        <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <p className='text-2xl font-bold text-black dark:text-white'>
            Title
          </p>

          <div className="mt-10 flex items-center gap-x-4">
            <h4 className='flex-none text-base font-bold text-black dark:text-white leading-6'>
              Noun
            </h4>
            <div className="h-px flex-auto bg-gray" />
          </div>

          <div>
            <p className='py-12 font-base font-medium text-gray'>Meanings</p>
            <p className='flex'>
              <img className='w-2' src="ellipse.svg" alt="Ellipse" />
              <div className='pl-2 text-black dark:text-white'>(etc.) A set of keys used to operate a typewriter, computer etc.</div>
            </p>
          </div>

          <div className='mt-10'>
            <span className='text-base text-bold text-gray'>Synonyms</span>
            <span className='ml-4	text-sm text-bold text-purple'>Electronic</span>
          </div>
        </div>
      </div>
    </main>
  )
}
