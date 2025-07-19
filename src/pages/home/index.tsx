export default function HomePage() {
  const education = [
    {
      id: 1,
      name: "B.Sc Information Technology",
      completed: true,
      thesis: "Retrevial Augment Generation Fjord1",
      grade: "A",
    },
    {
      id: 2,
      name: "M.Sc Applied Data Technology",
      completed: false,
    },
  ];

  const experience = [
    {
      id: 1,
      year: 2025,
      company: "HVLRobotics",
      role: "Fullstack Developer",
      skills: ["React", "Three.js", "CI/CD", "Docker", "Agile", "Scrum"],
    },
    {
      id: 1,
      year: 2024,
      company: "HVLRobotics",
      role: "Backend Developer",
      skills: ["Pyhon", "TKInter"],
    },
  ];
  return (
    <>
      <div className="content font-serif">
        <div className="h-dvh w-dvw">
          <div className="flex flex-col items-center justify-center h-50 bg-accent">
            <h1 className="card bg-accent-content p-4 text-4xl">
              Welcome to jobjorn.no
            </h1>
          </div>

          <div className="flex">
            <div className="flex flex-col gap-3 bg-accent-content p-10 w-1/2">
              <h1 className="flex justify-center bg-accent-content text-4xl">
                Education
              </h1>
              <div className="flex justify-center">
                <ul className="flex flex-col gap-2">
                  {education
                    .map((item) => (
                      <div className="flex flex-col gap-2 font-light">
                        {item.completed ? "Completed" : "In progress"}
                        <li
                          className={
                            "pointer-events-auto flex flex-col h-fit badge-dash badge " +
                            (item.completed ? "badge-success" : "badge-warning")
                          }
                          key={item.id}
                          onClick={() => console.log("hi")}
                        >
                          <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold">
                              {item.name}
                            </div>
                            <div className="collapse-content text-sm">
                              {item.completed ? (
                                <div>
                                  <div>Thesis: {item.thesis}</div>
                                  <div>Grade: {item.grade}</div>
                                </div>
                              ) : (
                                <div> The future will tell </div>
                              )}
                            </div>
                          </div>
                        </li>
                      </div>
                    ))
                    .sort()}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-2xl bg-base-200 p-10 w-1/2">
              <h1 className="flex justify-center p-5">Experience</h1>
              <div className="flex justify-center p-5">
                <ul className="grid lg:grid-cols-2 gap-2.5">
                  {experience.map((item) => (
                    <li
                      className="flex flex-col badge bg-blend-color h-fit p-4"
                      key={item.id}
                    >
                      <div className="badge text-2xl p-4">{item.company}</div>
                      <div>Year: {item.year}</div>
                      <div>Role: {item.role}</div>
                      <div className="grid gap-2.5 grid-cols-2">
                        {item.skills.map((skill) => (
                          <div className="badge bg-accent-content w-full h-full">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
