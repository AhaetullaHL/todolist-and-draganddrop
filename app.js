document.addEventListener("DOMContentLoaded", function()
{
    app();
})

/**
 * main function to start app
 */
function app()
{

}

/**
 *
 * @param el
 * @returns {*}
 */
function createNode(el)
{
    return document.createElement(el);
}

/**
 * @param parent
 * @param el
 * @returns {*|ActiveX.IXMLDOMNode}
 */
function append(parent, el)
{
    return parent.appendChild(el);
}

/**
 * @param el
 * @param Class : string
 */
function addClass(el, Class)
{
    return el.classList.add(Class);
}

/**
 *
 * @param el html element to target
 * @param name : string name of attribute
 * @param val : string value of attribute
 */
function addAttr(el, name, val)
{
    return el.setAttribute(name, val);
}