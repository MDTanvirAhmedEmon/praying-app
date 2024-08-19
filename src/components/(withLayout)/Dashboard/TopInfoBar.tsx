import user from '../../../assets/dashboard-icon/user.svg'
import profit from '../../../assets/dashboard-icon/profit.svg'
import Image from 'next/image';

const TopInfoBar = () => {
    return (
        <div className='h-32 flex '>
            <div className="w-1/2 h-full mr-4 bg-[#FDFDFD] rounded-xl flex px-12 items-center justify-between">
                <Image src={user} alt='user' width={80} height={200} />
                <div className='flex flex-col '>
                    <p className='text-3xl mb-2'>Total User</p>
                    <h4 className='text-3xl font-bold self-end'>518</h4>
                </div>
            </div>
            <div className="w-1/2 h-full ml-4 bg-[#FDFDFD] rounded-xl flex px-12 items-center justify-between">
                <Image src={profit} alt='user' width={80} height={200} />
                <div className='flex flex-col '>
                    <p className='text-3xl mb-2'>Total Earning</p>
                    <h4 className='text-3xl font-bold self-end'>$78464</h4>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default TopInfoBar;