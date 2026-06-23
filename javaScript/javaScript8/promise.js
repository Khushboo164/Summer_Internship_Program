function greet(){
    return new Promise((res,rej) => {
        res("good morning");
    })
}

greet()
.then((res) => {
    console.log(res)
})

