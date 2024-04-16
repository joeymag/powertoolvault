import { data } from 'autoprefixer'
import React from 'react'


const tools = [
    {
        id: 1,
        names: 'Stolen Tools',
        price: '£1000',
        location: 'London',
        date: '12/4/2024',
        image: 'https://i2-prod.gloucestershirelive.co.uk/incoming/article1808731.ece/ALTERNATES/s615b/0_ESR_GLO_200718stolenpowertools_03.jpg'
    },
    {
        id: 2,
        names: 'Stolen Tools',
        price: '£1000',
        location: 'London',
        date: '12/4/2024',
        image: 'https://i2-prod.gloucestershirelive.co.uk/incoming/article1808731.ece/ALTERNATES/s615b/0_ESR_GLO_200718stolenpowertools_03.jpg'
    },
    {
        id: 3,
        names: 'Stolen Tools',
        price: '£1000',
        location: 'London',
        date: '12/4/2024',
        image: 'https://i2-prod.gloucestershirelive.co.uk/incoming/article1808731.ece/ALTERNATES/s615b/0_ESR_GLO_200718stolenpowertools_03.jpg'
    },
    {
        id: 4,
        names: 'Stolen Tools',
        price: '£1000',
        location: 'London',
        date: '12/4/2024',
        image: 'https://i2-prod.gloucestershirelive.co.uk/incoming/article1808731.ece/ALTERNATES/s615b/0_ESR_GLO_200718stolenpowertools_03.jpg'
    },
    {
        id: 5,
        names: 'Stolen Tools',
        price: '£1000',
        location: 'London',
        date: '12/4/2024',
        image: 'https://i2-prod.gloucestershirelive.co.uk/incoming/article1808731.ece/ALTERNATES/s615b/0_ESR_GLO_200718stolenpowertools_03.jpg'
    },
    {
        id: 6,
        names: 'Stolen Tools',
        price: '£1000',
        location: 'London',
        date: '12/4/2024',
        image: 'https://i2-prod.gloucestershirelive.co.uk/incoming/article1808731.ece/ALTERNATES/s615b/0_ESR_GLO_200718stolenpowertools_03.jpg'
    },
    {
        id: 7,
        names: 'Stolen Tools',
        price: '£1000',
        location: 'London',
        date: '12/4/2024',
        image: 'https://i2-prod.gloucestershirelive.co.uk/incoming/article1808731.ece/ALTERNATES/s615b/0_ESR_GLO_200718stolenpowertools_03.jpg'
    },


    
    
]

export default function Mapsilder() {
    return (
        <div className="flex flex-row flex-wrap gap-1 py-2">
            {tools.map((tool) => (
                <div key={tool.id} className="  p-1 flex flex-row bord-solid border-cyan-600 border-4 rounded-lg  ">
                    <div className="bg-white w-60 ">
                        <img className='w-80' src={tool.image} alt="marker" />
                        <p className='text-black'>{tool.names}</p>
                        <p className='text-black'>{tool.price}</p>
                        <p className='text-black'>{tool.location}</p>
                        <p className='text-black'>{tool.date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
