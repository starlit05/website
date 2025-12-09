// JS BY PETRAPIXEL!! https://petrapixel.neocities.org/coding/layout-base-code

// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

  // Inserting your header and footer:
  document.body.insertAdjacentHTML("afterbegin", headerEl);
  document.body.insertAdjacentHTML("beforeend", footerEl);

  // Other initializations:
  initActiveLinks();

  // your code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <header> element, but I recommend it.
const headerEl = `

`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `      
  <footer>
    <p class="border">coded by sop!</p>
      <section id="myuttons">
        <a href="https://wolfsbane.nekoweb.org" title="chew toy"><img class="button" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.WoICK_kezbrncDfQjlVjjAHaFQ%3Fpid%3DApi%26ucfimg%3D1&f=1&ipt=80b738b14b13d046bc4772653552b2c79667fc0019853e96daa1e28106cfc35d&ipo=images" style="border:1px solid; width:88px; height:31px;"></a>

        <a href="https://yumeoi.skin" title="alternate universe twin"><img class="button" src="https://yumeoi.skin/image-files/my-buttons/icantread.png"></a>

        <a href="https://oversurge.nekoweb.org" title="ultrakill og since like march 2024"><img class="button" style="width:88px; height:31px;" src="https://oversurge.nekoweb.org/osvbtnanim.gif"></a>

        <a href="https://nekoweb.org/" title="ultrakill on nekoweb happens to be hosted on nekoweb. who knew?"><img src="https://nekoweb.org/assets/buttons/button6.gif" class="button"></a><!-- button by s1nez.nekoweb.org -->

        <a href="https://temstuff.neocities.org" target="_blank"><img src="https://64.media.tumblr.com/c7cf0eeea7b528183d95bbc043079c1e/a51f6f9947d2d663-2c/s100x200/598c4337b54f4e9c8c9f4cb04148a191c4daafde.gif" alt="button that reads 'tem stuff' on it" class="button></a>

        <a href="https://maia.crimew.gay" target="_blank" title="the maia. if you don't know it i really suggest reading the blog section"><img src="https://maia.crimew.gay/badges/maia.crimew.gay.png" alt="maia crimew" class="button"></a>

        <a href="https://pawpyrus.art" title="words cannot describe how cool i think this site is"><img src="https://pawpyrus.art/graphics/siteButton.gif" height="31px" width="88px" class="button"></a>
        <a href="https://melankorin.net/" title="of course it's melankorin theres no button wall complete without them"><img src="https://melankorin.net/assets/img/buttons/button-1.gif" alt="" class="button"></a>
        <a href="https://yatagarasu.nekoweb.org" target="_blank" title="RAHHHHHHH"><img src="https://yatagarasu.nekoweb.org/images/yatagarasuButtonB.gif" alt="Yatagarasu site button" class="button"></a>
        <a href="https://dreamscape.nekoweb.org" target="_blank" title="a very neat website with a really interesting webmaster"><img src="https://files.catbox.moe/901i0e.gif" alt="" class="button"></a>
        <a href="https://decadancen.com/" title="im excited to see where it'll go next"><img src="sciku.png" class="button" style="width:88px; height:31px;"></a>
        <a href="http://nondmo.online" title="peak aesthetic imo, simple but sophisticated in a way."><img src="http://nondmo.online/assets/button.png" class="button"></a>
        <a href="https://satorikeiko.nekoweb.org" title="an interesting person"><img src="https://satorikeiko.nekoweb.org/88x31.png" class="button"></a>
        <a href="https://deathlobotomy.nekoweb.org/" title="one of the first nekoweb sites i ever saw,, definitely a factor in me going into the indieweb scene. very cool 👍"><img src="https://deathlobotomy.nekoweb.org/img/buttons/moldbutton.gif" class="button"></a>
        <a href="https://sunshine.nekoweb.org/" target="_blank" title="first status.cafe theme i saw and went 'they made this with html and css only- maybe i can do that too!' also we have the same name lol"><img src="https://sunshine.nekoweb.org/assets/sitebutton.gif" class="button"></a>
        <a href="https://cyberdemon.nekoweb.org/" title="its cool"><img src="https://cyberdemon.nekoweb.org/button.png" class="button"></a>
        <a href="https://obama.nekoweb.org/" title="senator ocasio-cortez said i need to link him so everyone knows i pay him for ads on his website. sorry chat"><img src="https://obama.nekoweb.org/obbutton.png" alt="obama button" class="button"></a>
        <a href="https://amfmradio.org"><img src="https://amfmradio.org/imgs/buttonB.png" class="button"></a>
      </section>

      <br> <a href="https://starlit05.nekoweb.org"><img src="https://starlit05.nekoweb.org/button.png"></a>
      <textarea><a href="https://starlit05.nekoweb.org"><img src="https://starlit05.nekoweb.org/button.png" alt="a picture of raw meat, specifically slices of steak, with the text 'like some sort of aortic work' on it."></a></textarea>
  </footer>
`;