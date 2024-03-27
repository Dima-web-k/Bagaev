import style from './main_page.module.css'

import content1_icon1_img from "../../assets/content1_icon1.png"
import content1_icon2_img from "../../assets/content1_icon2.png"
import content1_icon3_img from "../../assets/content1_icon3.png"
import content1_icon4_img from "../../assets/content1_icon4.png"

export const Content1 = () => {

    const principles = [
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
        <div className={style.mainpage_content1}>
            <h2>Наши принципы</h2> 
            <section>
                {principles.map((el) => 
                        <div className={style.mainpage_subject}>
                            <img src={el.img}/>
                            <p>
                                {/* <span>{el.title}</span> <br/> */}
                                {el.content}
                            </p>
                        </div>
                )}
            </section>
        </div>


    );
};