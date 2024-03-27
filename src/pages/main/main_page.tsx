import '../../index.css'
import style from './main_page.module.css'
import { CustomBorder1 , CustomBorder1_RT, CustomBorder2 } from '../../custom_borders'
import { Team } from './team_tabs'
import { Content1 } from './content1'
import { Content2 } from './content2'
import { Link } from "react-router-dom"
import { Map } from './map'

import logo_img from "../../assets/logo.png"
import arrow_down_img from "../../assets/arrow_down.png"
import content_icon1_img from "../../assets/content_icon1.png"
import content_icon2_img from "../../assets/content_icon2.png"
import content_icon3_img from "../../assets/content_icon3.png"
import contact_icon_img from "../../assets/contact_icon.png"
import location_icon_img from "../../assets/location_icon.png"

export default function MainPage() {
  let title= document.getElementById('head_title')!
  title.textContent='"Новое мышление" - Школа общественных наук'
  
  return (
    <>
      {/* <div className='head'> */}
      <header className={style.mainpage_header}>
  
        <div className={style.mainpage_head_div}>

          <div className={style.mainpage_logo_div}>
            <img src={logo_img} className={style.mainpage_logo}/>
            <p> 
              <span className={style.mainpage_main_title}> НОВОЕ МЫШЛЕНИЕ </span> <br/>
              Школа общественных наук
            </p>
          </div>

          <div className={style.mainpage_menu_tab} id={style.menu_tab}>
            <Link to={'/news'}><button className={style.mainpage_menu}> <span>Новости</span> </button></Link>
            <hr/>
            <a href='#body_div'><button className={style.mainpage_menu}> <span>Предметы</span> </button></a>
            <hr/>
            <Link to={'/services'}><button className={style.mainpage_menu}> <span>Услуги</span> </button></Link>
          </div>

          <div className={style.mainpage_menu_tab} id={style.sign}>
            <Link to={'/login'}><button className={style.mainpage_menu}> <span>Log In</span> </button></Link>
          </div>

        </div>

        <p className={style.mainpage_title_tagline}> 
          «Non scholae sed vitae discimus»<br/>
          <span>"Мы учимся не в школе, а в жизни(лат.)"</span>
        </p>

        <button className={style.mainpage_buy_button}>Начать обучение ᐳᐳ</button>


        <a href='#body_div'>
          <img src={arrow_down_img} className={style.mainpage_arrow}/>
        </a>
        
      </header>
      {/* </div> */}

      <main className={style.mainpage_body} id='body_div'>

        <Content1/>

        <CustomBorder1/>
        <div className={style.mainpage_content2}>
          <h2> 
            Предметы
          </h2>
          <div className={style.mainpage_principle}>

            <div>
              <img src={content_icon1_img}/>
              <p> 
                История
              </p>
            </div>
            <hr/>
            <div>
              <img src={content_icon2_img}/>
              <p> 
                Общество
              </p>
            </div>
            <hr/>
            <div>
              <img src={content_icon3_img}/>
              <p> 
                Право
              </p>
            </div>

          </div>
        </div>
        <CustomBorder1_RT/>

        <Team/>

        <CustomBorder2/>
        <div className={style.mainpage_content3}>
          <h2>Наше местоположение</h2> 
          <div className={style.mainpage_content3_content}>
            <section>
              <h3><img src={location_icon_img}/>Адрес:</h3>
              <p>г.Омск ул.Красный путь д.101 к.2</p>
              <h3><img src={contact_icon_img}/>Контакты:</h3>
              <p className={style.mainpage_contacts}>
                <span>+7(000)-000-00-00</span> 
                <span>+7(000)-000-00-00</span> 
                <p></p>
                <span>random.86@gmail.com</span>  
              </p>
            </section>
            <section>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A784700f40e750931aa89ab79437b51bc5e4ddcbaa706c44c61273c5f226b663a&amp;source=constructor" width="650" height="396"></iframe>
            </section>
          </div>
        </div>

      </main>

      <footer>КОНТАТКТНАЯ И ЮР. ИНФРОМАЦИЯ</footer>
    </>
  )
}