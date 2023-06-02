export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  android_chrome_192x192_png: '/android-chrome-192x192.png',
  android_chrome_512x512_png: '/android-chrome-512x512.png',
  apple_touch_icon_png: '/apple-touch-icon.png',
  assets: {
    Inter_Medium_Regular_json: '/assets/Inter_Medium_Regular.json'
  },
  favicon_16x16_png: '/favicon-16x16.png',
  favicon_32x32_png: '/favicon-32x32.png',
  favicon_ico: '/favicon.ico',
  next_svg: '/next.svg',
  site_webmanifest: '/site.webmanifest',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
