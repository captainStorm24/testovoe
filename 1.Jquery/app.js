$(document).ready(function () {
    const galleryItem = $(".gallery__item"),
        imgCanvas = $(".image-canvas"),
        buttonNext = $(".image-canvas__btn-next"),
        buttonPrevious = $(".image-canvas__btn-previous"),
        overflow = $(".overflow");

    let currentImg = $(".image-canvas__image.current"),
     currentImgSrc = $(".image-canvas__image.current").attr("src"),
     currentImgAlt = $(".image-canvas__image.current").attr("alt"),
     currentImgIndex = 0;
     previousImg = $(".image-canvas__image.previous").attr("src"),
     nextImg = $(".image-canvas__image.next"),
     nextImgAttr = {};


    galleryItem.on("click", function () {
        currentImgSrc = $(this).children("img").attr("data-image");
        currentImgAlt = $(this).children("img").attr("alt");
        currentImg.attr({
            "src": currentImgSrc,
            "alt": currentImgAlt
        });
        currentImgIndex = $(this).index();
        canvasFadeIn();
    });

    overflow.on("click", function () {
        canvasFadeOut();
    })

    buttonNext.on("click", function () {
        currentImgIndex++;
        if (currentImgIndex >= galleryItem.length) currentImgIndex = 0;
        changeImg(currentImgIndex);
    });

    buttonPrevious.on("click", function () {
        currentImgIndex--;
        if (currentImgIndex <= -1) currentImgIndex = galleryItem.length - 1;
        changeImg(currentImgIndex);
    })

    function resetImages() {
        nextImg.toggleClass("current next");
        currentImg.toggleClass("current next");
        currentImg = $(".image-canvas__image.current");
        nextImg = $(".image-canvas__image.next");
    };

    function canvasFadeIn() {
        imgCanvas.fadeIn(300);
        currentImg.fadeIn(300);
        overflow.fadeIn(300);
    }

    function canvasFadeOut() {
        imgCanvas.fadeOut(300);
        currentImg.fadeOut(300);
        overflow.fadeOut(300);
    }

    function changeImg(imgIndex) {
        nextImgAttr = {
            src : $(galleryItem[imgIndex]).children("img").attr("data-image"),
            alt : $(galleryItem[imgIndex]).children("img").attr("alt")
        };
        nextImg.attr(nextImgAttr);
        currentImg.fadeOut(300);
        nextImg.fadeIn(300, function(){
            resetImages();
        });
    }

})