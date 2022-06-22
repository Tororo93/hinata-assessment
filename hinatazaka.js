'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子どもを全て除去する
 * @param {HTMLElement} element HTMLの要素
 */
 function removeAllChildren(element) {
    while (element.firstChild) {
      // 子どもの要素があるかぎり除去
      element.removeChild(element.firstChild);
    }
  }

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0){
        // 名前が空の時は処理を終了する
        return;
    }

    // TODO 診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    

  // TODO ツイートエリアの作成
  removeAllChildren(tweetDivided);
  tweetDivided.innerText = "";
  const anchor = document.createElement('a');
  const hrefValue =
  'https://twitter.com/intent/tweet?button_hashtag=あなたにおすすめの曲&ref_src=twsrc%5Etfw'

  anchor.setAttribute('href', hrefValue);
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', result);
  anchor.innerText = 'Tweet #あなたにおすすめの曲';

  tweetDivided.appendChild(anchor);

  // widgets.js の設定
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);


};

const answers = [
'{userName}におすすめの曲はゴーフルと君です。  https://youtu.be/hfnS1AUCf5I',
'{userName}におすすめの曲は真夜中の懺悔大会です。  https://youtu.be/CuiLVLTyI3c',
'{userName}におすすめの曲は恋した魚は空を飛ぶです。  https://youtu.be/26ORLsPJYHo',
'{userName}におすすめの曲は飛行機雲ができる理由です。  https://youtu.be/E6EItQRTmAI',
'{userName}におすすめの曲は僕なんかです。  https://youtu.be/15Hsw9QSeoc',
'{userName}におすすめの曲はあくびLetterです。  https://youtu.be/KcpvHDt0bPc',
'{userName}におすすめの曲は酸っぱい自己嫌悪です。  https://youtu.be/eDupOQ6Dc9g',
'{userName}におすすめの曲は夢は何歳まで？です。  https://youtu.be/_YiekxdpaQE',
'{userName}におすすめの曲はってかです。  https://youtu.be/pZDqElqNW34',
'{userName}におすすめの曲は何度でも何度でもです。  https://youtu.be/iKa0B66oQAQ',
'{userName}におすすめの曲はどうする？どうする？どうする？です。  https://youtu.be/Q1E7duxclv8',
'{userName}におすすめの曲は世界にはThank you！が溢れているです。  https://youtu.be/Tl51xNHeP4g',
'{userName}におすすめの曲はRight？です。  https://youtu.be/pyMOOyEWrMg',
'{userName}におすすめの曲は声の足跡です。  https://youtu.be/YClzk5GpaHM',
'{userName}におすすめの曲はJOYFUL LOVEです。  https://youtu.be/mbXtz9zGB_E',
'{userName}におすすめの曲は青春の馬です。  https://youtu.be/hZQzmzXjJB0',
'{userName}におすすめの曲はときめき草です。  https://youtu.be/bgCR9HlsSPY',
'{userName}におすすめの曲はホントの時間です。  https://youtu.be/7iCf1O3tSb4',
'{userName}におすすめの曲はキツネです。  https://youtu.be/13yytDs4TeQ',
'{userName}におすすめの曲は君しか勝たんです。  https://youtu.be/Z59HsgPVbWY',
'{userName}におすすめの曲は誰よりも高く跳べ！です。  https://youtu.be/TEZa21jPDeY',
'{userName}におすすめの曲はそれでも歩いてるです。  https://youtu.be/svldLXix7pw',
'{userName}におすすめの曲は僕たちは付き合っているです。  https://youtu.be/oXNJIkjPhd8',
'{userName}におすすめの曲は君に話しておきたいことです。  https://youtu.be/llspFN0PgzM',
'{userName}におすすめの曲はハッピーオーラです。  https://youtu.be/eQBtQTPCyV4',
'{userName}におすすめの曲はイマニミテイロです。  https://youtu.be/anW-wtEM6Eo',
'{userName}におすすめの曲はアザトカワイイです。  https://youtu.be/m-FRFhvM1EA',
'{userName}におすすめの曲はソンナコトナイヨです。  https://youtu.be/7njC5lgL61c',
'{userName}におすすめの曲は一番好きだとみんなに言っていた小説のタイトルを思い出せないです。  https://youtu.be/kAK9dQtzBno',
'{userName}におすすめの曲はこんなに好きになっちゃっていいの？です。  https://youtu.be/EZBeo_k1k-A',
'{userName}におすすめの曲はドレミソラシドです。  https://youtu.be/qsureA57fEo',
'{userName}におすすめの曲はキュンです。  https://youtu.be/K5HPhoqyO4U',
'{userName}におすすめの曲はFootstepsです。  https://youtu.be/VSQD18hsYz8',
'{userName}におすすめの曲はやさしさが邪魔をするです。  https://youtu.be/88l4oRQGwB0',
'{userName}におすすめの曲はCageです。  https://youtu.be/Fqq-vb-4R10',
'{userName}におすすめの曲はキツネです。  https://youtu.be/31GcaaaVNhs',
'{userName}におすすめの曲はママのドレスです。  https://youtu.be/bnw3rDmcuYU',
'{userName}におすすめの曲はホントの時間です。  https://youtu.be/VhfECOTs8Tk',
'{userName}におすすめの曲は窓を開けなくてもです。  https://youtu.be/LjQWrrctzV0',
'{userName}におすすめの曲はナゼーです。  https://youtu.be/H59N5gIuI34',
];
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
// 全文字のコード番号を取得してそれを足し合わせる
    let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++){
        sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
     }
     // 文字のコード番号の合計を回答の数で割って添字の数値を求める
     const index = sumOfcharCode % answers.length;
     let result = answers[index];

     result = result.replaceAll('{userName}', userName);
      return result;

}
//テストコード
console.assert(
    assessment('太郎') === assessment('太郎')
);
