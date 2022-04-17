function requestValidator(input) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /(^[\w.]+$)/;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidChars = ['<', '>', '\\', '&', '"', "'"]
 
    if (!input.hasOwnProperty('method') || !methods.includes(input.method)) {
        throw Error('Invalid request header: Invalid Method')
    } else if (!input.hasOwnProperty('uri') || !uriPattern.test(input.uri)) {
        throw Error('Invalid request header: Invalid URI')
    } else if (!input.hasOwnProperty('version') || !validVersions.includes(input.version)) {
        throw Error('Invalid request header: Invalid Version')
    }
    if (input.hasOwnProperty('message')) {
        invalidChars.forEach(x => {
            if (input.message.includes(x)) {
                throw Error('Invalid request header: Invalid Message')
            }
        })
    } else throw Error('Invalid request header: Invalid Message')
 
    return input
}