const DEFAULT_R2_PUBLIC_BASE_URL = "https://pub-04f9b39b7aaa44769336ac3075a4bdfd.r2.dev"
const SCHOOL_ASSET_PREFIX =
  "sket/%E1%83%90%E1%83%A1%E1%83%90%E1%83%A2%E1%83%95%E1%83%98%E1%83%A0%E1%83%97%E1%83%98%20%E1%83%95%E1%83%94%E1%83%91%20%E1%83%92%E1%83%95%E1%83%94%E1%83%A0%E1%83%93%E1%83%98"

const trimLeadingSlash = (value: string) => value.replace(/^\/+/, "")
const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "")

export const R2_PUBLIC_BASE_URL = trimTrailingSlash(
  import.meta.env.VITE_PUBLIC_R2_BASE_URL ?? DEFAULT_R2_PUBLIC_BASE_URL,
)

export function toAbsoluteAssetUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }

  return `${R2_PUBLIC_BASE_URL}/${trimLeadingSlash(pathOrUrl)}`
}

export function schoolAsset(path: string) {
  return toAbsoluteAssetUrl(`${SCHOOL_ASSET_PREFIX}/${trimLeadingSlash(path)}`)
}

export const schoolLogoUrl = schoolAsset("image-removebg-preview.png")
export const homeHeroImages = ["kids.jpg", "teachers1.jpg", "teachers2.jpg", "teachers3.jpg", "teachers4.jpg"].map(
  (path) => schoolAsset(path),
)
