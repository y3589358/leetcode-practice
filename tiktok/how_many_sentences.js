(function main() {
    // var words = ["listen","silent","it","is"];
    // var sentences = ["listen it is silent"];
    var words = ["bats","tabs","in","cat","act"];
	var sentences = ["cat the bats", "in the act", "act tabs in"];
    
    //get every str in arr, convert to arr -> sort -> str
    //compare with map, if include this key, push this string
    
    var map = {},countArr = []
    
    for(var i=0;i<words.length;i++){
        var oldStr = words[i];//listen
        //listen -> ['l','i','s','t','e','n'] -> ['e','i','l','n',s','t'] -> eilnst
        var sortedStr = oldStr.split('').sort().join('');
        if(map[sortedStr]){
           map[sortedStr].push(oldStr);//i=1,map = {'eilnst':["listen","silent"]}
        }else{
           map[sortedStr] = [oldStr];//{'eilnst':["listen"]}
        }
    }
    
    //calculate how many sentence
    //get every sentence -- "listen it is silent"
    
    var index = 0;
    for(var i=0;i<sentences.length;i++){
        //str convert to arr, "listen it is silent" -> ["listen","it","is","silent"]
        var wordArr = sentences[i].split(" ");
        var curCount = 1;
        //get every word --  listen
        for(var j=0;j<wordArr.length;j++){
            var sortedStr = wordArr[j].split('').sort().join('');
            if(map[sortedStr]){
               curCount = map[sortedStr].length * curCount;
            }
        }
        countArr[index] = curCount;
        index++;
    }
    console.log(countArr)
}());