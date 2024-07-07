import Image from "next/image";

async function getData(){
  return[
    {
      name: "Taranga Baral",
      age:18,
      class : 12,
      dob: "2063/03/13"
    },
    {
      name: "Aabriti Baral",
      age:15,
      class : 10,
      dob: "2065/02/01"
    },

    {
      name: "Aalok Baral",
      age:7,
      class : 2,
      dob: "2072/12/09"
    },
  ];
}
export default async function Home() {
  const data = await getData();
  return (
    <>
      <h1 className="text-center pt-5">Hi There</h1>
      {data.map((user)=>(
        <>
          <p className="text-wrap px-4" key={user.class}>
          Name = {user.name}<br />
          Age = {user.age}<br />
           Class =  {user.class}<br />
            Date Of Birth = {user.dob}<br /><br />
            </p></>
      ))}
    </>
  );
}
export const metadata = {
  title: "App-Home"
}