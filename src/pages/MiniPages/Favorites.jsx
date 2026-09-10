import Breadcrumb from "../../components/Breadcrumb"

const Favorites = () => {
  return (
    <section className="pt-30 bg-gray-low">
          <div className="container">
            <div className="pt-6 pb-16">
              <div>
                <Breadcrumb />
              </div>
    
              <div>
                <div>
                  <h2 className="text-[32px] mb-8 font-medium">Корзина</h2>
    
                  <p className="text-[24px]">
                    Ваша корзина пуста. <br /> Воспользуйтесь каталогом или поиском,
                    чтобы найти подходящий товар.
                  </p>
                </div>
    
                <div className="flex gap-5 mt-14">
                  <a href="/" className="px-15 py-2.5 border-2 border-yellow rounded-sm hover:bg-yellow transition ease duration-300">На главную</a>
                  <a href="/" className="px-10 py-2.5 flex items-center justify-center rounded-sm bg-yellow hover:bg-yellow-hov transition ease duration-300">Открыть каталог</a>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Favorites