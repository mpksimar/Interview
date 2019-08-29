function kangaroo(x1, v1, x2, v2) {

    if (x2 > x1 && v2 > v1) {
        return "NO";
    }

    var diff = (x1 - x2) % (v2 - v1);
    if (diff === 0) {
        return "YES";
    }
    return "NO";

    

}
