import sutra from '../assets/sutra.png'
import bazzar from '../assets/bazzar.svg';
function Part() {
    return (
        <section className='border-b-2 mt-32 mb-32'>
            <div className="flex justify-between items-center ">
                <div className="w-[45%] h-[5px] font-serif bg-black"></div>
                <p className='text-2xl font-bold'>Featured In</p>
                <div className="w-[45%] h-[5px] bg-black"></div>
            </div>
            <div className="flex justify-around items-center">
                <div className="logo">
                    <a target='_blank' href="https://www.weddingsutra.com/"><img src={sutra} alt="" width="300px" className=' grayscale transition-all ease-in-out duration-500 hover:scale-125' /></a>
                </div>
                <div className="logo">
                    <a target='_blank' href="https://www.weddingbazaar.com/"><img src={bazzar} alt="" width="250px" className=' grayscale transition-all ease-in-out duration-500 hover:scale-125' /></a>
                </div>
            </div>

        </section>
    )
}

export default Part