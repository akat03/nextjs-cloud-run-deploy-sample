
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


interface Props {
  data: any;
}



const TestPage = ( {data}:Props) => {
  return (
    <div>
      <h1>SSRPage!!!</h1>
      username : {data.name}
    </div>
  );
};

export default TestPage;
