function doubleValue() {
const input1 = document.getElementById("inputField1").value.trim();
const input2 = document.getElementById("inputField2");

if (!isNaN(input1) && input1 !== "")
{
const doubledValue = parseFloat(input1) *2;
input2.value = doubledValue;
} else {
alert("pogaluysta, vvedite chislovoe znachenie v pervom pole!");
}
}
