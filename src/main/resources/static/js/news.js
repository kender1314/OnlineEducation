function fun(i) {
    switch (i) {
        case 1:
            document.getElementById("my-content-reply").style.display = "block";
            document.getElementById("my-content-like").style.display = "none";
            document.getElementById("my-content-notice").style.display = "none";
            document.getElementById("my-content-news").style.display = "none";
            break;
        case 2:
            document.getElementById("my-content-reply").style.display = "none";
            document.getElementById("my-content-like").style.display = "block";
            document.getElementById("my-content-notice").style.display = "none";
            document.getElementById("my-content-news").style.display = "none";
            break;
        case 3:
            document.getElementById("my-content-reply").style.display = "none";
            document.getElementById("my-content-like").style.display = "none";
            document.getElementById("my-content-notice").style.display = "block";
            document.getElementById("my-content-news").style.display = "none";
            break;
    }
}