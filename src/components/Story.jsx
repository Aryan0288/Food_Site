import React from 'react'
import Nav from './Nav'

export default function Story() {
    return (
        <div>
            <Nav />
            <h2 className='bg-[#28292d] text-white pt-32 sm:px-40 px-2 flex flex-col gap-3'>

                <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <div class="flex flex-col lg:flex-row justify-between gap-8">
                        <div class="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">


                                By Team Food.com
                                To our favorite community of home cooks we say: Welcome back to Food.com!
                                <br />

                                We may have a different name today, but there’s one thing that will never change, and that’s what you can expect from us:</p>
                        </div>
                        <div class="w-full lg:w-8/12">
                            {/* <img class="w-full h-full" src="https://static.abplive.com/wp-content/uploads/2018/03/03181240/ap-modi-yogi-amit.jpeg" alt="A group of People" /> */}
                            <img class="w-full h-full" src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_966/v1/img/recipes/46/41/34/hPCfxttZQnq4ANPjp6vE_WAFFLE_HOUSE_WAFFLES_120.jpg" alt="A group of People" />
                        </div>
                    </div>

                    <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                        <div class="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">
                                In other words, the new version of Food.com combines all of the things you loved most about the site with some helpful new features, including:<br/><br/>
                                <p>
                                -Over 500,000 dishes created by users like you, with fresh recipes added every day<br/>
                                -Easy access to your favorite saved recipes and the option to organize them into boards<br/>
                                -A new activity feed where you can add your reviews, tweaks, questions and photos<br/>
                                </p>
                                <br/>
                                So if you’re hungry for good food and great conversation with fellow cooks, we’re so happy you’re here! And there’s no better place to start than our community’s 75 Top-Rated Recipes of All Time, from five-star banana bread to our most-popular mac and cheese.

                            </p>
                        </div>
                        <div class="w-full lg:w-8/12 lg:pt-8">
                            <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                                <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                    <img class="md:block hidden h-[5rem]" src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/41/13/64/TCZePt7zRAeAFd6qsSPa_0S9A9415.jpg" alt="Alexa featured Image" />
                                    <img class="md:hidden block" src="https://static.abplive.com/wp-content/uploads/2018/09/30173814/Narendra-Modi.jpg" alt="Alexa featured Image" />
                                    {/* <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">PM Modi </p> */}
                                </div>
                                <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                    <img class="md:block hidden h-[5rem]" src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/47/69/07/88n1rcSQ6KTuv6t7uXSg_0S9A9190.jpg" alt="Olivia featured Image" />
                                    <img class="md:hidden block " src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/Yogi_file__1__1200x768.jpeg?size=690:388" alt="Olivia featured Image" />
                                    {/* <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">CM Yogi</p> */}
                                </div>
                                <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                    <img class="md:block hidden h-[5rem]" src="https://img.sndimg.com/food/image/upload/w_621,h_349,c_fill,fl_progressive,q_80/v1/img/recipes/53/65/04/qJiOXVBtRgi3HEXjMrJS_0S9A9244.jpg" alt="Liam featued Image" />
                                    <img class="md:hidden block" src="https://voiceofodisha.com/eng/news_gallery/586_1632750660.jpg" alt="Liam featued Image" />
                                    {/* <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">HM Shah</p> */}
                                </div>
                                <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                    <img class="md:block hidden h-[5rem]" src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/31/77/96/TglSxGckTNOLfEgMtYlJ_Kittencals%20mini%20meatball%20minestrone%20soup%20317796-5.jpg" alt="Elijah featured image" />
                                    <img class="md:hidden block" src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2020/08/S-Jaishankar.jpg" alt="Elijah featured image" />
                                    {/* <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">FM Jaishankar</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </h2>


        </div>
    )
}
