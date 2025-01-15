const themeSelector = document.querySelector("#themeSelect");

function changeTheme()
{
    currentTheme = themeSelector.value;
    if(currentTheme == "Dark") 
    {
        document.body.className = "dark";
        document.querySelector("#logo").src = "byui-logo_white.png";
    } else 
    {
        document.body.className = "light";
        document.querySelector("#logo").src = "byui-logo_blue.png"
    }
}

themeSelector.addEventListener('change', changeTheme);