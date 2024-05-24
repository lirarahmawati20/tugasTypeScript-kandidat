import { Candidate } from "./candidates";

interface CandidateCardProps {
  candidate: Candidate;
}

function CandidateCard(props: CandidateCardProps) {

  return (
    <div className="candidate-card">
      <div className="candidate-info">
        <span className="candidate-id">{props.candidate.number}</span>
        <img src={props.candidate.photo} alt="" />
      </div>
      <h3>{props.candidate.name}</h3>
      <h4>{props.candidate.batch}</h4>
    </div>
  );
}
export default CandidateCard;

