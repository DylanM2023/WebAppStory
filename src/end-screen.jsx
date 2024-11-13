import { useState } from "react";
import NavBar from "./components/NavBar";
import data from "./assets/storydata"
import { useNavigate } from "react-router-dom";

const Ending = () => {
    const navigate = useNavigate();

    const [option, setOption] = useState(data.main)

    const ending = (path) => {
        setOption(data[path])
    };

    const restart_button = () =>{
        navigate('/option')
    };

    const home_button = () =>{
        navigate('/')
    };

    const github_button = () =>{
        location.href = "https://github.com/DylanM2023/frameworks/"
    };

    const exit_button = () =>{
        location.href = "https://google.com/"
    };

    const button_state = {ending}

    return ( 
        <>
            <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                <div className="bg-Beige w-8/12 h-4/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl overflow-y-auto"> 
                    <h1 className="w-full px-8 py-6 text-3xl">
                        {option.header}
                    </h1>
                    <p className="w-full px-8 text-3xl">
                        {option.body}
                    </p>
                </div>
                <div className="w-8/12 p-4 flex justify-center gap-24">
                    <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {button_state(option.button_1_path)}}>{option.restart}</button>
                    <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl">{option.home}</button>
                    <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl">{option.github}</button>
                    <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl">{option.exit}</button>
                </div>
            </div>
        </>
    );
}

export default Ending;