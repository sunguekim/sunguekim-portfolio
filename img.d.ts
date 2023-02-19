declare module '*.png' {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}

declare global {
  type StaticImageData = {
    src: string
    height: number
    width: number
    blurDataURL?: string
  };
}