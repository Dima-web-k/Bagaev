// import '../../index.css'
import style from './login.module.css'

export default function LoginPage() {
    let title= document.getElementById('head_title')
    title.textContent='Login'
    return (
        <div className={style.wrapper}>
            <h1>Регистрация</h1>
            <form className={style.form} method="get" action="../result">
                <label>
                    <span>Логин:</span>
                    <input type="text" size={40} name="one-line"/>
                </label>

                <label>
                    <span>Пароль:</span>
                    <input type="password" size={40} name="one-line-password"/>
                </label>
                <input type="submit" value="Отправить"/>
            </form>
        </div>
    )
}