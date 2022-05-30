import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
         <title>Beijing Chinese Medical Center - Acupuncture, Herbs, Chiropractic, AcuMassage</title>
        <Head>
       
        <meta 
        name="keywords" 
        content="Traditional Chinese Medicine, TCM, Acupuncture, Chiropractic, Herbs,
        Acumassage, Qigong, Taoism, Feng Shui">
        </meta>
        <meta 
        name="description" 
        content="Beijing Chinese Medical Center (BCMC) is a general Traditional Chinese Medicine (TCM) 
        practice utilizing Acupuncture, Qi Gong and Chiropractic treatments. Dr. Baolin Wu teaches
        QiGong Classes and has published QiGong, Martial Arts, Feng Shui and Taoist Books.">
        </meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link href="https://fonts.googleapis.com/css2?family=Cardo&family=Josefin+Sans&family=Josefin+Slab&family=Mulish&family=Playfair+Display+SC:wght@700&display=swap" rel="stylesheet"/>



          
        </Head>
        <body className="font-josefin">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
