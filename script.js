function showTabContent(tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // 隐藏所有内容
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active"); // 移除所有标签的 active 类
    }
    document.getElementById(tab).style.display = "block"; // 显示选中的内容
    event.currentTarget.classList.add("active"); // 为当前标签添加 active 类
}
function openPDF(pdfPath) {
    window.open(pdfPath, '_blank'); // 在新窗口中打开 PDF
}
// Show the first tab content by default
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("overview").style.display = "block";
    document.getElementsByClassName("tab")[0].className += " active";
});
