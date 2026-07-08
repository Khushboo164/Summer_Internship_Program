    try {
    const arr = await fs.writeFile('file6.txt', JSON.stringify(data1)+(data2))
    console.log("file creat");
    
}
catch (err){
    console.log(err)
}
}
dj();