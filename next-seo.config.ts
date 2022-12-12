
const title = 'Zetsubou Blog'
const description = 'Bem vindo ao Zetsubou Blog! Postagens corriqueiras sobre algum assunto aleatório que me interessar.'
const url = 'kk'

const SEO = {
  title,
  canonical: "https://zetsubou-blog.vercel.app/",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://zetsubou-blog.vercel.app/",
    siteName: "Zetsubou Blog",
    title,
    description,
    images: [
      {
        url,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@ThiagoMota014",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default SEO;


