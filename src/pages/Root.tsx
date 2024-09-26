import Footer from '../components/Footer'
import Header from '../components/Header'
import Section from '../components/Section'
import SectionSpacer from '../components/SectionSpacer'

import '../App.css'
import "swiper/swiper-bundle.css";
import Title from '../components/Title'
import ToTopButton from '../components/ToTopButton'
import ImgDescriptionSwiper from '../components/ImgDescriptionSwiper'
import styles from '../assets/styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import HScroll from '../components/HScroll'
import { MiniScreenSize } from '../components/MiniScreenSize'
import Images from '../Images'
import SimpleSection from '../components/SimpleSection'
import NavBar from '../components/NavBar'
import BackScroller from '../components/BackScroller'
import BackScrollerItems from '../assets/back_scroller_items'

//TODO: Back Flow Image, Footer Rotate Image joke

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  ScrollTrigger.clearScrollMemory();
  window.history.scrollRestoration = "manual";
});

window.addEventListener("resize", () => {
  const all = document.getElementById("all");
  if(all) {
    const display = window.getComputedStyle(all, null).display;
    if(display === "none") {
      window.scrollTo({top: 0, left: 0});
    }
  }
});

function Root() {
  return (
    <>
      <div id="all">
        <NavBar/>
        <ToTopButton/>
        <BackScroller items={BackScrollerItems} />
        <Header image={Images.header.img}>
          <h1 className="textv">有田焼</h1>
        </Header>
        <SectionSpacer height="4em" />
        <div id="about"/>
        <Title title="有田焼とは?" sub_title='About Arita ware' />
        <Section image={Images.about.img} content='right'>
          <p className="textv">
            主に佐賀県有田町を中心に焼かれる磁器であり、
            日本で最も長い歴史を持った磁器と言われています。
            <br/>
            その美しさと品質の高さから日本国内のみならず、世界中で高く評価されています。
          </p>
        </Section>
        <SectionSpacer height="4em" />
        <div id="features"/>
        <Title title="有田焼の特徴" sub_title='Features of Arita ware' />
        <HScroll delimiter>
          <Section image={Images.feature1.img}>
            <div style={{
              margin: "0",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}>
              <h1 className="titlev">薄くて繊細なのに耐久性がある磁器</h1>
              <p className="textv" style={{margin: "3rem 1rem"}}>
              有田焼はガラス質の原料を多く含む陶石を使用し、約1300度の高温で焼き上げるため、硬質で耐久性に優れています。
              <br/>
              また、それによって薄く繊細な磁器を作ることが可能なのです。
              </p>
            </div>
          </Section>
          <Section image={Images.feature2.img}>
            <div style={{
              margin: "0",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}>
              <h1 className="titlev">自然をモチーフにした美しい絵付け</h1>
              <p className="textv" style={{margin: "3rem 1rem"}}>
              白磁の真っ白な有田焼には、様々な絵柄が描かれています。
              <br/>
              伝統的なデザインとして、花や鳥、木など自然をモチーフとして絵付けしたものが有名です。
              <br/>
              色とりどりの絢爛豪華な絵付けをから、シンプルなものまで、種類が豊富です。
              </p>
            </div>
          </Section>
          <Section image={Images.feature3.img}>
            <div style={{
              margin: "0",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}>
              <h1 className="titlev">各分野のプロによる分業制</h1>
              <p className="textv" style={{margin: "3rem 1rem"}}>
              有田焼が作られる工程は、基本的に分業で行われます。
              <br/>
              技術や道具の進歩により製法は少しずつ変化してきましたが、成形、施釉、絵付、焼成などの各分野の職人たちが伝統の技法を継承しつつそれぞれの工程を担っています。
              </p>
            </div>
          </Section>
        </HScroll>
        <SectionSpacer height="4em" />
        <div id="styles"/>
        <Title title="有田焼の様式" sub_title='Styles of Arita ware' />
        <SimpleSection>
          <p style={{ fontSize: "1.5rem" }}>有田焼は主に以下の3つの様式によって大別出来ます。</p>
        </SimpleSection>
        <ImgDescriptionSwiper img_descs={styles} />
        <SectionSpacer height="4em" />
        <div id="history"/>
        <Title title="有田焼の歴史" sub_title='History of Arita ware' />
        <Section image={Images.history1.img}>
          <p className="textv" style={{margin: "3rem 1rem"}}>
            豊臣秀吉の朝鮮出兵の際、有田を含む肥前の領主であった鍋島直茂に同行してきた陶工たちの一人の李参平は、
            <span style={{textCombineUpright: "all"}}>1616</span>年に有田東部の泉山で磁器の原料となる白磁鉱を発見し、
            それを用いて日本初の白磁を焼いたとされ、これが有田焼の祖であると伝えられています。<br/>
          </p>
        </Section>
        <SectionSpacer height="4em" />
        <Section image={Images.history2.img} content="left">
          <p className="textv" style={{margin: "3rem 1rem"}}>
            当時は呉須を用いた藍色の染め付けのみの作品がほとんどでしたが、
            初代柿右衛門氏などの登場によって柿右衛門様式などの赤や緑などを用いたより色とりどりな磁器が作られるようになり、
            様式も増え、海外への輸出も行われるようになりました。<br/>
          </p>
        </Section>
        <SectionSpacer height="4em" />
        <Section image={Images.history3.img}>
          <p className="textv" style={{margin: "3rem 1rem"}}>
            江戸時代になると、豪華な見た目の金襴手様式の磁器も製造されるようになり、かつての世界の王侯貴族にも愛されたと言われています。
            そして現代になっても、古い伝統的な技術を生かしつつも現代的なモダンなデザインも取り入れる作品も増え、今なお私たちの生活をより豊かに彩りあるものにしています。
          </p>
        </Section>
        <SectionSpacer height="4em" />
        <Footer />
      </div>
      <MiniScreenSize />
    </>
  )
}

export default Root;
