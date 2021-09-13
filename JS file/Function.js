//함수(function)란 하나의 로직을 재실행 할 수 있도록 하는 것, -> 코드의 재사용성을 높여준다

//함수는 function 뒤에 함수 이름, 소괄호가 따라온다, 소괄호에는 인자라는 값이 차례로 들어오는데
//이 값은 함수를 호출할 때 함수의 로직으로 전달될 변수이다, 물론 인자는 생략이 가능하다
//함수 호출 후 실행되는 부분은 중괄호 안쪽에 온다


//아래 함수는 1부터 10까지 더한 값을 화면에 출력한다
function Sum(){
    var sum = 0;
    for(var i = 1; i <= 10; i++){
        sum += i;
    }
    return sum; //함수 내에서 사용한 return은 return뒤에 따라오는 값을 함수의 결과롤 반환하고 함수를 종료시킨다
}

//인자란? 함수로 유입되는 값을 의미하는데 어떤 값이 인자로 전달하느냐에 따라 함수가 반환되는 값이나 동작방법이 달라진다

//아래 함수는 arg 인자로 전달되는 값을 그대로 반환한다
function get_arg(arg){
    return arg 
}

//아래 함수는 arg1, arg2 인자에 각각 전달받은 값을 더해 반환한다
function get_args(arg1, arg2){
    return arg1 + arg2;
}


//함수를 정의하는 또 다른 방법

//아래 두 함수는 똑같은 결과를 반환한다, 다만 함수를 정의하는 부분만 다를 뿐이다
var sumhun = function(){    //변수에 함수를 대입하는 방법
    var sum = 0;
    for (var i = 1; i <= 100; i++){
        sum += i;
    }
    return sum;
}

function Sumhun(){          //원래대로 함수를 정의하는 방법
    var sum = 0;
    for (var i = 1; i <= 100; i++){
        sum += i;
    }
    return sum;
}