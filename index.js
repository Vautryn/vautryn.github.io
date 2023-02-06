$(".showGiftButton").click(function () {
    const code = "Svempa61";
    let userAnswer = prompt("Ange din kod");
    if (userAnswer != code)
        alert("Ta på dig glasögonen och prova igen!")
    else
        window.location.href = "gift.html";
})

