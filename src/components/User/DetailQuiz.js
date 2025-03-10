import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from '../../services/apiService';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;

    useEffect(()=>{
        fetchQuestions()
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log(res);
    };

    return (
        <div className="detail-quiz-container">
            <h1>Detail Quiz: {params.id}</h1>
        </div>
    );
};

export default DetailQuiz;