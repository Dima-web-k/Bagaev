import '../../index.css'
import './news.css'
import { CustomBorderHead } from '../../custom_borders'

export default function News_Page() {
  let title= document.getElementById('head_title')
  title.textContent='Новости'
  
  return (
    <>
        <header className='header'>

            <div className='logo_div'>
                <img src="/src/assets/Logo.png" className='logo'/>
                <p> 
                    <span className='main_title'> НОВОЕ МЫШЛЕНИЕ </span> <br/>
                    Школа общественных наук
                </p>
            </div>

            <div className='sign'>
    
            </div>
        </header>
        <CustomBorderHead/>

        <div className='body' id='body_div'>
            
        </div>

        <footer>КОНТАТКТНАЯ И ЮР. ИНФРОМАЦИЯ</footer>
    </>
  )
}