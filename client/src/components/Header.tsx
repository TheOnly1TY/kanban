import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="h-24 w-full bg-white flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-3">
        <img src="/assets/logo-mobile.svg" className="lg:hidden" alt="logo" />
        <div>
          <h1 className="text-[18px] lg:text-2xl font-bold font-jakarta text-dark-900">
            Platform Launch
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Button className="max-w-41 px-4" size="sm">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFF"
              d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
            />
          </svg>

          <span className="hidden lg:block">Add New Task</span>
        </Button>
        <div>
          <img src="/assets/icon-vertical-ellipsis.svg" />
        </div>
      </div>
    </header>
  );
}
