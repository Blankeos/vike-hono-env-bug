import { config } from "@/config";

export default function Home() {
  return (
    <div>
      <h3>Bug 1: For some reason these are displayed on the client.</h3>
      <ul>
        <li>(config) DATABASE_URL: {config.DATABASE_URL}</li>
        <li>(config) BASE_ORIGIN: {config.BASE_ORIGIN}</li>
        <li>(import.meta.env) DATABASE_URL: {import.meta.env.DATABASE_URL}</li>
        <li>(import.meta.env) BASE_ORIGIN: {import.meta.env.BASE_ORIGIN}</li>
      </ul>

      <hr />

      <h3>
        2. Bug 2: For some reason, these actually throw an error for rollup even
        though it's just text??
      </h3>
      <p>Try uncommenting any of them in the source code:</p>

      {/* <div>import.meta.env.DATABASE_URL</div> */}

      {/* <div>{"import.meta.env.DATABASE_URL"}</div> */}

      <hr />

      <h3>Bug 2: But it works if the env variable doesn't exist.</h3>
      <div>This does not exist: {"import.meta.env.BASE_ORIGINN"}</div>
      <div>This does not exist: {"import.meta.env.DATABASE_URLL"}</div>
    </div>
  );
}
