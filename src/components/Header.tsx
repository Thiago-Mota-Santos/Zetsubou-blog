import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="text-[#ccc] bg-[#111] font-sans">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://media.graphassets.com/xU10WhwGTTyjI7tlTwfr"
              width={28}
              height={28}
              alt="Zetsubou Blog logo"
            />
          </Link>
          <Link
            href="/"
            className="ml-2 text-[#ccc] no-underline hover:text-white"
          >
            Zetsubou Blog
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-[#ccc] no-underline hover:text-[var(--link-color)] transition-colors"
          >
            Posts
          </Link>
          <Link
            href="/trechos"
            className="text-[#ccc] no-underline hover:text-[var(--link-color)] transition-colors"
          >
            Trechos
          </Link>
        </nav>
      </div>
    </header>
  )
}
