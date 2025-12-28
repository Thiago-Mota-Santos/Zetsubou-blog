export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-[#1a1a1a] text-[#a8a095] py-12 mt-20 border-t border-[#3B4042]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#c3beb6]">Zetsubou Blog</h3>
            <p className="text-[#a8a095]">
              Alguns pensamentos sobre obras que gosto :)
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#c3beb6]">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-[#a8a095] hover:text-[#BB83E6] transition-colors">
                  Artigos
                </a>
              </li>
              <li>
                <a href="/trechos" className="text-[#a8a095] hover:text-[#BB83E6] transition-colors">
                  Trechos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#3B4042] text-center">
          <p className="text-[var(--link-color)]">&copy; {currentYear} Zetsubou Blog. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
