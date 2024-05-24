import "./index.css";
import { candidates } from "./componen/candidates";
import CandidateCard from "./componen/CandidateCard";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Kandidat Pemilu</h1>
      <div className="candidate-list">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default App;



