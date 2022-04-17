// THIS IS A FUNCTION THAT CREATES ELEMENTS:

// by type, attributes content to append as a child
// if content si textContent, function makes it textNode, used to append

//'type' is string - type of element(ul, li, div, etc)
//'attributes' are an object
//parameters after first two come as array of strings
//-> content of array is used for appending child

function el(type, attributes, ...content) {
    
    const element = document.createElement(type);
    for (let property in attributes) {
        element[property] = attributes[property];
    };
    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    };
    return element;
};
