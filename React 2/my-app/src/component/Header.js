import React from 'react'
import { faSearch, faPlus, faMessage, faHome, faTelevision, faStore, faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
    return (
        <header className="max-w-full h-20 md:w-full md:h-20 bg-slate-500 md:px-10 md:py-6 px-4 py-6">
            <div className="mx-auto sm:flex sm:justify-between flex justify-between flex-wrap">
                <div className="flex flex-row gap-4">
                    <h1 className="md:text-blue-600 md:font-serif md:font-extrabold md:text-3xl  text-lg font-extrabold">FACEBOOK</h1>
                    <div className="flex items-center">
                        <input 
                        type='text'
                        className='border rounded-lg  px-4 py-2 focus:outline-none focus:ring focus:border-blue-500'
                        placeHolder="search..."
                        />
                        <button className="bg-white text-blue-500 rounded-l-lg px-4 py-2 ">
                            <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmins="http://www.w3.org/2000/svg"
                            >
                                 <path 
                                 strokeLinecap="round"
                                 strokeLinejoin='round'
                                 strokeWidth="2"
                                 d="M21 21l-4.35-4.35"
                                 />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block w-1/4 ">
                <div className="flex gap-20">
                        <FontAwesomeIcon className="h-6 w-6" icon={faHome} />
                        <FontAwesomeIcon className="h-6 w-6 " icon={faTelevision} />
                        <FontAwesomeIcon className="h-6 w-6 " icon={faStore} />
                </div>
                </div>
                <div className="flex md:gap-6 gap-2 my-auto">
                <div className="bg-slate-300 rounded-full flex justify-center items-center md:w-10 md:h-10 w-6 h-6">
                        <FontAwesomeIcon className="md:h-6 md:w-6 w-4 h-4" icon={faHamburger} />
                    </div>
                    <div className="bg-slate-300 rounded-full flex justify-center items-center  md:w-10 md:h-10 w-6 h-6">
                        <FontAwesomeIcon className="md:h-6 md:w-6 w-4 h-4" icon={faPlus} />
                    </div>
                    <div className="bg-slate-300 rounded-full flex justify-center items-center md:w-10 md:h-10 w-6 h-6">
                        <FontAwesomeIcon className="md:h-6 md:w-6 w-4 h-4" icon={faSearch} />
                    </div>
                    <div className="bg-slate-300 rounded-full flex justify-center items-center md:w-10 md:h-10 w-6 h-6">
                        <FontAwesomeIcon className="md:h-6 md:w-6 w-4 h-4" icon={faMessage} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header