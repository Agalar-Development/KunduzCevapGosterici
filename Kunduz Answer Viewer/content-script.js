  function openRawAnswerImageInNewTab(url) {
    const newTab = window.open(url, '_blank');
    newTab.focus();
  }

  function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
  
  
  async function runScript() {

    window.onload = function(event) {
        const maymun = getElementByXpath('//*[@id="__next"]/div[2]/aside/div/div')
        const essek = getElementByXpath('//*[@id="__next"]/div[2]/aside/div/div')
        const rawData = document.getElementById('__NEXT_DATA__').innerText;
        const jsonData = JSON.parse(rawData);
        const rawAnswerImage = jsonData.props.pageProps.question.raw_answer_image;

        let buton = document.createElement('button')

        essek.innerHTML = '';

        buton.id = 'openRawAnswerImageInNewTab';
        buton.class = 'css-mqgdn0';
        buton.class = 'openRawAnswerImageInNewTab';
        buton.innerText = 'Answer Image In New Tab';
        buton.style="color: white; background-color: #4E5058; text-align: center; display: block;margin-top: 5%; margin-left: auto; margin-right: auto; width: 100px; border-radius: 5px; border: 0; cursor: pointer; -webkit-mask-image: -webkit-radial-gradient(#000, #fff);";

        maymun.appendChild(buton)
        console.log('essek', essek);
        console.log('maymun', maymun);
        
        buton.onclick = () => openRawAnswerImageInNewTab(rawAnswerImage);
    };
  }
  
  runScript();
  