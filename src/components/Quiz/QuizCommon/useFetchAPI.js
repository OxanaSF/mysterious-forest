import { useState, useEffect } from "react";
import he from "he";

const useFetchAPI = (url) => {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    const getQuiz = async () => {
      try {
        console.log("Fetching!!!");
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Something went wrong, server responded with ${response.status}.`
          );
        }

        const jsonData = await response.json();
        const { response_code, results } = jsonData;

        if (response_code === 1) {
          throw new Error("Bad API request - no results!");
        } else if (response_code === 2) {
          throw new Error("Bad API request - invalid parameter!");
        }

        const decodedData = results.map((item) => {
          return {
            ...item,
            question: he.decode(item.question),
            correct_answer: he.decode(item.correct_answer),
            incorrect_answer: item.incorrect_answers.map((incorrect) =>
              he.decode(incorrect)
            ),
          };
        });

        setQuizFetch({
          isLoading: false,
          errorMessage: "",
          data: decodedData,
        });
      } catch (err) {
        setQuizFetch({
          isLoading: false,
          errorMessage:
            "Something went wrong loading the quiz. Please try again later.",
          data: null,
        });
        console.error(err);
      }
    };

    getQuiz();
  }, [url]);

  const { isLoading, errorMessage, data } = quizFetch;
  return [isLoading, errorMessage, data];
};

export default useFetchAPI;
