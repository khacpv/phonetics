import Head from 'next/head';
import Phonetic from '../components/Phonetic';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Phonetics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a href="https://tophonetics.com/">Phonetics</a>
        </h1>

        <p className="description">
          Inspired by <a href="http://moonesl.vn/">MoonESL class</a>
        </p>
        <h3>1. Nguyên âm (vowel)</h3>
        <div className="grid">
          {/* /ʌ/ */}
          <Phonetic ipa="/ʌ/" sound="/audio/a-bus.mp3">
            <span className="strong">Schwa được nhấn: /ʌ/</span>
            Giống như âm /uh/ của tiếng việt
            <br />
            <span>1. Bus, But, Bug</span>
            <br />
            <span>2. My brother school has bus</span>
          </Phonetic>

          {/* /ə/ */}
          <Phonetic ipa="/ə/" sound="/audio/a-about.mp3">
            <span className="strong">Schwa Không được nhấn: /ə/</span>
            Chỉ giống như âm /ờ/ của tiếng việt nhưng nhẹ hơn
            <br />
            <span>1. About</span>
            <br />
            <span>2. Pronunciation is important</span>
          </Phonetic>

          {/* /i/ */}
          <Phonetic ipa="/i/" sound="/audio/i-fill.mp3">
            <span className="strong">i lỏng miệng: /i/</span>
            Chỉ hơi nhếch mép 2 bên 1 chút, nhẹ hơn âm /i/ của tiếng việt
            <br />
            <span>1. Hit, Bit</span>
            <br />
            <span>2. a seed on seat</span>
          </Phonetic>

          {/* /i:/ */}
          <Phonetic ipa="/i:/" sound="/audio/i-feel.mp3">
            <span className="strong">i căng miệng: /i:/ hoặc /ɪ/</span>
            Miệng kéo sang 2 bên nhiều hơn so với âm /i/ lỏng miệng
            <br />
            <span>1. Seat, Seed, Heat, Week</span>
            <br />
            <span>2. A seed on seat</span>
          </Phonetic>

          {/* /e/ */}
          <Phonetic ipa="/e/" sound="/audio/e-set.mp3">
            <span className="strong">E lỏng miệng: /ɜ/ hoặc /e/</span>
            Kéo miệng về 2 bên và hạ hàm 1 chút
            <br />
            <span>1. Set, Met, Get, Left</span>
            <br />
            <span>2. A set of pencil on the left of table</span>
          </Phonetic>

          {/* /æ/ */}
          <Phonetic ipa="/æ/" sound="/audio/ae-map.mp3">
            <span className="strong">A Căng miệng: /æ/</span>
            Mở miệng đều về 4 phía
            <br />
            <span>1. Can, map</span>
            <br />
            <span>2. A map in the can</span>
          </Phonetic>

          {/* /ɒ/ */}
          <Phonetic ipa="/ɒ/" sound="/audio/o-god.mp3">
            <span className="strong">O hạ hàm: /ɒ/</span>
            Chỉ kéo hàm xuống dưới thôi.
            <br />
            <span>1. God, Nod, Hot, Shop</span>
            <br />
            <span>2. A God in a shop will very hot</span>
          </Phonetic>

          {/* /ɑ:/ */}
          {/* <Phonetic ipa="/ɑ:/" sound="/audio/a-hard.mp3">
            <span className="strong">A ???: /ɑ:/</span>
            <span>1. Hard</span>
            <br />
            <span>2. </span>
          </Phonetic> */}

          {/* /ɔ:/ */}
          <Phonetic ipa="/ɔ:/" sound="/audio/o-fork.mp3">
            <span className="strong">O tròn miệng: /ɔ:/</span>
            Âm O căng & chu mỏ ra
            <br />
            <span>1. Fork, Ball, All, Call, Mall, Hall </span>
            <br />
            <span>2. A ball in the mall on the hall</span>
          </Phonetic>

          {/* /ɜ:/ */}
          {/* <Phonetic ipa="/ɜ:/" sound="/audio/o-heard.mp3">
            <span className="strong">Ơ căng miệng: /ɜ:/ (hoặc /e:/)</span>
            <span>1. Heard</span>
            <br />
            <span>2. </span>
          </Phonetic> */}

          {/* /ʊ/ */}
          <Phonetic ipa="/ʊ/" sound="/audio/u-put.mp3">
            <span className="strong">U nhẹ: /ʊ/</span>
            Giống chữ U của tiếng việt nhưng chỉ hơi cong môi 1 chút
            <br />
            <span>1. Put, Good, Pull</span>
            <br />
            <span>2. I put a budding in the hut</span>
          </Phonetic>

          {/* /u:/ */}
          <Phonetic ipa="/u:/" sound="/audio/u-boot.mp3">
            <span className="strong">U căng miệng: /u:/</span>
            <span>1. Boot, Moon, Sure</span>
            <br />
            <span>2. I have a boot</span>
          </Phonetic>
        </div>

        <h3>2. Nguyên âm Anh Mỹ (Diphthong vowels)</h3>
        <div className="grid">
          {/* /eɪ/ */}
          <Phonetic ipa="/eɪ/" sound="/audio/ei-they.mp3">
            <span className="strong">Ê nhẹ: /eɪ/</span>
            Gần giống âm Ê của tiếng việt, nhưng ngắn hơn. Nếu theo sau là âm
            /l/ thì phát âm giống với ÊU. vd: mail /meil/
            <br />
            <span>1. They, Made, Date, Day</span>
            <br />
            <span>2. They make a bake</span>
          </Phonetic>

          {/* /oʊ/ */}
          <Phonetic ipa="/oʊ/" sound="/audio/ou-goal.mp3">
            <span className="strong">ÂU : /oʊ/</span>
            Nghe giống như âm /ÂU/ của tiếng việt
            <br />
            <span>1. Row, Goal, Soul, Cold, Goat, Note, Known, Know</span>
            <br />
            <span>2. How old are you?</span>
            <br />
            <span>3. I see a goat on the road</span>
          </Phonetic>

          {/* /aʊ/ */}
          <Phonetic ipa="/aʊ/" sound="/audio/au-sound.mp3">
            <span className="strong">AU: /aʊ/</span>
            Nghe như âm A+U của tiếng việt. Chú ý khi kết hợp với âm /l/.
            <br />
            <span>1. Sound, How, Count, Cows</span>
            <br />
            <span>2. How to count the cows?</span>
          </Phonetic>

          {/* /ɪə/ */}
          {/* <Phonetic ipa="/ɪə/" sound="/audio/ia-clear.mp3">
            <span className="strong">IA: /ɪə/</span>
            <br />
            <span>1. Clear</span>
            <br />
            <span>2. My brother school has bus</span>
          </Phonetic> */}

          {/* /eə/ */}
          {/* <Phonetic ipa="/eə/" sound="/audio/ea-care.mp3">
            <span className="strong">AE: /eə/</span>
            <br />
            <span>1. Care</span>
            <br />
            <span>2. My brother school has bus</span>
          </Phonetic> */}

          {/* /ɔɪ/ */}
          <Phonetic ipa="/ɔɪ/" sound="/audio/oi-coin.mp3">
            <span className="strong">OI: /ɔɪ/</span>
            Giống âm OI của tiếng việt
            <br />
            <span>1. Coin, Boy, Boil, Join, Annoy</span>
            <br />
            <span>2. The boy boils a coin</span>
          </Phonetic>

          {/* /aɪ/ */}
          <Phonetic ipa="/aɪ/" sound="/audio/ai-find.mp3">
            <span className="strong">AI: /aɪ/</span>
            <span>1. Find, Ice, I'm, Eye</span>
            <br />
            <span>2. Find my iphone</span>
          </Phonetic>

          {/* /ʊə/ */}
          {/* <Phonetic ipa="/ʊə/" sound="/audio/ua-tour.mp3">
            <span className="strong">UƠ: /ʊə/</span>
            <span>1. Tour</span>
            <br />
            <span>2. I'm a tour guide </span>
          </Phonetic> */}
        </div>
      </main>

      <footer>
        Powered by &nbsp;
        <a
          href="https://facebook.com/khacpv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Khắc Phạm
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .description a {
          color: #ff4e48;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        h3 {
          margin-top: 50px;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .strong {
          font-size: 16px;
          line-height: 16px;
          font-weight: bold;
          display: block;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
