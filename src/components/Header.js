import React from 'react'
import '../App.css';
export default function Header() {
    return (
        <div>
            {/* <div class="flex relative gap-[2.5rem] mt-[6rem] z-10">
                <div class="flex gap-5 flex-col items-center"> */}
            {/* left */}
            {/* <img src="./images/place_your_logo_here_doub.png" alt="" />
                    <h2 className='text-[5rem] mt-8 mb-14 italic font-[500] font-["reey"]'>Italian Food</h2>
                    <h4>Loremipsum dolor</h4>

                    <div class="button btn">READ MORE</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut
                        labore et dolore magna.</p>
                </div> */}

            {/* <!-- right --> */}
            {/* <div class="content-right">
                    <img src="./images/place_your_image_here_dou_11.png" alt="" />
                </div>
            </div> */}





            <div className='relative bg-[url("images/header_background_2.png")] sm:min-h-[1150px] min-h-[950px] bg-cover bg-no-repeat bg-center '>

            
            <div className="lg:body-container w-[90%] mx-auto flex md:flex-row flex-col relative gap-[2.5rem] lg:pt-[6rem] pt-[3rem] z-10 text-white">
                <div className=" flex gap-5 flex-col md:items-start items-center">
                    {/* left */}
                    <img src="./images/place_your_logo_here_doub.png" alt="" />
                    <h2 className='md:text-[5rem] text-[3rem] mt-8 md:mb-14 mb-6 italic font-[500] font-["reey"]'>Italian Food</h2>
                    <h4 className='text-[1.4rem] md:-ml-14  tracking-[4px] italic uppercase font-bold'>Loremipsum dolor</h4>

                    <div className="button bg-white py-2 px-9 mt-8 font-bolder text-[#2e3034] uppercase  transition-all duration-500 hover:text-white">READ MORE</div>
                    <p className='md:text-[20px] md:pr-36 max-md:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut
                        labore et dolore magna.</p>
                </div>

                {/* <!-- right --> */}
                <div>
                    <img src="./images/place_your_image_here_dou_11.png" className='lg:w-[70rem] w-[50%] mx-auto' alt="" />
                </div>
                <div className="absolute lg:right-[28rem] lg:bottom-[-11rem] lg:flex hidden">
                    <img src="./images/place_your_image_here_dou_10.png" alt="" />
                </div>
                <div className="absolute lg:right-0 lg:bottom-[-26rem] lg:flex hidden">
                    <img src="./images/place_your_image_here_dou_12.png" alt="" />
                </div>
            </div>
            </div>
        </div>

    )
}
