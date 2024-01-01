import "../styles/globals.css";
import "../styles/fonts.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nam Thêu</title>
        <meta name="description" content="Nam Thêu Wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/images/heart.png"
          title="Favicon"
          sizes="16x16"
        />
        {/* <link
          rel="image_src"
          type="image/jpeg"
          href="/assets/images/deerpang-pc.webp"
        /> */}
        <meta property="og:title" content="Nam Thêu Wedding" />
        <meta property="og:description" content="Nam Thêu Wedding" />
        {/* <meta property="og:url" content="https://nuocthachdeerpang.maci.vn" /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/assets/images/deerpang-pc.webp" /> */}
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
      </head>
      <body>{children}</body>
    </html>
  );
}