import style from './main_page.module.css'
import { CustomBorder1 , CustomBorder1_RT} from '../../custom_borders'

import content1_icon1_img from "../../assets/content1_icon1.png"
import content1_icon2_img from "../../assets/content1_icon2.png"
import content1_icon3_img from "../../assets/content1_icon3.png"
import content1_icon4_img from "../../assets/content1_icon4.png"

export const Content2 = () => {

    const subjects = [
        {
            img: content1_icon1_img,
            title: 'История',
            content: 'Практичность',
        },
        {
            img: content1_icon2_img,
            title: 'Обществознание',
            content: 'Идейная толерантность',
        },
        {
            img: content1_icon3_img,
            title: 'Право',
            content: 'Метапредметность методологии',
        },
        {
            img: content1_icon4_img,
            title: 'Право',
            content: 'Доверие и исполнительность',
        },
    ]
    return (
        <section>
            <CustomBorder1/>
            <div className={style.mainpage_content2}>
                <h2> 
                    Наши принципы
                </h2>
                <div className={style.mainpage_principle}>

                    <div>
                        <img src={content1_icon1_img}/>
                        <p> 
                            Интересно
                        </p>
                    </div>
                    <hr/>
                    <div>
                    <img src={content1_icon2_img}/>
                    <p> 
                        Понятно
                    </p>
                    </div>
                    <hr/>
                    <div>
                    <img src={content1_icon3_img}/>
                    <p> 
                        С душой
                    </p>
                    </div>

                </div>
            </div>
            <CustomBorder1_RT/>
        </section>
    );
};