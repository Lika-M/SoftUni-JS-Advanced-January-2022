// Judje gives me 77/100

function requestValidator(request) {

    function verifyMethod() {
        let methods = ['GET', 'POST', 'DELETE', 'CONNECT']
        if (!request.method || !methods.includes(request.method)) {  
            throw new Error(`Invalid request header: Invalid Method`);
        }
    }
    function verifyURI() {
        let pattern = /^[\w.]+$/;
        let validURI = pattern.test(request.uri);
        if (!request.uri || !validURI || request.uri == '') {
            throw Error(`Invalid request header: Invalid URI`);
        }
    }
    function verifyVersion() {
        if (!request.version || !request.version == ' HTTP/0.9' ||
            !request.version == ' HTTP/1.0' ||
            !request.version == 'HTTP/1.1' ||
            !request.version == 'HTTP/2.0') {
            throw Error(`Invalid request header: Invalid Version`);
        }
    }
    function verifyMessage() {
        let pattern = /^[^<>\\&'"]*$/;
        let validMessage = pattern.test(request.message);
        if (!request.message || !validMessage || request.message == '') {
            throw Error(`Invalid request header: Invalid Message`);
        }
    }

    verifyMethod();
    verifyURI();
    verifyVersion();
    verifyMessage();
    return request;
}

obj1 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
obj2 = {
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
}
obj3 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}

obj4 = {
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}

try {
    console.log(requestValidator(
        {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        }
    ))
} catch (error) {
    console.log(error.message);
}

