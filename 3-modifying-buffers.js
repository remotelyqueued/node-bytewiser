process.stdin.on('data', function (data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 46) data.write('!', i);
    }
    console.log(data);
});
