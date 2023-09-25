


 function getParentEl(el:Element, tagName:string) {
    let searchEl = el;

    while (searchEl.parentElement) {
        if (searchEl.parentElement.tagName.toLowerCase() === tagName.toLowerCase()) {
            return searchEl.parentElement;
        }

        searchEl = searchEl.parentElement;
    }

    return null;
}

export function defineSectionSelector(attr:string, tag:string) {
    let list = document.querySelectorAll(`[${attr}]`);
    list.forEach((el) => {
        const tagEl = getParentEl(el, tag);

        if (!tagEl) {
            return;
        }
        tagEl.setAttribute(attr, '');
    })
}

 export function fetchData(path:string):Promise<unknown> {
     return fetch(`${document.location.origin}${path}?format=json-pretty`)
         .then((response) => response.json());

     //return import('./response.json');
 }