class HelloWorld extends HTMLElement {
	constructor() {
		super();
		// Attach a shadow root to the element.
		let shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = `<p>hello world</p>`;
	}
}
customElements.define('hello-world', HelloWorld);
