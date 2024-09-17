import React, {useState} from 'react'
import ServiceImage from '../image/services-1.jpg.webp'
import '../Styles/Services.css'
import { NavLink } from 'react-router-dom'


function Ourservices() {

    const data = [
        {
            id: 1,
            image: ServiceImage,
            title: 'Relation Problem',
            Description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: 2,
            image: ServiceImage,
            title: 'Couples Problem',
            Description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: 3,
            image: ServiceImage,
            title: 'Depression Problem',
            Description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: 4,
            image: ServiceImage,
            title: 'Family Problem',
            Description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: 5,
            image: ServiceImage,
            title: 'Personal Problem',
            Description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: 6,
            image: ServiceImage,
            title: 'Business Problem',
            Description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        }
    ]

    const [panel, showPanel] = useState();


  return (
    <div className='py-20 flex flex-col gap-20'>
        <div className='text-center flex flex-col gap-4'>
            <p className=' uppercase font-bold text-[#589167]'>Our Services</p>
            <h1 className='text-[30px] text-gray-800 font-bold'>We Can Help You With This Situation</h1>
        </div>

        <div className='flex flex-row gap-10 px-[100px]'>
          <div className=''>
                {data.map(({title, id}) => {
                    return (
                        <div>
                        <NavLink onClick={() => showPanel(id)} className={`panel ${({isActive}) => isActive ? 'normal active-pad' : 'normal'}`}>{title}</NavLink>
                        </div>
                    )
                })}
            </div>

            <div className='w-[60%]'>
               {data.map(({title,image,Description,id}) => {
                return(
                    <>
                    {panel === id ? (
                      <div className='flex flex-col gap-5'>
                        <div style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '730px',
                            height: '380px',
                        }} />
                        <h1 className='text-[25px] font-bold'>{title}</h1>
                        <p>{Description}</p>
                    </div>  
                    ) : null}
                    </>
                    
                )
               })}
            </div>  
        </div>
        
      
    </div>
  )
}

export default Ourservices
