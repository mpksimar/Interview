var backspaceCompare = function(S, T) {
    
var list1= elem(S,[])
var list2 = elem(T,[])
console.log(list1);
console.log(list2);

    return JSON.stringify(list1) === JSON.stringify(list2);
    
    
};
function elem(txt, lst)
{
    for (x of txt)
        {
            if (x=="#")
                {
                    if (lst==[])
                        {
                            continue;
                        }
                    else
                        {
                            lst.pop(x);
                        }
                }
            else
                {
                    lst.push(x);
                }
        }
    return lst;
}
