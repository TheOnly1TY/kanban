import MOCKDATA from "../data.json";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const COLUMN_DOT_COLORS = {
  Todo: "bg-brand-primary",
  Doing: "bg-[#8471F2]",
  Done: "bg-[#67E2AE]",
};

export default function App() {
  const board = MOCKDATA.boards[0]; // Platform Launch

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-neutral-off-white">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-neutral-off-white flex flex-col">
          <div className="max-w-7xl mx-auto flex-1 flex flex-col">
            <section className="flex flex-nowrap items-stretch gap-4 overflow-x-auto overflow-y-hidden flex-1 pb-6">
              {board.columns.map((column) => (
                <div key={column.name} className="shrink-0">
                  <h2 className="flex items-center gap-2 text-[12px] font-bold tracking-[2.4px] uppercase text-neutral-grey mb-4">
                    <span
                      className={`w-[15px] h-[15px] rounded-full ${
                        COLUMN_DOT_COLORS[column.name] || "bg-brand-primary"
                      }`}
                    ></span>
                    {column.name} ({column.tasks.length})
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {column.tasks.map((task) => {
                      const totalSubtasks = task.subtasks.length;
                      const completedSubtasks = task.subtasks.filter(
                        (s) => s.isCompleted,
                      ).length;

                      return (
                        <li
                          key={task.title}
                          className="flex flex-col justify-center gap-1 max-w-[280px] min-h-[88px] bg-white rounded-lg shadow-[0_4px_6px_0_rgba(56,78,126,0.1015)] p-[19px]"
                        >
                          <h2 className="text-[15px] font-bold text-dark-900">
                            {task.title}
                          </h2>
                          <p className="text-[12px] text-neutral-grey font-bold">
                            {completedSubtasks} of {totalSubtasks} subtasks
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {/* New Column */}
              <div
                className="flex-1 min-w-[250px] shrink-0 mt-[34px] h-full rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, #E9EFFA 0%, rgba(233,239,250,0.5) 100%)",
                }}
              >
                <h2 className="flex justify-center items-center gap-1.5 text-2xl text-neutral-grey font-bold">
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-neutral-grey"
                  >
                    <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" />
                  </svg>
                  New Column
                </h2>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
