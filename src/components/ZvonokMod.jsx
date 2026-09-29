const ZvonokMod = () => {
  return (
    <div className="fixed z-101 bg-black/60 w-full h-screen flex items-center justify-center">
      <div className="bg-white">
        <div>
          <h1>Заказать звонок</h1>
          <p>Наш менеджер свяжется с Вами в ближайшее время</p>
        </div>

        <form action="#">
          <div className="flex flex-col">
            <label className="flex flex-col" htmlFor="name">
              Ваше имя *
              <input type="text" />
            </label>

            <label className="flex flex-col" htmlFor="name">
              Телефон *
              <input type="tel" />
            </label>
          </div>
          <div>
            <input
              className="accent-black"
              type="checkbox"
              name="personal data analysis checkbox"
              id="personal_data_analysis"
            />
            <label htmlFor="personal_data_analysis">
              Я согласен{" "}
              <a
                href="https://rtrf.ru/upload/privacy_policy.pdf"
                className="text-blue-700"
              >
                на обработку персональных данных
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ZvonokMod;
