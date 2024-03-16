import Card from "./card";
import { users } from "./data.js";

export default function newsa() {
  return (
    <>
      {users.map((users, index) => (
        <Card
          key={index}
          name={users.username}
          email={users.email}
          website={users.website}
        />
      ))}
    </>
  );
}
