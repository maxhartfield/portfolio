interface Props {
  skill: string;
}
function Skill({ skill }: Props) {
  return (
    <span className="badge rounded-pill bg-primary m-2 skill">{skill}</span>
  );
}
export default Skill;
