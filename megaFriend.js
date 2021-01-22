function megaFriend(name){
    var max=[];
    for (var i=0; i<name.length; i++){
        var element = name[i];
        if (name>max) {
           max =element;
        }
    }
    return max;
}
