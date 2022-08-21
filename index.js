// Code your solution here

let findMatching=function(array,string){
    return array.filter(s=>s.toLowerCase()==string.toLowerCase())
}

let fuzzyMatch = function(array,string){
    return array.filter(item=>item[0] == string[0])
}

let matchName = function(array,string){
    return array.filter(item=>item.name==string)
}
