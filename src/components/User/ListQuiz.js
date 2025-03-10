import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import "./ListQuiz.scss";

const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState([]);

    useEffect(() => {
        getQuizData();
    }, []);

    const getQuizData = async () => {
        let res = await getQuizByUser();
        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    };
    return (
        <div className="list-quiz-container container">
            {arrQuiz && !arrQuiz.length > 0 ? (
                <div>You don't have any quiz now</div>
            ) : (
                arrQuiz.map((quiz, index) => (
                    <div
                        className="card"
                        style={{ width: "18rem" }}
                        key={`${index}-quiz`}
                    >
                        <img
                            src={`data:image/jpeg;base64, ${quiz.image}`}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Quiz {index + 1}</h5>
                            <p className="card-text">{quiz.description}</p>
                            <button className="btn btn-primary">
                                Start Now
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ListQuiz;
