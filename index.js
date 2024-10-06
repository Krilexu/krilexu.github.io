$(window).load(function() {
    $("body").removeClass("preload");
});

let containerArray = [
    {
        ["Transform"]: {
            ["X"]: "0%",
            ["Y"]: "0%"
        },
        ["Scale"]: 1
    },
    {
        ["Transform"]: {
            ["X"]: "0%",
            ["Y"]: "0%"
        },
        ["Scale"]: 1.1
    },
    {
        ["Transform"]: {
            ["X"]: "-30%",
            ["Y"]: "-30%"
        },
        ["Scale"]: 1
    },
    {
        ["Transform"]: {
            ["X"]: "30%",
            ["Y"]: "-30%"
        },
        ["Scale"]: 1
    },
    {
        ["Transform"]: {
            ["X"]: "30%",
            ["Y"]: "35%"
        },
        ["Scale"]: 1
    },
    {
        ["Transform"]: {
            ["X"]: "-30%",
            ["Y"]: "35%"
        },
        ["Scale"]: 1
    },

    {
        ["Transform"]: {
            ["X"]: "0%",
            ["Y"]: "-35%"
        },
        ["Scale"]: 1
    },

    {
        ["Transform"]: {
            ["X"]: "35%",
            ["Y"]: "0%"
        },
        ["Scale"]: 1
    },

    {
        ["Transform"]: {
            ["X"]: "-35%",
            ["Y"]: "0%"
        },
        ["Scale"]: 1
    },

    {
        ["Transform"]: {
            ["X"]: "0%",
            ["Y"]: "0%"
        },
        ["Scale"]: 1.2
    },
]

let currentIndex = 1
let maxPages = 10



let nextPage = () => {
    if(currentIndex == maxPages) return

    $(".left-arrow").css("pointer-events", "all")
    $(".left-arrow").css("opacity", "1")
    $(".left-arrow").css("visibility", "visible")

    $(".right-arrow").css("left", "93.5%")


    $("#index-" + currentIndex).css("opacity","0")
    $("#index-" + (currentIndex+1)).css("opacity","1")

    $(":root")[0].style.setProperty("--index" + currentIndex, "100%")
    currentIndex += 1
    $(":root")[0].style.setProperty("--index" + currentIndex, "0%")

    let transformData = containerArray[currentIndex-1];
    if (transformData) {
        let transformValue = `translate(${transformData.Transform.X}, ${transformData.Transform.Y}) scale(${transformData.Scale})`;
        $(".container").css("transform", transformValue);
    }

    if(currentIndex == maxPages) {
        $(".right-arrow").css("opacity", "0")
        $(".right-arrow").css("visibility", "hidden")
    }

    if(currentIndex == 3) {
        $("#index-3 #image").css("opacity","1")
        $("#index-3 #image2").css("opacity","1")
        $("#index-3 #image3").css("opacity","1")
    } else {
        $("#index-3 #image").css("opacity","0")
        $("#index-3 #image2").css("opacity","0")
        $("#index-3 #image3").css("opacity","0")
    }
}

let previousPage = () => {
    if(currentIndex == 1) return

    $(".right-arrow").css("opacity", "1")
    $(".right-arrow").css("visibility", "visible")

    $("#index-" + currentIndex).css("opacity","0")
    $("#index-" + (currentIndex-1)).css("opacity","1")

    $(":root")[0].style.setProperty("--index" + currentIndex, "100%")
    currentIndex -= 1
    $(":root")[0].style.setProperty("--index" + currentIndex, "0%")

    let transformData = containerArray[currentIndex-1];
console.log(transformData)

    if (transformData) {
        let transformValue = `translate(${transformData.Transform.X}, ${transformData.Transform.Y}) scale(${transformData.Scale})`;
        $(".container").css("transform", transformValue);
    }


    if(currentIndex == 1) {
        $(".left-arrow").css("pointer-events", "none")
        $(".left-arrow").css("opacity", "0")
        $(".left-arrow").css("visibility", "hidden")

        $(".right-arrow").css("left", "89%")
    }

    if(currentIndex == 3) {
        $("#index-3 #image").css("opacity","1")
        $("#index-3 #image2").css("opacity","1")
        $("#index-3 #image3").css("opacity","1")
    } else {
        $("#index-3 #image").css("opacity","0")
        $("#index-3 #image2").css("opacity","0")
        $("#index-3 #image3").css("opacity","0")
    }
}



$(document).ready(function() {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const loadPage = async () => {
        await delay(3800);
    
        $(".container").css("opacity", "1")
        $(".container").css("pointer-events", "all")
    
        $(".loader").css("opacity", "0")
    
    
        await delay(1300)
        $(".loader").remove()
    }
    
    loadPage()

    let isTyping = false
    let typingSpeed = 100; // milliseconds

    function typeTextForward(element, text) {
        var currentText = element.text();
        var i = currentText.length;

        isTyping = true

        function type() {

            if(isTyping == false) return

            if (i < 18) {

                currentText += text.charAt(i);
                element.text(currentText);
                i++;
                setTimeout(type, typingSpeed);
            } else {
                isTyping = false
            }
        }
        type();
    }

    async function typeTextBackward(element) {
        var i = element.text().length;

        isTyping = false

        function erase() {
            if(isTyping == true) return

            if (i >= 6) {
                isTyping = false

                element.text(element.text().substring(0, i));
                i--;
                setTimeout(erase, typingSpeed);
            } else {
                isTyping = true
            }
        }
       

        erase();
    }

    $('.container').hover(
        function() { // Mouse enter
            var $textElement = $(this).find('.text');
            typeTextForward($textElement, "Krilex's Portfolio");

            $(".left-arrow").css("pointer-events", "all")
            $(".right-arrow").css("pointer-events", "all")

            if(currentIndex == 1) {
                $(".right-arrow").css("left", "89%")
            }else{
                $(".right-arrow").css("left", "93.5%")
            }
        },
        function() { // Mouse leave
            var $textElement = $(this).find('.text');
            typeTextBackward($textElement);

            $(".left-arrow").css("pointer-events", "none")
            $(".right-arrow").css("pointer-events", "none")

            $(".right-arrow").css("left", "102%")
        }
    );











    //////////////////////////////



})





  