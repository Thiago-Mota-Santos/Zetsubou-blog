export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--header-dark)]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--link-color)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[var(--title-dark)] mb-4">
          Trecho não encontrado
        </h2>
        <p className="text-[var(--description-dark)] mb-8">
          O trecho que você está procurando não existe ou foi removido.
        </p>
        <a
          href="/trechos"
          className="bg-[var(--link-color)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--link-hover)] transition-colors"
        >
          Voltar para Trechos
        </a>
      </div>
    </div>
  )
}
