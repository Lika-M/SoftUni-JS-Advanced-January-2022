function requestValidator(request) {

    //message "Invalid request header: Invalid {Method/URI/Version/Message}". 
    function verifyMethod() {
        if (request.method == 'GET' ||
            request.method == 'POST' ||
            request.method == 'DELETE' ||
            request.method === 'CONNECT') {
            return request;
        } else {
            throw Error(`Invalid request header: Invalid Method`);
        }
    }
    function verifyURI() {
        let pattern = /^[\w+|\.]+$/;
        let validURI = pattern.test(request.uri);
        if (validURI || request.uri == '*') {
            return request;
        } else {
            throw Error(`Invalid request header: Invalid URI`);
        }
    }
    //be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 
    function verifyVersion() {
        if (request.version == ' HTTP/0.9' ||
            request.version == ' HTTP/1.0' ||
            request.version == 'HTTP/1.1' ||
            request.version == 'HTTP/2.0') {
            return request;
        } else {
            throw Error(`Invalid request header: Invalid Version`);
        }
    }
    function verifyMessage() {
        let pattern = /^[^<|>|\\|&|'|"]+$/;
        let validMessage = pattern.test(request.message);
        if (validMessage || request.message == '') {
            return request;
        } else {
            throw Error(`Invalid request header: Invalid Message`);
        }

    }
    verifyMethod.call(request);
    verifyURI.call(request);
    verifyVersion.call(request);
    verifyMessage.call(request);
    console.log(request);
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});