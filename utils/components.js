import {subscribe,state} from "../model/store.js";
/** 
 * @callback Handler
 * @param {Event | CustomEvent} event
*/
/**
 * @callback Connect
 * @param {State} prev
 * @param {State} next
 */
/**
 * @type {object} Props
 * @prop {string} element
 * @prop {string} template 
 * @prop {Record<string,Handler>} events
 * @prop {Connect} connect
 */

/**
 * @param {Props} props
 */
export const createComponent = (props) =>{
    const {element, template: templateString } = props;
    
    if (!element.includes("-")){
        throw new Error("element name must include a hyphen");
    }
    const template = document.createElement("template")
    template.innerHTML = templateString;

class Component extends HTMLElement{
    #inner = this.attachShadow({mode:"closed"});

    constructor(){
        super();
        const node = template.content.cloneNode(true);
        this.#inner.appendChild(node)
}
connectedCallback(){
    this.render();
}
customElements.define(element,Component);
return Component
};

