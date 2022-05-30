
import Image from 'next/image'
import chinesezodiac from '../public/Chinese-Zodiac-Calendar.png'
import solarterm from '../public/24solarterm2.png'
import clock from '../public/clock.png'
import Link from 'next/link'


const BlogDescription = () => {

  return (
    <div className="bg-bamboo w-screen bg-cover bg-fixed mx-auto p-4 md:px-10 md:py-8">
        <div className="bg-white bg-opacity-80 shadow-lg w-full content-center inline-block border-green-700 p-8">
            <div className="text-center max-w-6xl mx-auto mb-8">
            
            <p class="text-center text-md md:px-16">
                Combining the wisdom of ancient Traditional Chinese Medicine with Modern Day Weather to
                give us daily health advice for optimum vitality and longevity. 

                TCM wisdom advises us to follow the natural cycles of the seasons and weather.
                Just as farmers would use the time of the year to know when to plant, harvest, and
                store crops, we can observe the time of year and the current weather to incorporate
                TCM wisdom for protecting and nourishing our Qi.
                <p class="text-center text-md md:px-16 md:py-4">

                In Chinese Astrology, there is an important kind of calendar known as the the “24 Solar Terms”,
                which represents approximately 24 (solar terms), 2-week segments (fortnight) of the year. Chinese Medicine
                follows this lunar calendar for yearly, monthly, and even daily observations in our 
                body's yin and yang Qi balance. 
                </p>
            </p>
            </div>  
                <div class="flex relative flex-col md:flex-row items-center -mx-2 justify-content-center">
                    <div class="md:w-1/3 px-2">
                    <a href="/post/what-are-the-12-animal-zodiacs"><p className="text-center text-lg text-bold text-blue-700 hover:underline"> What are 12 Animal Zodiacs</p> </a>
                    <Image alt="chinesezodiac" class="max-w-full rounded-lg shadow-lg" src={chinesezodiac}/>
                    </div>
                    <div class="md:w-1/3 px-2">
                    <a href="/post/what-are-the-24-solar-terms">
                    <p className="text-center text-lg text-bold text-blue-700 hover:underline"> What are the 24 Solar Terms - Jing’Zhe(惊蛰)? </p>
                    </a>
                    <Image alt="solarterm" class="max-w-full rounded-lg shadow-lg" src={solarterm}/>
                    </div>
                    <div class="md:w-1/3 px-2">
                    <a href="/post/what-is-24-hour-body-clock">
                    <p className="text-center text-lg text-bold text-blue-700 hover:underline"> What is the 24 Hour Circardian Body Clock </p>
                    <Image alt="clock" class="max-w-full rounded-lg shadow-lg" src={clock}/>
                    </a>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default BlogDescription