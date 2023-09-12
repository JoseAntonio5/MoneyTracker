import Link from "next/link";
import Card from "../components/Card";
import { FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <div className='Home'>
      {/* HERO SECTION */}
      <div className="Home-content w-full">
        <div className="hero-left flex flex-col items-start justify-center">
          <h1 className="hero-main-text text-7xl font-montserrat font-bold pb-2">Welcome to <span className="font-extrabold">MoneyTracker</span></h1>
          <h3 className="hero-subtext text-slate-500 text-2xl my-4 pb-5">Track. Manage. Prosper. MoneyTracker simplifies your financial journey, giving you the power to monitor every financial move you make.</h3>
          <form className="w-full flex">
            <input 
              className="border border-black pl-2 h-10 w-1/2" 
              type="text" 
              name="email" 
              id="email" 
              placeholder="email"
            />
            <button className="flex items-center px-2 border border-black hover:bg-slate-200">Submit <FaArrowRight className="ml-2" /></button>
          </form>
          <p className="text-xs text-slate-500 pt-2">Enter your email above and join our newsletter now!</p>
        </div>
        <div className="hero-right flex flex-col items-center justify-center">
          <div className="hero-right-card bg-white w-1/2 h-auto rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-center pt-5">Sign Up Now!</h1>
            <form className="flex flex-col p-16">
              <label htmlFor="name" className="text-lg">Your Name:</label>
              <input 
                className="border border-gray-500 outline-none rounded pl-2 py-2 text-xl" 
                type="text" 
                name="name" 
                id="name"
                placeholder="Name"
              />
              <Link href='/dashboard'>
                <button className="w-full mt-8 p-3 bg-cyan-500 text-white rounded text-xl hover:bg-cyan-600 duration-300">Join Now!</button>
              </Link>
            </form>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="Info-section flex">
        <div className="info-left"></div>
        <div className="info-right p-8">
          <h1 className="text-7xl font-extrabold">The best way to keep track of your finances!</h1>
          <h3 className="text-gray-400 text-2xl pt-4"><span className="font-bold">MoneyTracker</span> makes it easy to keep control of your money.</h3>
          <p className="text-justify mt-5 text-xl">MoneyTracker is your ultimate financial companion for <span className="font-bold">smart</span> money management. Whether you&apos;re striving to achieve your financial goals, save more, or gain a clearer understanding of your financial picture, MoneyTracker is here to <span className="font-bold">empower</span> you every step of the way.</p>
          <p className="text-justify mt-5 text-xl">At MoneyTracker, we believe that <span className="font-bold">effective money management</span> is key to a secure and prosperous future. Our user-friendly platform allows you to effortlessly record both your expenses and incomes, giving you a comprehensive view of your financial transactions. With insightful graphs and reports, you can analyze your spending patterns, identify areas for improvement, and make informed decisions about your money.</p>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="features-section text-center">
        <h1 className="features-text-title text-5xl font-bold pt-10 pb-20">Advantages of using MoneyTracker</h1>
        <div className="features-cards flex items-center justify-evenly">
          <Card 
            title="Enhanced Awareness"
            imgSrc="/assets/card-img1.jpg"
            text="Track expenses and incomes to understand your financial habits, helping you make better budgeting choices."
          />
          <Card
            title="Effortless Budgeting"
            imgSrc="/assets/card-img2.jpg"
            text="Set spending limits, track goals, and receive alerts for a disciplined approach to managing your money."
          />
          <Card 
            title="Smart Decision-Making"
            imgSrc="/assets/card-img3.jpg"
            text="Analyze data-driven insights to adjust your financial strategy and prioritize goals effectively."
          />
        </div>
        <h3 className="features-text-bottom text-2xl py-16 font-bold">Start tracking. Start achieving. Start thriving with MoneyTracker.</h3>
      </div>

    </div>
  )
}

export default Home;