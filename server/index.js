const SerialPort = require('serialport')
// const ReadLine = require('@serialport/parser-readline')

// const port = new SerialPort('ACPI\PNP0501\1').catch

// console.log("PORT", port)

// const parser = new ReadLine()
// port.pipe(parser)

// parser.on('data', line => console.log(`> ${line}`))
// port.write('ROBOT POWER ON\n')
// //> ROBOT ONLINE

async function hello () {
    try {
        const serialport = await new SerialPort('USBVID_04B4&PID_8613\u0005&2BF451F8&0&1');
        console.log("SERIALPORT: ", serialport)
        serialport.write('ROBOT POWER ON')
    } catch (err) { console.log(err) }
}

hello()

// SerialPort.list(function (err, ports) {
//     ports.forEach(function(port) {
//         console.log(port)
//         console.log("------------------------------")
//     });
// });
