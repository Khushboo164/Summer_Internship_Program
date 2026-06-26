function greet(){
    return new Promise((res,rej) => {
        res("Good morning");
    })
}

greet()
.then((res) => {
    console.log(res)
})

