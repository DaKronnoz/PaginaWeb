document.querySelector(".close").addEventListener("click", function()
{
    console.log("click");
    document.querySelector(".ventana").classList.remove("open");
});