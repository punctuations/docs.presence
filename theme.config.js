export default {
  repository: 'https://github.com/punctuations/docs.presence',
  titleSuffix: ' – presence',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">presence</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A simple and elegant solution to images for socials media!
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#2f3136" />
      <meta name="theme-color" content="#2f3136" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="presence: A simple solution to images for socials media!" />
      <meta name="og:description" content="presence: A simple solution to images for socials media!" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.presence.im/og.png" />
      <meta name="twitter:site:domain" content="presence.im" />
      <meta name="twitter:url" content="https://presence.im" />
      <meta name="og:title" content="presence: A simple solution to images for socials media!" />
      <meta name="og:image" content="https://docs.presence.im/og.png" />
      <meta name="apple-mobile-web-app-title" content="presence" />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © presence.</>,
}
