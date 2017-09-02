class ProductService {
    constructor() {
        var names = [],messages = [];
        var name = document.getElementById("fullName"), message = document.getElementById("Message");
    }
    saveMessage()
    {
        var message = {name: title.value, body: body.value};
        messages.push(message);
        localStorage.setItem("Message", JSON.stringify(messages));
    
        var name = {name: title.value, body: body.value};
        names.push(name);
        localStorage.setItem("fullName", JSON.stringify(name));
    }
}