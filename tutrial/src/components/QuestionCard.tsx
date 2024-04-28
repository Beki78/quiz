import React from "react";

type questionProps = {
  question: string;
  answer: string[];
  callbaack: any;
  usersAnswer: any;
  questionNumber: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<questionProps> = ({
  question,
  answer,
  callbaack,
  usersAnswer,
  questionNumber,
  totalQuestion,
}) => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base text-center font-semibold text-gray-900 md:text-xl dark:text-white">
          Question: {questionNumber} / {totalQuestion}
        </h5>
        <p
          dangerouslySetInnerHTML={{ __html: question }}
          className="text-sm font-normal text-center text-gray-500 dark:text-gray-400"
        ></p>
        <div>
          {answer.map((answers) => (
            <button disabled={usersAnswer} onClick={callbaack} className="my-4 space-y-3">
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
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default QuestionCard;
