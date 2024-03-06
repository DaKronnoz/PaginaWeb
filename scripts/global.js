document.querySelector(".close").addEventListener("click", function()
{
    console.log("click");
    document.querySelector(".ventana").classList.remove("open");
});

document.querySelector(".abrir").addEventListener("click", function()
{
    console.log("click");
    document.querySelector(".ventana").classList.add("open");
});