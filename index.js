function shout(string)
{
  return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string)
{
  console.log(string.toUpperCase());
}
function logWhisper(string)
{
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string)
{
  var up=string.toLowerCase();
  if(up===string)
    return "I can't hear you!";
}
function sayHiToGrandma(string)
{
  var up=string.toUpperCase();
  if(up===string)
    return "I love you, too.";
}