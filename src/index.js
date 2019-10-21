import { LitElement, html, css } from 'lit-element';

class Node extends LitElement {
    static get properties() {
        return {
            json: { type: String }
        };
    }
    static get styles() {
        return css`
        ul {
            margin: 0;
          }
        .node {
            font-weight: bold;
            color: brown;
        }
        `;
    }

    constructor() {
        super();
        this.json = '';
    }

    render () {
        const data = JSON.parse(this.json);
        const nextNode = this.getNextNode(data.items);
        if (!nextNode) {
            return this.renderLeaf(data);
        } else {
            return this.renderNode(data.id, nextNode);
        }
    }

    getNextNode (items) {
        if (Array.isArray(items) && items.length) {
            return items.map(item => JSON.stringify(item));
        }
    }

    renderLeaf (data) {
        return html`<my-leaf json=${JSON.stringify(data)}></my-leaf>`;
    }

    renderNode (id, nextNode) {
        //как составить template literals, основываясь на массиве данных?
        //я не поняла, как это сделать, поэтому аргументы для html() функции собираю в отдельной функции в цикле
        return html(this.buildNodeHtml(nextNode.length), ...[id].concat(nextNode));
    }

    buildNodeHtml(length) {
        if (length) {
            const strings = ["<li><span class='node'>", " (node)</span><ul><li><my-tree json="];
            for (let i = 1; i < length; i++) {
                strings.push("></my-tree></li><li><my-tree json=");
            }
            strings.push("></my-tree></li></ul></li>");
            return strings;
        }
        return [""];
    }
}

class Leaf extends LitElement {
    static get properties() {
        return {
            json: { type: String }
        };
    }
    static get styles() {
        return css`
        .leaf {
            color: green;
        }
        `;
    }

    constructor() {
        super();
        this.json = '';
    }

    render () {
        return html`<span class="leaf">${JSON.parse(this.json).id} (leaf)</span>`;
    }
}

customElements.define('my-tree', Node);
customElements.define('my-leaf', Leaf);
