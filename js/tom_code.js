function onImageHover (imageDiv) {
    var tomImages = imageDiv.parentNode.getElementsByClassName("tom-image --js");
    for (var tomImage of tomImages) {
        if (tomImage != imageDiv) {
            tomImage.style.opacity = "0.2";
            console.log(tomImage);
        } 
    }
}

function onImageOut(imageDiv) {
    var tomImages = imageDiv.parentNode.getElementsByClassName("tom-image --js");
    for (var tomImage of tomImages) {
        tomImage.style.opacity = "1.0";
    }
}