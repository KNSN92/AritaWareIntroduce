import { ImgDesc } from "../components/ImgDescriptionSwiper";
import Images from "../Images";

const history: ImgDesc[] = [
    {
        image: Images.kakiemon.img,
        title: "柿右衛門様式",
        content: "乳白色の素地に赤、緑、黄色、青などを用いた鮮やかな色合いを用いて、日本画などの構図が描かれている事が特徴です。",
    },
    {
        image: Images.nabeshima.img,
        title: "鍋島様式",
        content: (
            <>
                <p>青みがかった地肌や幅広の高台などの特徴があり、この様式の中で更に以下の</p>
                <ul style={{
                    margin: "0 auto",
                    textAlign: "left",
                    width: "fit-content",
                    paddingRight: "auto",
                }}>
                    <li>色鍋島</li>
                    <li>藍鍋島</li>
                    <li>鍋島青磁</li>
                </ul>
                <p>の3つに大別する事が出来ます。</p>
            </>
        ),
    },
    {
        image: Images.kinrande.img,
        title: "金襴手様式",
        content: "濃い呉須による染め付けの上に金襴手と呼ばれる赤色や金色などを用いた色とりどりの絵の具を用い、素地の余白を文様で埋め尽くす高級感溢れる外見が特徴です。",
    },
]

export default history;