const sayHello = (name = "world"): string => {
    const message = `Hello, ${name}!`
    console.log(message)

    return message
}

export = sayHello
