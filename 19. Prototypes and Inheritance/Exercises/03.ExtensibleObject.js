function extensibleObject() {
    return {
        extend: function(template) {
            let objPrototype = Object.getPrototypeOf(this);
            let objKVP = Object.entries(template);

            for (const [key, value] of objKVP) {
                if(typeof value === 'function'){
                    objPrototype[key] = value;
                } else {
                    this[key] = value;
                }
            }
        }
    }
}

extensibleObject()