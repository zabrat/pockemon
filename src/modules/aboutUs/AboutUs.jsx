import React from 'react';
import './aboutUsStyle.scss'

const AboutUs = () => {
    return(
            <div className='main-container__aboutUs-container'>
                <p 
                    children='My name is Zaur and my favorite pokemon is PSYDUCk. Who is your favorite pokemon?'
                    className='aboutUs-container_text'
                />
               <div className='aboutUs-container__pokemon-window'>
                    <img 
                         src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png'
                         alt='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png'
                    /> 
                    <div className='pokemon-window__pokemon-info'>
                         <p 
                              children='PSYDUCK'
                              className='pokemon-info__pokemon-name'
                         />
                         <ul className='pokemon-info__some-info'>
                              <li 
                                   children='Abilities: damp, cloud-nine, swift-swim'
                                   className='pokemon-info__info'
                              />
                              <li 
                                   children='Height: 8 decimetres'
                                   className='pokemon-info__info'
                              />
                              <li 
                                   children='Weight: 196 hectograms'
                                   className='pokemon-info__info'
                              />
                              <li 
                                   children='Description: Favorite human is Zaur'
                                   className='pokemon-info__info'
                              />
                              <li 
                                   children='Highest stat: Memory'
                                   className='pokemon-info__info'
                              />
                              <li 
                                   children='Type: water'
                                   className='pokemon-info__info'
                              />
                              <li 
                                   children='Base experience: 64'
                                   className='pokemon-info__info'
                              />
                         </ul>
                    </div>
                </div>   
            </div>   
    )
}

export default React.memo(AboutUs);