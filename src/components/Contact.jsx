import { useState } from "react"

const ContactSec = () => {
    const [isHovered, setIsHovered] = useState(false);
    


  return (
    <div className="pt-10">
        <div className="mb-9.5">
            <h2 className="text-[42px] font-semibold">ОСТАЛИСЬ ВОПРОСЫ?</h2>
            <p className="text-lg">Оставьте свои контактные данные, и мы перезвоним Вам в ближайшее время</p>
        </div>
        <form>
            <div className="flex items-end gap-5 w-188 mb-4">
                <div className="flex flex-col w-full">
                    <label htmlFor="abc" className="text-sm">Ваше имя *</label>
                    <input className="py-2.75 px-3 rounded-sm border outline-0" type="text" placeholder="Ivan"/>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="abc" className="text-sm">Телефон *</label>
                    <input className="py-2.75 px-3 rounded-sm border outline-0" type="tel" onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)} placeholder={ isHovered ? "+7 (___) ___-__-__" : "+7"}/>
                </div>

                <button className="py-3.25 px-7.5 bg-yellow rounded-sm" type="submit">Отправить</button>
            </div>

            <div className="flex gap-1 text-light-gray text-sm">
                <p>Нажимая на кнопку отправить</p>
                <a href="#" className="text-indigo-700 underline opacity-50 hover:no-underline">Вы соглашаетесь на обработку персональных данных</a>
            </div>
        </form>
    </div>
  )
}

export default ContactSec