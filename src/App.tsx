import "./index.css";
import { candidates } from "./componen/candidates";
import CandidateCard from "./componen/CandidateCard";
import {Headers} from "./componen/Headers";
const App: React.FC = () => {
  return (
    <>
      <Headers />
      <div className="App">
        <h1>Kandidat Pemilu</h1>
        <div className="candidate-list">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;



