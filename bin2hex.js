String.prototype.hex2bin = function ()
{

  var i = 0, l = this.length - 1, bytes = []

  for (i; i < l; i += 2)
  {
    bytes.push(parseInt(this.substr(i, 2), 16))
  }

  return String.fromCharCode.apply(String, bytes)   

}

String.prototype.bin2hex = function ()
{

  var i = 0, l = this.length, chr, hex = ''

  for (i; i < l; ++i)
  {

    chr = this.charCodeAt(i).toString(16)

    hex += chr.length < 2 ? '0' + chr : chr

  }

  return hex

}

alert('b637eb9146e84cb79f6d981ac9463de1'.hex2bin().bin2hex())
