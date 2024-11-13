import { useState } from "react";
import NavBar from "./components/NavBar";
import data from "./assets/storydata"
import { useNavigate } from "react-router-dom";

const Ending = () => {
    const navigate = useNavigate();

    const [guess, setGuess] = useState(null)

    return ( 
        <>
            {!guess && (
                <>
                <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                    <div className="bg-Beige w-8/12 h-4/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl overflow-y-auto"> 
                        <h1 className="w-full px-8 py-6 text-3xl">
                            This is an end screen
                        </h1>
                    </div>
                    <div className="w-8/12 p-4 flex justify-center gap-24">
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>{setGuess("Mathew")}}>Mathew</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>{setGuess("Mathew")}}>Nancy</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>{setGuess("Mathew")}}>Leo</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>{setGuess("Mathew")}}>Karen</button>
                    </div>
                </div>
                </>
            )}

            {guess == "Mathew" && (
                <>
                <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                    <div className="bg-Beige w-8/12 h-4/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl overflow-y-auto"> 
                        <h1 className="w-full px-8 py-6 text-3xl">
                            This is an end screen
                        </h1>
                    </div>
                    <div className="w-8/12 p-4 flex justify-center gap-24">
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {navigate("/option")}}>Play Again</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {navigate("/")}}>Home</button>
                    </div>
                </div>
                </>
            )}

            {guess == "Nancy" && (
                <>
                <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                    <div className="bg-Beige w-8/12 h-4/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl overflow-y-auto"> 
                        <h1 className="w-full px-8 py-6 text-3xl">
                            This is an end screen
                        </h1>
                    </div>
                    <div className="w-8/12 p-4 flex justify-center gap-24">
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {navigate("/option")}}>Play Again</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {navigate("/")}}>Home</button>
                    </div>
                </div>
                </>
            )}

            {guess == "Leo" && (
                <>
                <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                    <div className="bg-Beige w-8/12 h-4/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl overflow-y-auto"> 
                        <h1 className="w-full px-8 py-6 text-3xl">
                            This is an end screen
                        </h1>
                    </div>
                    <div className="w-8/12 p-4 flex justify-center gap-24">
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {navigate("/option")}}>Play Again</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {navigate("/")}}>Home</button>
                    </div>
                </div>
                </>
            )}

            {guess == "Karen" && (
                <>
                <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                    <div className="bg-Beige w-8/12 h-4/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl overflow-y-auto"> 
                        <h1 className="w-full px-8 py-6 text-3xl">
                            This is an end screen
                        </h1>
                    </div>
                    <div className="w-8/12 p-4 flex justify-center gap-24">
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {navigate("/option")}}>Play Again</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={() => {navigate("/")}}>Home</button>
                    </div>
                </div>
                </>
            )}
        </>
    );
}

export default Ending;