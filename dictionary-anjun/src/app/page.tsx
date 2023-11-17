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
      </div>
    </main>
  )
}
