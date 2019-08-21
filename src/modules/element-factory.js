/**
 *
 * Extended version of document.createElement to simplify HTML element creation
 *
 * @author knownOut <knownout@hotmail.com>
 * @version 0.5.2 13082019
 */

export class Element{
    constructor(tag, attributes){
        let element = document.createElement(tag);
        this.element = element;

        if(attributes) this.attribute(attributes);
        return this;
    }

    attribute(attributes, value){
        if(typeof attributes == "string")
            this.attribute({attributes: value});
        else {
            for(let attr in attributes){
                if(['html', 'text'].includes(attr)){
                    if(attr == 'html')
                        this.element.innerHTML = attributes[attr];
                    else 
                        this.element.innerText = attributes[attr];
                }
                else this.element.setAttribute(attr, attributes[attr]);
            }
        }

        return this;
    }

    event(...args){
        if(
            args.length == 2 &&
            typeof args[0] == "string" &&
            typeof args[1] == "function"
        ) this.element.addEventListener(args[0], args[1]);
        else for(let i = 0; i < args.length; i ++){
            const arg = args[i];
            if(
                !Array.isArray(arg) || typeof arg[1] != "function"
                || typeof arg[0] != "string"
            ) throw new Error('Cannot process given argument at position ' + (i + 1));

            this.element.addEventListener(arg[0], arg[1]);
        }

        return this;
    }

    childs(...childs){
        if(!Array.isArray(childs)) childs = Array(childs);
        for(let child of childs){
            if(child instanceof Element || child.constructor.name == 'Progress'){
                this.element.appendChild(child.element);
            } else this.element.appendChild(child);
        }
        return this;
    }
}