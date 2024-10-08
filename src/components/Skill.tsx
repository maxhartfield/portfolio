interface Props {
  skill: string;
}
function Skill({ skill }: Props) {
  return (
    <span className="badge rounded-pill bg-primary m-2 fs-7">{skill}</span>
  );
}
export default Skill;
