import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=coffee" />
      </head>
      
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
