import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <p className="font-bold text-6xl dark:text-white">Hello World</p>
      {theme === "light" ? <button onClick={()=>setTheme("dark")} className="w-7 h-7 bg-red-500"/> : <button onClick={()=>setTheme("light")} className="w-7 h-7 bg-yellow-500"/>}
      
    </div>
  );
}

export default App;
