import NextImage, { type ImageProps } from "next/image";

export default function StaticImage({ alt, title, ...props }: ImageProps) {
  return <NextImage {...props} alt={alt} title={title ?? alt} />;
}
