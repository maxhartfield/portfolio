interface Props {
  skill: string;
}
function Skill({ skill }: Props) {
  return <span className="badge rounded-pill bg-primary m-2">{skill}</span>;
}
export default Skill;
