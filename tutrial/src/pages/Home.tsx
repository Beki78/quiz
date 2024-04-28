import { Link } from "react-router-dom";

const Home = () => {

  const startTrivia = async () =>{

  }
  
  return (
    <div>
      <h1>Quiz</h1>
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base text-center font-semibold text-gray-900 md:text-xl dark:text-white">
          Question 1
        </h5>
        <p className="text-sm font-normal text-center text-gray-500 dark:text-gray-400">
          Connect with one of our available wallet providers or create a new
          one.
        </p>
        <ul className="my-4 space-y-3">
          <li>
            <Link onClick={startTrivia}
              to=""
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                Coinbase Wallet
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                Opera Wallet
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                WalletConnect
              </span>
            </a>
          </li>
        </ul>
        <div></div>
      </div>
      
    </div>
  );
}

export default Home
