/**
 * 启用页面的辅助粘贴
 */

console.log("====select-copy===");

try {
    var newScript = document.createElement("script");
    var sHtml =
        'document.body.oncontextmenu = function() {\
            return true;\
        };\
        document.oncopy = null;\
        document.body.setAttribute("oncopy", "")';
    newScript.innerHTML = sHtml;
    document.body.appendChild(newScript);
} catch (e) {
    console.error("====select-copy:" + e + "===");
}
