import {html, LitElement} from 'lit-element';

function parseJsonTree(json) {
    try {
        return JSON.parse(json);
    } catch (e) {
        console.error('Failed to parse tree', json);
        return {};
    }
}

function templateOffset(offset) {
    let result = '';
    for (let i = 0; i < Number(offset); i++) {
        result += '-';
    }

    return result;
}

class MyTree extends LitElement {
    constructor() {
        super();

        this.tree = '{}';
        this.offset = 0;
    }

    static get properties() {
        return {
            tree: {
                type: String
            },
            offset: {
                type: Number
            }
        }
    }

    render() {
        const parsedTree = parseJsonTree(this.tree);
        const {id, items} = parsedTree;
        const treeIdTemplate = html`${templateOffset(this.offset)}<span>subtree id ${id}</span>`

        return html`
            <div>
                ${treeIdTemplate}
                ${this.renderSubtrees(items)}
            </div>`
    }


    renderSubtrees(items = []) {
        return items.map(item => item.items ? html`
            <my-tree tree='${JSON.stringify(item)}' offset=${this.offset + 2}></my-tree>` : html`<my-leaf id="${item.id}" offset=${this.offset + 2} />`)
    }

}


class MyLeaf extends LitElement {
    constructor() {
        super();

        this.offset = 0;
        this.id = 0;
    }

    static get properties() {
        return {
            id: {
                type: Number
            },
            offset: {
                type: Number
            }
        }
    }

    render() {
        return html`<br>${templateOffset(this.offset)}<span>leaf id: ${this.id}</span>`
    }
}

customElements.define('my-leaf', MyLeaf);
customElements.define('my-tree', MyTree);

