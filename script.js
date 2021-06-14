var pcNumbers = [];
var rightNums = [];
var userNums = [];

while (pcNumbers.length < 5) {

    var randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!pcNumbers.includes(randomNumber)) {
        pcNumbers.push(randomNumber);
    }
}

alert('Memorizza questi 5 numeri: ' + pcNumbers);

setTimeout(function () {

    while (userNums.length < pcNumbers.length) {
        var userNum = parseInt(prompt('Inserisci un numero'));
        // userNums.push(userNum);


        if (isNaN(userNum)) {
            alert('Devi inserire un numero!');
            var userNum = parseInt(prompt('Inserisci un numero'));
        } else {
            userNums.push(userNum);
        }

        if (pcNumbers.includes(userNum)) {
            rightNums.push(userNum);
        }
    };

    if (rightNums.length > 0) {

        document.getElementById('result').innerHTML = 'Hai indovinato ' + rightNums.length + ' numeri: ';

        var i = 0;
        while (i < rightNums.length) {

            document.getElementById('result').innerHTML += rightNums[i] + ', ';
            i++;
        }
    } else {

        document.getElementById('result').innerHTML = 'Ops! Non hai indovinato nessun numero!';

    }


}, 3000);








