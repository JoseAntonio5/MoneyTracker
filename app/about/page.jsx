import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div>
      <h1 className="text-5xl font-bold pt-10 text-center bg-emerald-100">About MoneyTracker</h1>
      <div className='w-full h-80 bg-emerald-100'></div>
      <Image 
        src='/assets/card-img1.jpg'
        width={736}
        height={736}
        alt='about page img'
        className="about-page-img -translate-y-2/4 max-w-screen-lg mx-auto"
      />
      <div className="about-main-text -translate-y-56 mx-auto w-[736px] h-screen text-justify">
        <h2 className="text-center text-2xl pb-8">Welcome to MoneyTracker, your personal financial companion!</h2>

        <h3 className="text-xl font-bold py-4">Why MoneyTracker?</h3>
        <p className="text-slate-600">Are you looking to take control of your finances? MoneyTracker is here to help. Whether you&apos;re saving for a dream vacation, managing monthly bills, or simply curious about where your money goes, <b>MoneyTracker is your ideal tool.</b></p>

        <h3 className="text-xl font-bold py-4">Our Mission</h3>
        <p className="text-slate-600">Our mission is to <b>empower you</b> to make informed financial decisions and reach your financial goals. MoneyTracker is designed to be your <b>trusted financial companion</b>, providing insights into your spending and income patterns.</p>
        
        <h3 className="text-xl font-bold py-4">How We Work</h3>
        <p className="text-slate-600">At MoneyTracker, we&apos;re committed to transparency. It&apos;s important to understand that our application employs a simplified data storage system. We use an array to temporarily store your financial transactions, which means your data is not permanently saved in a database and won&apos;t persist between sessions. We take your privacy seriously, and no personal or financial information is ever collected or stored.</p>
        
        
        <h3 className="text-xl font-bold py-4">Our Features</h3>
        <ul className="text-slate-600 list-disc">
          <li className="ml-5"><b>Expense Tracking:</b> Easily record your daily expenses, categorize them, and gain insights into where your money is going.</li>
          <li className="ml-5"><b>Income Management:</b> Keep track of your income sources and watch your financial health improve.</li>
          <li className="ml-5"><b>Budgeting:</b> Set monthly budgets and receive alerts when you&apos;re approaching your limits.</li>
          <li className="ml-5"><b>User-Friendly:</b> MoneyTracker is designed to be intuitive and accessible to users of all levels of financial expertise.</li>
        </ul>

        <h4 className="pt-4 font-bold text-slate-500">Disclaimer:</h4>
        <p className="text-sm text-slate-400">Please note that MoneyTracker uses a simplified data storage system, utilizing an array to temporarily store your financial transactions. This means that the data you enter <b>is not permanently saved in a database</b> and will <b>not persist across sessions.</b> We value your privacy and do not collect or store any personal or financial information.</p>
      </div>
      <div className="about-bottom-text">
        <h1 className="text-xl -translate-y-52 mx-auto w-[736px] text-center font-bold">Get Started Today!</h1>
        <h1 className="text-xl -translate-y-52 mx-auto w-[736px] mt-10 text-justify">Thank you for choosing MoneyTracker. Start tracking your money today, and embark on a journey towards financial empowerment. We&apos;re here to help you make informed financial decisions, no matter where you are on your financial journey.</h1>
        <div className="flex justify-center">
          <Link href='/dashboard'>
            <button className="-translate-y-36 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 scale-150" type="button">Start Now!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About;