module.exports = {
reverseString:function(str)
{
  if(str=='')
  {
    return null;
  }
  var result = str.split("").reverse().join("");
  if(str==result)
  {
    return true;
  }
  return result;
}
}