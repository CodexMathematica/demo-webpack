import { app } from "./app";

const root: HTMLElement|null = document.getElementById('root');
root?.appendChild(app());
