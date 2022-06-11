import { Link } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

export const AboutPage = () => {
  return (
    <main className="bg-slate-700 p-4">
      <h1 className="text-white">AboutPage</h1>

      <div className="flex py-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
      </div>
    </main>
  );
};
