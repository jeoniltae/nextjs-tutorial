import CounterClient from "./CounterClient";

const CounterPage = () => {
  return (
    <main>
      <h1>Counter Example</h1>
      <CounterClient initialValue={0} />
    </main>
  )
}

export default CounterPage;
