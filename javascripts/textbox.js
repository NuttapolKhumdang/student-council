// const tx = document.getElementsByTagName("textarea");
// for (let i = 0; i < tx.length; i++) {
//     tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
//     tx[i].addEventListener("input", __e__OnTextAreaInput, false);
// }

function TextArea(id) {
    const target = typeof id == "string" ? document.getElementById(id) : id;
    target.setAttribute("style", "height:" + (target.scrollHeight) + "px;overflow-y:hidden;");
    target.addEventListener("input", __e__OnTextAreaInput, false);
}

function __e__OnTextAreaInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + "px";
}