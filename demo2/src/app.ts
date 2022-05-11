export const app = (): HTMLElement => {
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.innerText = 'Je suis un titre';
    container.appendChild(title);

    return container;
}
