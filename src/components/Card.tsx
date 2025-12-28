import Link from 'next/link'
import Image from 'next/image'

type CardProps = {
  imgUrl: string
  title: string
  description: string
  href: string
}

export const Card = ({ imgUrl, title, description, href }: CardProps) => {
  return (
    <div className="flex flex-wrap justify-between bg-[var(--header-dark)] border border-[var(--border)]">
      <Image
        src={imgUrl}
        alt={title}
        width={400}
        height={300}
        className="min-w-full max-w-full h-auto"
      />
      <h1 className="flex items-center leading-[1em] py-[30px] px-[16px] text-base font-medium text-[var(--title-dark)] md:text-lg">
        {title}
      </h1>
      <header className="flex font-medium items-start flex-col">
        <p className="mx-[14px] my-0 mb-[9px] ml-[15px] text-sm text-[var(--description-dark)] tracking-[0.1px]">
          {description}
        </p>
        <Link
          href={href}
          className="text-sm cursor-pointer mt-0 mb-[13px] ml-[14px] text-[var(--link-color)] hover:text-[var(--link-hover)] transition-colors"
        >
          Leia mais
        </Link>
      </header>
    </div>
  )
}

