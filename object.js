function Rectangle(a, b) {
    let perimeter = 2*(a+b);
    let area = a*b;
    
    const object = {
     length : a,
     width : b,
     perimeter: perimeter,
     area : area
    } 
    return object
 }