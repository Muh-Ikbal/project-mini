const button = document.querySelector("button");

function palindrom(str) {
    const textCleaned = str.toLowerCase().replace(/[^a-z-0-9]/g, "");
    const reverseText = textCleaned.split("").reverse().join("");
    return textCleaned === reverseText;
}

button.addEventListener("click", () => {
    const inputText = document.querySelector("#inputText").value;
    const result = document.querySelector("#result");
    const isPalindrom = palindrom(inputText);
    console.log(inputText);
    if (isPalindrom) {
        result.textContent = `${inputText} adalah palindrom`;
    } else {
        result.textContent = `${inputText} bukan palindrom`;
    }
});
