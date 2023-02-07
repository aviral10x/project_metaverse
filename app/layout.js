import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
    
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Seymour+One&display=swap" rel="stylesheet"></link>
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
