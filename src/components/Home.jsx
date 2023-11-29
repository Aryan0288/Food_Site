import React, { useState } from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Nav />
      <div className='lg:body-container mx-auto relative bg-[url("images/header_background_2.png")] sm:min-h-[1150px] min-h-[950px] bg-cover bg-no-repeat bg-center '>



        <div className="lg:body-container w-[90%] lg:px-[2.5rem] mx-auto flex md:flex-row flex-col relative gap-[2.5rem] lg:pt-[14rem] pt-[7rem]  text-white">
          <div className="flex gap-5 flex-col md:items-start items-center">
            {/* left */}
            {/* <img src="./images/place_your_logo_here_doub.png" alt="" /> */}
            <img src="images/italic_food-removebg-preview.png" className=' w-[200px] rounded-full' />
            <h2 className='md:text-[5rem] text-[3rem] mt-8 md:mb-14 mb-6 italic font-[500] font-["reey"]'>Italian Food</h2>
            <h4 className='text-[1.5rem] md:-ml-14  tracking-[4px] italic uppercase font-bold'>Enjoy Food</h4>
            {/* <a href='https://www.foodnetwork.com/recipes' target='_blank'> */}
              <div className="button bg-white py-2 px-9 mt-8 font-bolder text-[#2e3034] uppercase  transition-all duration-500 hover:text-white"><NavLink to="/AddtoCart">READ MORE</NavLink> </div>
            {/* </a> */}
            <p className='md:text-[20px] md:pr-36 max-md:w-[80%]'>
              Eating a wide variety of nutritious foods, including fruit, vegetables, nuts, seeds, and lean protein can help support your overall health.
            </p>
          </div>

          {/* <!-- right --> */}
          <div>
            <img src="./images/place_your_image_here_dou_11.png" className='lg:w-[70rem] w-[75%] mx-auto' alt="" />
          </div>
          <div className="absolute lg:right-[28rem] lg:bottom-[-11rem] lg:flex hidden">
            <img src="./images/place_your_image_here_dou_10.png" alt="" />
            
          </div>
          <div className="absolute lg:right-0 lg:bottom-[-26rem] lg:flex hidden">
            <img src="./images/place_your_image_here_dou_12.png" alt="" />
          </div>
        </div>
      </div>


      {/* !First section */}


      <div className="w-[100vw]">
        <div className="lg:body-container w-[90%] mx-auto pt-20 flex flex-col items-center">
          <div>
            <h2 className="menu text-center font-[reey] lg:text-[40px] text-[30px] mb-[55px] text-[#2f3135] font-[800] tracking-[0.3em] leading-[5rem]">ITALIAN FAVORITES</h2>
            <p className='text-center lg:w-[55%] w-[100%] mx-auto text-[#2f3135] text-[20px]'>
              There's more to Italian cuisine than just pizza and pasta. Travel to the varied regions of Italy with this round-up of essential Italian food you can make at home. You'll find all the classic dishes you know and love — like minestrone and chicken Parmesan — plus new recipes you can add to your repertoire.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col gap-[55px] mt-[100px]">
            <div >
              <img src="./images/place_your_image_here_dou_7.png" alt="" />
              <h2 className='mt-[30px] text-[30px] text-[#343434] ml-[45px] '>FRESH PASTA</h2>
              <p className='w-[80%] ml-[45px] text-start text-[17px] text-[#343434]'>I use three or four whole eggs, instead of the two eggs & the six yolks! We have been making egg noodles since I was a kid—and my mother and grandmother before us! It is so good!.</p>

            </div>
            <div className="first-img">
              <img src="./images/place_your_image_here_dou_8.png" alt="" />
              <h2 className='mt-[30px] text-[30px] text-[#343434] ml-[45px]'>DEAR BRACIOLE</h2>
              <p className='w-[80%] ml-[45px] text-start text-[17px] text-[#343434]'>I have made this several times and we love it! After browning, I threw them into the Crock Pot and let them simmer for 4 hours. They were so tender that they cut with a fork.</p>

            </div>
            <div className="first-img">
              <img src="./images/place_your_image_here_dou_9.png" alt="" />
              <h2 className='mt-[30px] text-[30px] text-[#343434] ml-[45px]'>CACIO E PEPE
              </h2>
              <p className='w-[80%] ml-[45px] text-start text-[17px] text-[#343434]'>Pasta bathed in creamy, buttery Parmigiano cheese and pepper? What's not to love? Make sure to reserve a bit of the pasta water that you can mix into the final product; this will give the sauce a smoother, more velvety texture.</p>
            </div>
          </div>
          <a href='https://www.food.com/ideas/breakfast-brunch-recipes-6514?ref=nav' target='_blank'>
            <div className="button border border-[#343434] select-all place-items-center bg-white py-2 px-9 mt-8 font-bolder text-[#2e3034] uppercase  transition-all duration-500 hover:text-white">READ MORE</div>
          </a>

        </div>
      </div>


      {/* second section */}

      <section class="sm:w-full w-[100%] bg-[#27292c] text-white py-[5rem] mt-20">
        <div class="sm:body-container w-[90%] mx-auto flex flex-col items-center">
          <div>
            <h2 className="menu text-center font-[reey]  sm:text-[35px] text-[30px] mb-[55px] text-white font-[500] tracking-[.45em] max-sm:leading-[2.8em]">FAMOUS FOODS</h2>
          </div>
          <div class="flex sm:flex-row flex-col sm:gap-[5rem] gap-[2rem] sm:px-[9rem] px-[2rem]">
            <p className='text-justify '>
              When it comes to food and drink, few can top Italy’s stellar reputation. Ask anyone to name their favourite dishes and you can guarantee things like pizza, pasta and gelato soon come tripping off the tongue.
            </p>
            <p>
              And while these iconic dishes are loved around the globe for very good reason, Italy boasts plenty more crowd-pleasers. So whether you’re staying in the sun-soaked south or the mountainous north, get your taste buds ready: they’re about to go wild.
            </p>
          </div>
          <div >
            <a href='https://www.neilson.co.uk/beach/activities/articles/famous-food-and-drink-of-italy' target='_blank'>
              <div className=" button rounded-[15px] hover:rounded-[4px] border border-[#343434] select-all  bg-white py-2 px-9 mt-8 font-bolder text-[#2e3034] uppercase  transition-all duration-500 hover:text-white">READ MORE</div>
            </a>

          </div>
        </div>
      </section>

      {/* third section */}

      <section class="w-full mt-20">
        <div class="sm:body-container w-[90%] mx-auto">
          <div class="flex sm:flex-row flex-col sm:gap-[25px] gap-1" >
            <div className="max-sm:order-2 max-sm:mt-12">
              <img src="./images/place_your_image_here_dou_6.png" alt="" />
            </div>

            <div class="flex flex-col sm:items-start max-sm:self-center pt-[3rem] gap-[2rem] sm:w-[45%] w-[100%] max-sm:px-[2rem] max-sm:order-1">
              <h2 className='sm:text-[4rem] text-[2.2rem] text-[#27292c] font-bold'>Discount up to
                50% All Excursions</h2>
              <p className='sm:text-[2rem] text-[1.4rem] text-left'>I have made this several times and we love it! After browning, I threw them into the Crock Pot and let them simmer for 4 hours. They were so tender that they cut with a fork.</p>
              <a href='https://www.gadgets360.com/deals/coupon-363441' target='_blank'>
                <div class="bg-[#27292c] font-bold text-center text-[1.8rem] text-white rounded-[37px] px-[55px] py-[16px] button ">READ MORE</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* fouth section */}

      <section class="w-full mt-20 mb-12">
        <div class="sm:body-container w-[90%] mx-auto">
          <div class="flex sm:flex-row flex-col gap-[25px]" >
            <div class="flex flex-col sm:items-start pt-[3rem] gap-[2rem] max-sm:self-center sm:w-[45%]">
              <h2 className='sm:text-[4rem] text-[2.5rem] text-[#27292c] font-bold'>
                January’s Promo: Buy 1 Get 1 Free!
              </h2>
              <p className='sm:text-[2rem] text-[1.3rem] text-left'>
                This Roman pasta dish is made by simply mixing hot spaghetti with a mixture of eggs, pancetta and parmesan or pecorino. The heat of the pasta cooks the egg, leaving you with a beautifully creamy sauce.
              </p>

              <a href='https://www.pinterest.com/pin/subway-pearl-point-opening-promotion-buy-1-get-1-free-29-january-2020-in-2023--736901557801797183/' target='_blank'>
                <div class="bg-[#27292c] font-bold text-center text-[1.8rem] text-white rounded-[37px] px-[55px] py-[16px] button ">READ MORE</div>
              </a>
            </div>
            <div>
              <img src="./images/place_your_image_here_dou_6.png" alt="" />
            </div>

          </div>
        </div>
      </section>

      {/* fifith section */}

      <section class="w-[100%] min-h-[1150px] bg-[url(images/header_background.png)] bg-no-repeat bg-center bg-cover relative">
        <div class="sm:w-[1300px] w-[90%] mx-auto">
          <div className='max-sm:hidden relative'>
            <img className='absolute top-[-9rem] right-[5rem]' src="./images/place_your_image_here_dou_4.png" alt="" />
          </div>

          <div class="flex flex-col gap-[5rem] pt-[10rem] items-center max-sm:w-[90%]">
            <h2 className='text-white sm:text-[1.5rem] text-[1.2rem] font-[700] font-[reey] max-sm:text-center tracking-[0.2em] max-sm:leading-[3.5rem]'>
              QUICK AND EASY PIZZA &nbsp; DOUGH</h2>
            <p className='text-white sm:text-center text-justify text-[1.6rem] sm:w-[60%] '>
              "A very quick way to make your own home-made pizza. This dough rises up nice and has a very light flavour. It can also be made in your bread machine on the 'dough' cycle.</p>




            <div className='w-[10rem] h-[0.7rem] bg-white mt-[-30px]'></div>
          </div>
          <div class="relative max-sm:w-[70%]">
            <img class="absolute sm:left-[25rem] sm:top-[3rem]] max-sm:w-[100%] left-[5rem] top-[4rem]" src="./images/place_your_image_here_dou_3.png" alt="" />
            <img class="absolute sm:left-[12rem] sm:top-[33rem] max-sm:w-[50%] top-52 left-14 set-image" src="./images/place_your_image_here_dou_2.png" alt="" />
          </div>
        </div>
      </section>


      {/* sixth section */}

      <section class="w-[100vw] sm:mt-[12rem] mt-[7rem] mb-[9rem]">
        <div class="sm:body-container w-[90%] mx-auto ">

          <div class="flex sm:flex-row flex-col gap-[4rem] pl-[3rem] text-center justify-center">
            <div class="content-1">
              <h2 className='sm:text-[1.5rem] text-[1.1rem] font-[reey] font-[700] mb-[40px] text-[#333d42] tracking-[12px] leading-[3rem]'>PIZZA MARGHERITA</h2>
              <p className='sm:text-left text-center text-[1.17rem] text-[#333d42]'>
                Modeled after the Italian flag with its green basil, white cheese and red sauce, the pizza Margherita is a Neapolitan specialty, cooked in a scorching oven. This dough requires nearly no work, and the sauce is hardly more complicated than blanching some tomatoes.</p>

            </div>
            <div class="content-1">
              <h2 className='sm:text-[1.5rem] text-[1.3rem] font-[reey] font-[700] mb-[40px] text-[#333d42] tracking-[8px] leading-[3rem]'>FRESH PASTA</h2>
              <p className='sm:text-left text-center text-[1.17rem] text-[#333d42] '>
                I use three or four whole eggs, instead of the two eggs & the six yolks! We have been making egg noodles since I was a kid—and my mother and grandmother before us! It is so good!</p>
            </div>
            <div class="content-1">
              <h2 className='sm:text-[1.5rem] text-[1.3rem] font-[reey] font-[700] mb-[40px] text-[#333d42] tracking-[12px] leading-[3.5rem]'>CLASSIC LASAGNA</h2>
              <p className='sm:text-left text-center text-[1.17rem] text-[#333d42]'>
                This recipe was great, as were the proportions of seasonings. I had to add more cheese and I used some Italian sausage with the ground beef. Excellent!</p>
            </div>
          </div>
          <div class="content-2">
            <p className='sm:px-[18.1rem] text-center sm:text-[22px] text-[20px] font-bold text-[#3f3f3f] mb-[2.5rem] sm:mt-[11rem] mt-[5rem]'>
              Pull up a chair to our biggest and best collection of comfort food recipes. Slow-cooker dishes, casseroles, pot pies, cakes and cookies—it doesn't get better than this.
            </p>
            <p className='sm:px-[18rem] text-[22px] font-bold text-[#3f3f3f] mb-[2.5rem] text-center'>COMFORT FOOD RECIPES</p>
          </div>
        </div>
      </section>


      <div class="relative w-[100vw] bg-[#27292c]">
        <div class="sm:body-container w-[90%] mx-auto">
          <div class="max-sm:hidden absolute top-[-3rem]">
            <img src="./images/place_your_image_here_dou.png" alt="" />
          </div>
          <div class="flex flex-col items-center  text-white py-[13.5rem] gap-[4rem]">
            <h2 className='sm:text-[4.7rem] text-[3.2rem] font-bold'>ITALIC FOOD</h2>
            <p className='sm:text-[1.8rem] text-[1.5rem] sm:px-[11rem] text-center '>
            There's more to Italian cuisine than just pizza and pasta. Travel to the varied regions of Italy with this round-up of essential Italian food you can make at home.
            </p>
            <div class=" relative flex">
              <input type="email" placeholder="Your Email" className='text-black px-[20px] sm:py-[18px] py-[8px] sm:pr-[27rem] rounded-[45px] text-[24px]' />
              <button className='sm:px-[40px] sm:py-[17px] px-[24px] py-[10.5px] sm:text-[1.6rem] text-[1.2rem] font-bold absolute right-0 bg-[#3f3f3f] hover:bg-[#3f4f4f] rounded-[45px] text-white'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}


      <div class="w-[100vw] mt-[8rem] mb-[2rem]">
        <div class="sm:body-container w-[85%] mx-auto">
          <div class="flex sm:flex-row flex-col sm:gap-[8rem] gap-[3rem]" id="contact">
            <div class="flex flex-col items-start sm:w-[35%] sm:gap-[2rem] gap-[1rem]">

              <strong className='text-[#343434] text-[45px] font-[400]  font-[Montserrat]'>ITALIC FOOD</strong>

              <p className='text-[#343434] sm:text-[23px] text-[18px] font-[400] text-left opacity-[0.98] font-[Montserrat]'>
              Our memories of food are some of the strongest we hold on to. Whether they come from feeling homesick or from missing your grandmother's cooking.

                </p>
              <div class="flex gap-[1.3rem] max-sm:hidden">
                <i class="fa-brands fa-instagram text-[42px] text-[#343434] cursor-pointer"></i>
                <i class="fa-brands fa-facebook text-[42px] text-[#343434] cursor-pointer"></i>
                <i class="fa-brands fa-twitter text-[42px] text-[#343434] cursor-pointer"></i>
                <i class="fa-brands fa-square-whatsapp text-[42px] text-[#343434] cursor-pointer"></i>
              </div>
            </div>
            <div class="flex sm:flex-row flex-wrap sm:gap-[2rem] gap-[2rem]">
              <div class="footer-right-parts">
                <strong className='text-[#343434] text-[32px] font-[400]  font-[Montserrat]'>About</strong>

                <ul className='sm:mt-[28px] mt-[18px] sm:text-[22px] text-[18px]'>
                  <li className='mb-[12px]'><a className='text-[#343434]  font-[500]  font-[Montserrat] opacity-[0.9]' href="">History</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434]  font-[500] opacity-[0.9] font-[Montserrat]' href="">Our Team</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434]  font-[500] opacity-[0.9] font-[Montserrat]' href="">Brand Guidelines</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434]  font-[500] opacity-[0.9] font-[Montserrat]' href="">Terms &</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434]  font-[500] opacity-[0.9] font-[Montserrat]' href="">Condition</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434]  font-[500] opacity-[0.9] font-[Montserrat]' href="">Privacy Policy</a></li>
                </ul>
              </div>
              <div class="footer-right-parts">
                <strong className='text-[#343434] text-[32px] font-[400]  font-[Montserrat]'>Services</strong>
                <ul className='sm:mt-[28px] mt-[18px] sm:text-[22px] text-[18px]'>
                  <li className='mb-[12px]'><a className='text-[#343434] font-[500] opacity-[0.9] font-[Montserrat]' href="">How to Order</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434] font-[500] opacity-[0.9] font-[Montserrat]' href="">Our Product</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434] font-[500] opacity-[0.9] font-[Montserrat]' href="">Order Status</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434] font-[500] opacity-[0.9] font-[Montserrat]' href="">Promo</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434] font-[500] opacity-[0.9] font-[Montserrat]' href="">Payment Method</a></li>
                </ul>
              </div>
              <div class="footer-right-parts max-sm:order-1">
                <strong className='text-[#343434] text-[32px] font-[400]  font-[Montserrat]'>Other</strong>
                <ul className='sm:mt-[28px] mt-[18px] sm:text-[22px] text-[18px]'>
                  <li className='mb-[12px]'><a className='text-[#343434] font-[500] opacity-[0.9] font-[Montserrat]' href="">Contact Us</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434] font-[500] opacity-[0.9] font-[Montserrat]' href="">Help</a></li>
                  <li className='mb-[12px]'><a className='text-[#343434] font-[500] opacity-[0.9] font-[Montserrat]' href="">Privacy</a></li>
                </ul>
              </div>
              <div class="flex text-[36px] gap-[1.8rem] max-sm:gap-[2.5rem] max-sm:ml-10 sm:hidden max-sm:order-2 max-sm:w-full">
                <i class="fa-brands fa-instagram  text-[#343434] cursor-pointer"></i>
                <i class="fa-brands fa-facebook  text-[#343434] cursor-pointer"></i>
                <i class="fa-brands fa-twitter  text-[#343434] cursor-pointer"></i>
                <i class="fa-brands fa-square-whatsapp  text-[#343434] cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* shukla */}

      {/* <div class="w-3/12 ml-14 justify-start mx-auto absolute text-black top-[300px] flex flex-col gap-6 opacity-100 h-[385px] ">
        <h2 class="text-[1.1rem] font-family: 'Poppins', sans-serif; opacity-90">Professional Services</h2>
        <h1 class="text-[1.6rem] font-bold font-family: 'Poppins', sans-serif; mt-[-30px]">Get your transport quote</h1>
        <input placeholder="Location" type="text" class="w-[310px] p-1 pl-3 focus:outline-none" />
        <input type="text" placeholder="To destination" class="w-[310px] p-1 pl-3 focus:outline-none" />
        <input type="text" placeholder="Email" class="w-[310px] p-1 pl-3 focus:outline-none" />
        <input type="text" placeholder="Contact Number" class="w-[310px] p-1 pl-3 focus:outline-none" />
        <button class="bg-blueblack text-[0.8rem] p-2 w-[145px] hover:bg-bhagwa">GET NOW QUOTE</button>
      </div> */}
    </div>
  )
}
