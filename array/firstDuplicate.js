const a = [2, 1, 3, 5, 3, 2];
size = a.length

function firstDuplicate (a) {
    for (i=0; i <= size; i++) {
        
        if(a.indexOf(a[i]) !=i){
            return true;
        }

        console.log(a.indexOf(a[i]))

    }
    return false;
}
