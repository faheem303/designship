

const FeaturedCard = ({ data, showMoreProjects, classname }) => {
    return (
        <div className={classname} key={data.id}>
            <div className='space-y-8 pb-[rem]'>
                {
                    data.img &&
                <img src={data.img} className='py-2' alt="" />
                }
                <div className='space-y-1'>
                    <p className='text-[16px] font-[500]'>{data.titel}</p>
                    <h3 className='text-[22px] font-[600] text-gray-500'>{data.subtitel}</h3>
                </div>
            </div>
            {
                data.img2 && data.titel2 && data.subtitel2 &&
                <div className='space-y-8 '>
                     <div className='space-y-3 pb-[6rem]'>
                        <p className='text-[18px] font-[500] '>{data.card2para2}</p>
                        <h3 className='text-[16px] font-[600] text-gray-500'>{data.cardtitel2}</h3>
                    </div>

                    <img src={data.img2} alt="" className='' />
                    <div className='space-y-1'>
                        <p className='text-[16px] font-[500]'>{data.titel2}</p>
                        <h3 className='text-[22px] font-[600] text-gray-500'>{data.subtitel2}</h3>
                    </div>
                </div>
            }

            {showMoreProjects && (data.showtitel || data.showsubtitel) && (
                <div className=' space-y-8 '>
                    <img src={data.imgshow} alt="" />
                    <div className='space-y-1'>
                        <p className='text-[16px] font-[500]'>{data.showtitel}</p>
                        <h3 className='text-[22px] font-[600] text-gray-500'>{data.showsubtitel}</h3>
                    </div>
                </div>
            )}
            {showMoreProjects && (data.showtitel2 || data.showsubtitel2) && (
                <div className='space-y-[6rem]'>
                    <div className='space-y-3'>
                        <p className='text-[18px] font-[500] '>{data.showsubtitel2}</p>
                        <h3 className='text-[16px] font-[600] text-gray-500'>{data.showtitel}</h3>
                    </div>
                    <img src={data.imgshow2} alt="" />
                </div>
            )}

        </div>
        // kkkk
    );
};

export default FeaturedCard;
