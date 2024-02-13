const NAV1_SELECTOR = ".nav1";
const NAV2_SELECTOR = ".nav2";
const LINK_SELECTOR = ".col-xs-4";
const IFRAME_SELECTOR = "iframe";
const HEIGHT_MOBILE = "calc(100% - 170px)";
const HEIGHT_NAV2 = "calc(100% - 60px)";

const nav1 = document.querySelector(NAV1_SELECTOR);
const nav2 = document.querySelector(NAV2_SELECTOR);
const links = nav1.querySelectorAll(LINK_SELECTOR);
const iframe = document.querySelector(IFRAME_SELECTOR);
let player = document.getElementById('player');
let flag = true;

iframe.style.height = HEIGHT_MOBILE;

ban(document);
ban(iframe.contentDocument);

for (const link of links) {
    link.addEventListener("click", () => {
        let title = link.querySelector("a").getAttribute("title");
        if (title.startsWith("在当前页打开")) {
            iframe.src = title.replace("在当前页打开", "");
        }
    });
}

function toggleNav() {
    flag = !flag;
    nav1.style.display = flag ? "block" : "none";
    nav2.style.display = flag ? "none" : "block";
    iframe.style.height = flag ? HEIGHT_MOBILE : HEIGHT_NAV2;
}

function ban(item){
    item.oncontextmenu = function(){
        return false;
    }
    item.onkeydown = function (e) {
        if (e.keyCode === 123) {
            e.preventDefault();
        }
    };
}