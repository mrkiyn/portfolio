
import miaSm from '../assets/miaSm.png';

function Main() {

    return (
        <div className='h-screen w-full'>
            <div className='flex flex-col-reverse md:flex-row lg:h-full pt-16'>
                <div className='w-full flex lg:pl-20 xl:pl-32 2xl:pl-64 md:pl-7'>
                    <div className='w-full h-full flex flex-col justify-center md:items-start pt-4 md:pt-0'>
                        <p className='text-3xl md:text-4xl xl:text-7xl font-bold text-white'>Mark Ian Amado</p>
                        <p className='text-2xl md:text-3xl font-bold text-emerald'>Web Developer</p>
                        <div className='py-1 md:py-4'>
                            <button className='bg-castleton font-semibold text-lg text-white rounded-lg py-2 px-5'>Hire Me!</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center md:justify-end items-center lg:pr-20 xl:pr-32 2xl:pr-64 pr-7'>
                    <div className='overflow-hidden flex justify-end items-center rounded-full shadow-xl'>
                        <img src={miaSm} alt='Mark Ian Amado' className='fade 2xl:size-256'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
