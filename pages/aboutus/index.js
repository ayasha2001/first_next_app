import Link from "next/link";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const AboutusPage = () => {
  return (
    <div>
      <ul>
        {details.map((item) => {
          return (
            <li>
              <Link href={`/aboutus/${item.id}`} key={item.id}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutusPage;
