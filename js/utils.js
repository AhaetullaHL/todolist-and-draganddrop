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
 * @param parent targeted html element to append child element
 * @param el child html element
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

/**
 * @param el element html to target
 * @param value : string value of text content elements
 * @returns {*}
 */
function addValue(el, value)
{
    return el.textContent = value;
}