import Image from 'next/image'
import BannerPic from '../../public/image/bannerblog.png'

export const Banner = () => {
  return (
    <div className="flex items-center relative flex-shrink-0 justify-center z-[1]">
      <Image
        src={BannerPic}
        alt="Banner"
        className="mx-auto w-full min-w-[95%] max-w-full object-cover h-auto"
      />
      <div className="flex max-w-[763px] items-center absolute bg-[rgba(0,0,0,0.29)] p-10 rounded-[78px] sm:rounded-[30px] sm:w-auto sm:mx-auto max-[480px]:bg-none">
        <header className="flex flex-col items-center -mt-4 text-center sm:-mt-3">
          <h1 className="text-white text-[42px] mb-[5px] font-light sm:text-[20px]">
            Bem vindo ao Zetsubou Blog
          </h1>
          <p className="text-white sm:text-xs">
            Aqui você verá pensamentos sobre diversos assuntos
          </p>
        </header>
      </div>
    </div>
  )
}

