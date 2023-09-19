import Link from "next/link";
import React from "react";

const page = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
    { id: 4, name: "Arvind Kumar", role: "Frontend Developer" },
    { id: 5, name: "Sawan", role: "Software Developer" },
    { id: 6, name: "Ritesh", role: "Gate Clear Boy" },
    { id: 7, name: "Manmohan", role: "Business Man" },
  ];
  return (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: "2em", marginBottom: "2rem" }}
      >
        Welcome to the About Us Page
      </h1>
      <p>If you want to check name info then click on them</p>
      <ul
        style={{
          display: "flex",
          gap: "10px",
          listStyle: "none",
          flexDirection: "column",
        }}
      >
        {details.map((item) => {
          return (
            <li>
              <Link
                style={{ textDecoration: "none" }}
                href={`/aboutus/${item.id}`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
