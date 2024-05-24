import { Candidate } from "./candidates";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <div className="candidate-info">
        <span className="candidate-id">{candidate.number}</span>
        <img src={candidate.photo} alt="" />
      </div>
      <h3>{candidate.name}</h3>
      <h4>{candidate.batch}</h4>
    </div>
  );
};

export default CandidateCard;
