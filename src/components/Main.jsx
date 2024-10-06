
import miaSm from '../assets/miaSm.png';

function Main({ mainRef }) {

    return (
        <div className='lg:h-screen w-full' id="main" ref={mainRef}>
            <div className='flex flex-col-reverse md:flex-row lg:h-full pt-12 lg:pt-16 main-bg pb-5 lg:pb-0'>
                <div className='w-full flex lg:pl-20 xl:pl-32 2xl:pl-64 md:pl-7'>
                    <div className='w-full h-full flex flex-col justify-center md:items-start pt-4 md:pt-0'>
                    <p className='text-3xl md:text-4xl xl:text-7xl font-black bg-gradient-to-r from-castleton to-emerald text-transparent bg-clip-text'>Mark Ian Amado</p>
                        <p className='text-2xl md:text-3xl font-bold text-emerald'>Full Stack Software Engineer</p>
                        <div className='py-1 md:py-4'>
                            <button className='bg-castleton font-semibold text-sm text-white rounded-lg px-3 py-2 lg:py-2 lg:px-5 lg:text-lg'>Hire Me!</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center md:justify-end items-center lg:pr-20 xl:pr-32 2xl:pr-64 px-7'>
                    <div className='overflow-hidden flex justify-end items-center'>
                        <img src={miaSm} alt='Mark Ian Amado' className='fade' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
