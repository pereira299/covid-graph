import React from "react";


const Header: React.FC = () => {

    return (
        <div className="flex flex-row shadow-lg bg-white justify-between p-5 fixed z-20 w-screen">
            <div className="rounded-lg bg-amber-500 w-auto p-3">
                <p className="text-3xl text-center font-bold text-white">covidGraph</p>
            </div>

            <div className="flex flex-row w-6/12">
                <a href="#" className="w-3/12 flex flex-col justify-center">
                    <p className="text-2xl font-bold hover:text-amber-500 text-black text-center">Casos</p>
                </a>
                <a href="#" className="w-3/12 flex flex-col justify-center">
                    <p className="text-2xl font-bold hover:text-amber-500 text-black text-center">Mortes</p>
                </a>
                <a href="#" className="w-3/12 flex flex-col justify-center">
                    <p className="text-2xl font-bold hover:text-amber-500 text-black text-center">Vacinas</p>
                </a>
            </div>
        </div>
    )
}

export default Header;