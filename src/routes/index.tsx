import { createFileRoute, Link } from "@tanstack/solid-router";
import { createSignal, onMount } from "solid-js";
import solidLogo from "../assets/solid.svg";
import viteLogo from "/vite.svg";
import tantackLogo from "../assets/tanstack.png";
import "./index.css";

export const Route = createFileRoute("/")({ component: RouteComponent });

function RouteComponent() {
  const [count, setCount] = createSignal(0);
  const [health, setHealth] = createSignal();

  onMount(() =>
    fetch("/api/health").then(async (response) =>
      setHealth(await response.json()),
    ),
  );

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={tantackLogo} class="logo" alt="Tanstack logo" />
        </a>
      </div>
      <h1>Vite + Solid + Tanstack Router</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <div>
          API STATUS: <code>{JSON.stringify(health())}</code>
        </div>
        <div>
          You can now visit <Link to="/about">/about</Link>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  );
}
