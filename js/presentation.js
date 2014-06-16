var loc = window.location.toString();
console.log(loc);
if (loc.match(/^https/)){
    window.location.assign(loc.replace(/^https/, 'http'))
}
else {
    console.log('http');
}
