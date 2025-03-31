function checkInput() {
const input = document.getElementById("inputField").value.trim();
const resultElement = document.getElementById("result");
if (!isNaN(parseFloat(input)) && input !== "")
{
resultElement.textContent = "vvedeno chislovoe znachenie:" + input;
} else {
resultElement.textContent="vvedeno ne chislovoe znachenie!";
}
}