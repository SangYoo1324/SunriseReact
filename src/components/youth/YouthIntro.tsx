import React from 'react';
import Image_1 from '../../assets/youth/praying_child.jpg';
import Image_2 from '../../assets/youth//cy_4.jpg';
import Image_3 from '../../assets/youth/cy_6.jpg';
function YouthIntro(props) {
    return (
        <section className='mb-0 pb-0'>
            <div className='boot-container'>
    
            <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[15%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>

            <div className='lg:top-15 relative lg:col-span-1 col-span-2'>
                <h3 className='text-2xl font-bold text-indigo-900'>God's Special Ones</h3>
                <p className='pt-4 flex flex-col gap-2'>
                <span className="text-lg font-semibold italic text-gray-800">
                <span className="text-indigo-700">“Jesus said</span>
                <span className="text-purple-500"> to the children to come”</span>
                </span>
                <span>
                To enter into the Kingdom of God, Jesus said we must become like children-pure, full of wonder, trusting and teachable. 
                They have much to teach us adults about how our hearts need to be tender towards God. At Sunrise raising up children 
                to love Jesus and follow him is vital. We provide Sunday School, Vacation Bible School and youth events and outings. 
                Come grow with us in our vision to see families coming to Jesus with our young people leading the way into the next generation 
                for God's glory and Kingdom Come.
                </span>
            </p>
            </div>

            {/* imges  */}
            <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src={Image_1} alt="" />
            <img className='object-cover w-full h-full row-span-2' src={Image_2} alt="" />
            <img className='object-cover w-full h-full' src={Image_3} alt="" />
            </div>
            {/* imges  / */} 

            </div>
            
            </div>
        </section>
    );
}

export default YouthIntro;