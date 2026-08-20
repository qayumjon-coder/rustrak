import "../../index.css";
import SwiperBanner from "../../components/SwiperBanner";
import SwiperCards from "../../components/SwiperCards";

const Home = ({ t }) => {
  t;

  return (
    <>
      <section className="swiperSection pt-38">
        <div className="container">
          <div className="">
            {/* <div className="mb-8 rounded-2xl bg-linear-to-r from-yellow to-amber-300 p-8 shadow-lg">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-black/70">
                {t.language === "uz" ? "Rustrak" : "Rustrak"}
              </p>
              <h1 className="max-w-2xl text-4xl font-bold text-black md:text-5xl">
                {t.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-black/80">{t.heroText}</p>
              <div className="mt-6 flex gap-4">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                  {t.catalogBtn}
                </button>
                <button className="rounded-full border border-black/40 bg-white px-6 py-3 text-sm font-semibold text-black">
                  {t.contactBtn}
                </button>
              </div>
            </div> */}

            <SwiperBanner />

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <div>
              <h2>Категории</h2>

              <div>
                <button>
                  <span></span>
                </button>
                <button>
                  <span></span>
                </button>
              </div>
            </div>

            <SwiperCards/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
