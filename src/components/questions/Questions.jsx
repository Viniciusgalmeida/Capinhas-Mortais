import "./Questions.css";

const questions = [
  {
    question: "Quais materiais são utilizados?",
    answer:
      "Usamos materiais premium e duráveis para nossas capas de telefone para garantir longevidade e proteção.",
  },
  {
    question: "O frete está incluso?",
    answer:
      "Sim, o envio está incluído em todos os nossos planos de assinatura.",
  },
  {
    question: "E se eu quiser cancelar?",
    answer:
      "Você pode cancelar a qualquer momento - basta entrar em contato com nosso suporte ao cliente!",
  },
];

function Questions() {
  return (
    <div className="questions-container">
      <div className="questions-box">
        <h3 className="questions-title">Mistérios Revelados!</h3>
        <ul className="questions-cards">
          {questions.map((element, index) => (
            <li className="questions-list" key={index}>
              <p className="questions-list-question">{element.question}</p>
              <p className="questions-list-answer">{element.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Questions;
