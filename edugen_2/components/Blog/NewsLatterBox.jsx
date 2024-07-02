import React, { useState } from "react";

const NewsLatterBox = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <div className="relative overflow-hidden rounded bg-gray-100 p-8 dark:bg-gray-800">
      <h4 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
        Subscribe to our newsletter
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="w-full mb-4 rounded border border-gray-300 bg-white px-4 py-2 text-sm text-body-color focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-gray-700 dark:focus:border-primary"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-opacity-90"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLatterBox;
