console.log("we hit the server")

const usb = require('usb')

const usbs = usb.findByIds('USB\VID_04B4&PID_8613&REV_0000', 'USB\VID_04B4&PID_8613')

console.log("USB", usbs)



// 04B4  8613