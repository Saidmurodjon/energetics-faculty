import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { HashLink } from "react-router-hash-link";
const Abaut = () => {
  const id = [
    { id: 1, to: "#whatIsReact", text: "React nima ?" },
    { id: 2, to: "#HistoryOfReact", text: "ReactJS tarixi" },
    { id: 3, to: "#PriorityOfReact", text: "ReactJS afzalliklari" },
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto p-2">
        <div className="">
          <h1 className="md:text-4xl text-3xl font-semibold text-center md:text-start">
            Dastur haqida (ReactJS)
          </h1>
        </div>
        <div className="md:grid-cols-2 flex justify-between my-2 md:my-4">
          <div className="">
            <h2 className="text-3xl">Mundarija</h2>
            {id.map((e) => (
              <>
                <HashLink
                  key={e.id}
                  className="text-2xl text-green-600"
                  smooth
                  to={e.to}
                >
                  {e.text}
                </HashLink>
                <br />
              </>
            ))}
          </div>
          <div className="w-5/6">
            <img
              className="mx-auto w-5/6 md:w-1/3 "
              src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
              alt="react"
              srcset=""
            />
          </div>
        </div>
        <div className="text-xl md:text-3xl" id="">
          <div className="mt-2 md:mt-4">
            <h1 id="whatIsReact" className="font-semibold my-2">
              React nima ?
            </h1>

            <h2 className="">
              React JavaScript- ga asoslangan UI ishlab chiqish kutubxonasidir.
              Facebook va ochiq manbali dasturchilar hamjamiyati uni boshqaradi.
              Garchi React til emas, kutubxona bo'lsa-da, u veb-ishlab chiqishda
              keng qo'llaniladi. Kutubxona birinchi marta 2013 yil may oyida
              paydo bo'lgan va hozirda veb-ishlab chiqish uchun eng ko'p
              ishlatiladigan frontend kutubxonalaridan biri hisoblanadi. React,
              Flux va React Native kabi barcha ilovalarni me'moriy
              qo'llab-quvvatlash uchun oddiy UIdan tashqari turli xil
              kengaytmalarni taklif qiladi.
            </h2>
          </div>
          <div className="mt-2 md:mt-4">
            <h1 id="HistoryOfReact" className="font-semibold my-2">
              ReactJS tarixi
            </h1>
            <h2 className="">
              Bozordagi boshqa texnologiyalar bilan solishtirganda, React yangi
              texnologiya hisoblanadi. Facebook’da dasturiy ta’minot bo‘yicha
              muhandis Jordan Uolke 2011-yilda kutubxonaga asos solgan va unga
              hayot bag‘ishlagan. PHP uchun to'g'ridan-to'g'ri HTML komponentlar
              ramkasi bo'lgan XHP kabilar Reactga ta'sir qiladi. React
              yangiliklar lentasi 2011-yilda uning debyut ilovasi bo‘lgan.
              Keyinchalik Instagram uni olib, o‘z platformasiga kiritadi.
            </h2>
          </div>
          <div className="mt-2 md:mt-4">
            <h1 id="PriorityOfReact" className="font-semibold my-2">
              ReactJS afzalliklari
            </h1>
            <h2 className="">
              React.js moslashtirilgan virtual DOM quradi. JavaScript virtual
              DOM an'anaviy DOMga qaraganda tezroq bo'lgani uchun bu
              ilovalarning ishlashini oshiradi. ReactJS ajoyib foydalanuvchi
              interfeysini yaratishga imkon beradi. Qidiruv uchun mos ReactJS.
              Modullar va haqiqiy ma'lumotlar o'qish qobiliyatini oshirish
              orqali kattaroq ilovalarni boshqarishni osonlashtiradi. React
              turli arxitekturalarni birlashtiradi. React butun skript muhiti
              jarayonini soddalashtiradi. Bu ilg'or parvarishlashni
              osonlashtiradi va ishlab chiqarishni oshiradi. Tezroq ko'rsatishni
              kafolatlaydi Mobil ilovalarni ishlab chiqish uchun skript
              mavjudligi Reactning eng yaxshi xususiyati hisoblanadi. ReactJS
              katta hamjamiyat tomonidan qo'llab-quvvatlanadi.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abaut;
