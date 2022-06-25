
function filter_list(l) {
return l.filter( str => typeof str != 'string' && str >= 0);
}




console.log(filter_list([1,2,'a','b'])) 
filter_list([1,'a','b',0,15]) 
filter_list([1,2,'aasf','1','123',123]) 