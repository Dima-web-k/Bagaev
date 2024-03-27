import './team_tabs.css'
import style from './main_page.module.css'

import photo1 from '../../assets/team_image1.png'
import photo2 from '../../assets/team_image2.png'
import avatar_default_img from "../../assets/avatar_default.png"

export const Team = () => {

    const team = [
        {
            img: photo1,
            title: 'Артемий Гузий',
            content: 'Гузий Артемий Евгеньевич, 33 года, Омск Образование: юридическое Омский юридический институт (2012) Ныне обучаюсь в магистратуре Высшей школы экономики, направление «Современные социальные науки в преподавании обществознания в школе» (2025)',
        },
        {
            img: photo2,
            title: 'Егор Зазворка',
            content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        },
    ]
    return (
        <div className={style.mainpage_content1}>
            <h2>Наша команда</h2> 
            <div className='tabs'>
                {team.map((el, i) => 
                    <div className='tab' id='i'>
                        <input type="radio" id={"tab"+String(i)}  name="tab-group"/>
                        <label htmlFor={"tab"+String(i)}  className="tab-title"><img src={el.img}/></label> 
                        <div className="tab-content">
                            <span>{el.title}</span><br/>{el.content}
                        </div> 
                    </div>
                )}
            </div>
            <h2>Отзывы выпускников</h2> 
            <div className={style.mainpage_content1_content}>
                <div className={style.mainpage_reviews}>

                    <div className={style.mainpage_review}>
                        <section>
                            <img src={avatar_default_img}/>
                            <p className={style.mainpage_name}>
                            <span>Иванов Иван</span> <br/>
                            призер ВСОШ по праву
                            </p>
                        </section>
                        <p className={style.mainpage_review_text}>
                            “Пришёл в школу для того чтобы поднять знание обществознания, а потом искра, буря, безумие”
                        </p>
                    </div>

                    <div className={style.mainpage_review}>
                        <section>
                        <img src={avatar_default_img}/>
                        <p className={style.mainpage_name}>
                            <span>Иванов Иван</span> <br/>
                            призер ВСОШ по праву
                        </p>
                        </section>
                        <p className={style.mainpage_review_text}>
                            “Пришёл в школу для того чтобы поднять знание обществознания, а потом искра, буря, безумие”
                        </p>
                    </div>

                    <div className={style.mainpage_review}>
                        <section>
                        <img src={avatar_default_img}/>
                        <p className={style.mainpage_name}>
                            <span>Иванов Иван</span> <br/>
                            призер ВСОШ по праву
                        </p>
                        </section>
                        <p className={style.mainpage_review_text}>
                            “Пришёл в школу для того чтобы поднять знание обществознания, а потом искра, буря, безумие”
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};