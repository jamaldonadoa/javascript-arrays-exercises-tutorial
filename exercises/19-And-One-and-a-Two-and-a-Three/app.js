let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

let nombres = Object.keys(contact)
console.log(nombres)

for (let i = 0; i < nombres.length; i++) {
    let prop = nombres[i]
    console.log(nombres[i] + " : " + contact[prop])
}
