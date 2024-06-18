import Todo from "./Todo";

const Body = () => {
  const currentDate = new Date().toLocaleDateString("en-EN", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="body-container">
      <div className="body-text">
        Hello, <span className="karan">Karan Choudhary</span>
      </div>
      <div className="date">It's {currentDate}</div>
      <Todo email={""} />
    </div>
  );
};

export default Body;
