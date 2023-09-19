const page = ({ params }) => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
    { id: 4, name: "Arvind Kumar", role: "Frontend Developer" },
    { id: 5, name: "Sawan", role: "Software Developer" },
    { id: 6, name: "Ritesh", role: "Gate Clear Boy" },
    { id: 7, name: "Manmohan", role: "Business Man" },
  ];
  const { id } = params;

  // Convert id to a number
  const idNumber = +id;

  // Find the corresponding object in the details array
  const developer = details.find((item) => item.id === idNumber);

  if (developer) {
    return (
      <h3
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "20px",
        }}
      >
        Hi {developer.name} {developer.role}
      </h3>
    );
  } else {
    return (
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "20px",
        }}
      >
        Developer does not exist
      </div>
    );
  }
};

export default page;
