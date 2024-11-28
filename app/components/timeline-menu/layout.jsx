"use client";

import RecordModalLayout from "./../record_modal/layout";

export default function TimelineMenuLayout({ children }) {
  let beginning = 1800;
  let end = 2022;

  return (
    <div className="flex flex-col gap-4 bg-gray-900 p-5 h-screen min-w-80">
      <h1>LDS History Timeline</h1>
      <div>
        <h2>Years</h2>
        <ul>
          {Array.from({ length: 22 }, (_, i) => (beginning += 10)).map(
            (year) => (
              <li key={year}>
                <span className="text-xl font-bold cursor-pointer">{year}s</span>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => document.querySelector("dialog").showModal()}
        >
          Add new record
        </button>
      </div>
      <RecordModalLayout />
    </div>
  );
}
