let counter = 1;

const ShowHistoryCalculation = ({ historyCalculation }) => {
  return historyCalculation.map((history) => {
    return (
      <li
        className="text-xl font-semibold list-none"
        key={counter++}
      >
        {history}
      </li>
    );
  });
};

export default ShowHistoryCalculation;
