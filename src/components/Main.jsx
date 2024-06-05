import mia from '../assets/mia.png';
import miaSm from '../assets/miaSm.png';

function Main() {

    const isSmallScreen = () => {
        return window.innerWidth <= 768;
    };

    return (
        <>
            <div className="w-full h-fit py-5 lg:py-0 lg:h-screen flex">
                <div className="mt-14 w-full grow bg-night flex">
                    <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-center gap-5 lg:justify-between items-center lg:px-20 xl:px-32 2xl:px-64">
                        <div className='text-center lg:text-left flex flex-col items-center lg:items-start sm:gap-3 xl:gap-5'>
                            <div className=''>
                                <h2 className='font-bold text-emerald text-3xl lg:text-5xl xl:text-7xl'>Mark Ian Amado</h2>
                                <h2 className='font-bold text-white text-xl lg:text-4xl xl:text-5xl italic'>Web Developer</h2>
                            </div>
                            <button className="bg-castleton w-fit xl:text-xl lg:text-lg text-white font-semibold py-2 px-6 rounded-xl border border-castleton shadow-md transform transition-transform duration-300 hover:scale-105 active:scale-95">
                                Contact Me
                            </button>
                        </div>
                        {
                            isSmallScreen() ? (
                                <img src={miaSm} alt='Mark Ian Amado' className='w-full md:w-1/2 fade'/>
                            ):
                            (
                                <img src={mia} alt='Mark Ian Amado' className='2xl:h-full h-5/6 fade'/>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
