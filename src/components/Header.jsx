import { useTheme } from "../hooks/useTheme"


function Header(){

    

    const { theme, setTheme } = useTheme()
    return(
        <>
        <p className="car font-bold text-6xl dark:text-white">Hello World</p>
      {theme === "light" ? <button onClick={()=>setTheme("dark")} className="w-7 h-7 bg-red-500"/> : <button onClick={()=>setTheme("light")} className="w-7 h-7 bg-yellow-500"/>}
        </>
    )
}

export default Header