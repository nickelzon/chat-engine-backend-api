import { React, useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="flex min-h-[50vh] items-center justify-center rounded-lg bg-slate-50 p-5">
      <form className="flex flex-col">
        <input
          type="text"
          className="mb-3 p-2 outline-amber-400"
          placeholder="username"
        />
        <Link to="/main" className="rounded-lg bg-amber-400 p-4 text-center">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default Form;
