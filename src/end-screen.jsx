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
                            November 4th 1947, 03:00AM
                        </h1>

                        <p className="w-full px-8 text-3xl"> 
                            Time has officially run out, therefore you must decide who killed Sharon.
                        </p>
                        <p className="w-full px-8 text-3xl"> 
                            Pick one of the four suspects:
                        </p>
                        <li className="w-full px-8 text-3xl"> 
                            Mathew - Business Man 
                        </li>
                        <li className="w-full px-8 text-3xl"> 
                            Nancy - Victim's Friend 
                        </li>
                        <li className="w-full px-8 text-3xl"> 
                            Leo - Street Kid
                        </li>
                        <li className="w-full px-8 text-3xl"> 
                            Karen - Old Woman
                        </li>
                    </div>
                    <div className="w-8/12 p-4 flex justify-center gap-24">
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>{setGuess("Mathew")}}>Mathew</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>{setGuess("Nancy")}}>Nancy</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>{setGuess("Leo")}}>Leo</button>
                            <button className="w-2/6 border-2 text-4xl border-white bg-black text-white font-heading rounded-xl" onClick={()=>{setGuess("Karen")}}>Karen</button>
                    </div>
                </div>
                </>
            )}

            {guess == "Mathew" && (
                <>
                <div className="bg-skyline bg-no-repeat bg-cover bg-center h-screen w-screen text-white flex flex-wrap justify-center">
                    <NavBar/>
                    <div className="bg-Beige w-8/12 h-4/6 border-4 border-black font-typewriter text-black text-2xl flex flex-wrap rounded-xl overflow-y-auto"> 
                        <h1 className="w-full px-8 py-6 text-5xl">
                            November 4th 1947, 03:01AM
                        </h1>
                        <p className="flex w-full px-12 text-6xl justify-center items center"> 
                            Mathew was NOT the killer
                        </p>
                        <p className="flex w-full px-12 text-6xl justify-center items center"> 
                            Ending: BAD
                        </p>
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
                        <h1 className="w-full px-8 py-6 text-5xl">
                            November 4th 1947, 03:01AM
                        </h1>
                        <p className="flex w-full px-12 text-6xl justify-center items center"> 
                            Nancy was NOT the killer
                        </p>
                        <p className="flex w-full px-12 text-6xl justify-center items center"> 
                            Ending: BAD
                        </p>
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
                    <h1 className="w-full px-8 py-6 text-5xl">
                            November 4th 1947, 03:01AM
                        </h1>
                        <p className="flex w-full px-12 text-6xl justify-center items center"> 
                            Leo was NOT the killer
                        </p>
                        <p className="flex w-full px-12 text-6xl justify-center items center"> 
                            Ending: BAD
                        </p>
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
                        <h1 className="w-full px-8 py-6 text-5xl">
                            November 4th 1947, 03:01AM
                        </h1>
                        <p className="flex w-full px-12 text-6xl justify-center items center"> 
                            Karen was the killer
                        </p>
                        <p className="flex w-full px-12 text-6xl justify-center items center"> 
                            Ending: GOOD
                        </p>
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