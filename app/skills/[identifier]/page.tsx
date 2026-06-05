import { skills } from "@/app/skills/skills";

type Props = {
  params: Promise<{ identifier: string }>;
};

const SkillsPage = async ({ params }: Props) => {
  const data = await params;
  const skill = skills.find((skill) => skill.id === Number(data.identifier));
  return skill ? (
    <>
      <h1>Welcome to skills page</h1>
      <p> Skill name : {skill?.name}</p>
      <p>description : {skill?.description}</p>
    </>
  ) : (
    <h1>Skill not found</h1>
  );
};

export default SkillsPage;
