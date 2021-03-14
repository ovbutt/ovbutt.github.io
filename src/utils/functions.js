export const isDarkTheme = () => {
    const isDark = localStorage.getItem("isDark")
    if(isDark === true){
        return true
    }
    else return false
}