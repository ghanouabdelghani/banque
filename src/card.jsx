export default function card({ name, email, website }) {
  return (
    <>
      {/* <img src={avatar} alt="" /> */}
      <p> name : {name} </p>
      <p> email : {email}</p>
      <p>
        website : <a href={website}>{website}</a>
      </p>
    </>
  );
}
