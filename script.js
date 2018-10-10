//Sleep in
function sleep_in(weekday,vacation){
    if (weekday==true&&vacation==false){
        return false;
    }else{
        return true;
    }
}
//monkeyTrouble
function monkey_trouble(a_smile,b_smile){
    if (a_smile==b_smile){
        return true;
    }else{
        return false;
    }
}
//string_times
function string_times(x,y){
    var times = x.repeat(y);
    return times;
}
//front_times
function front_times(word,num){
    var answer = "";

    var front = word.substring(0,3);

    for( var i = 0; i < num; i++){
        answer = answer +  front;

    }

    return answer;
}
//string_bits
function string_bits(word){
    var answer = "";
    for( var i = 0; i < word.length; i=i+2){

        answer = answer + word[i];

    }
    return answer;
}
//
//caughtspeeding
function caughtSpeeding(num,boolean){
    var x = 0;
    if (num < 60 && boolean == false){
        x = x + 0;
    }

    if (num >= 61 && num <=80 && boolean == false){
        x = x + 1;
    }

    if (num >= 81 && boolean == false){
        x = x + 2;
    }

    if (num < 65 && boolean == true){
        x = x + 0;
    }

    if (num >= 66 && num <=85 && boolean == true){
        x = x + 1;
    }

    if (num >= 86 && boolean == true){
        x = x + 2;
    }
    return x;
}
//fizzbuzz
function fizz_buzz(num){
    var result= "";
    if (num % 5 == 0 && num % 3==0){
        result ="FizzBuzz";
    }else if (num % 5 == 0){
        result = "Buzz";
    }else if(num % 3 == 0){
        result = "Fizz";
    }else{
        return num + "!";
    }


    return result;
}
function teaParty(x,y){
    var result= "";
    if ( x<5 || y <5 ){
        result = "0";
    }
    if (x  >= 5 && y >= 5 ){
        result = "1";
        if ( x >= 2*y || y>= 2*x ){
            result = "2";
        }
    }

    return result;
}

function blackjack(x,y){
    var result= "";
    if (x>21&&y>21){
        result = "0";
    } else if ( x>21||y>21){
        if (x<=21) {
            result = x;
        } else {
            result = y;
        }

    }else if (x<=21&&y<=21){
        if(x>=y){
            result = x;
        }else{
            result = y;
        }
    }

    return result;
}
function loneSum(a,b,c) {
    var result = "";
    if (a != b && b != c && a != c){
        result = (a + b + c);
    } else if (a==b && a==c){
        result = "0";
    } else if (a==b) {
        result =  c;
    }else if (b==c){
        result = a;
    }else if (a==c){
        result =b;
    }
    return result;
}

function tester() {
    document.getElementById("output").innerHTML += fizz_buzz(-5);
}