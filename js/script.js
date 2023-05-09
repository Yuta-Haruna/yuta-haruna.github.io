// トグルボタン
function toggleText() {
    var hiddenText = document.getElementById("hidden-text");
    if (hiddenText.style.display === "none") {
      hiddenText.style.display = "block"; // 表示する
    } else {
      hiddenText.style.display = "none"; // 非表示にする
    }
}