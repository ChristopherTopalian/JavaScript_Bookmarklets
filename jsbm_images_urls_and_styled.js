javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_images_urls_and_styled.js */
/* finds all images on a page and styles their borders */
/* shows urls of all images using alert and console.log */
function()
{
    function imagesUrlsAndStyled()
    {
        let urlsOfImages = "";
        let theImages = document.getElementsByTagName("img");
        for(let x = 0; x < theImages.length; x++)
        {
            theImages[x].style.border = '12px solid rgb(140,140,140)';
            urlsOfImages += theImages[x].src;
            urlsOfImages += "\n\n";
        }
        alert(urlsOfImages);
        console.log(urlsOfImages);
    }
    imagesUrlsAndStyled();
}());
