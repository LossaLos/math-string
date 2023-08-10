function isprime() {
    const resDiv = document.getElementById('res');
    resDiv.innerHTML = '<input  class="input" type="text" id="input">'
                     + '<button class="btnn" id="customButton">Calc</button>';
    const customButton = document.getElementById('customButton');
    customButton.addEventListener('click', () => {

        let	i = 2;
        let res = document.getElementById('ress');
        let nb = parseInt(document.getElementById('input').value);

        if (nb <= 1)
        {
            res.innerHTML = nb + " is invalid"
        }
        while (nb % i != 0 && i <= nb)
        {
            i++;
        }
        if (nb > 1 && i >= nb)
        {
            res.innerHTML = nb + " is prime"
        }
        else
        {
            res.innerHTML = nb + " is not prime"
        }
    });
}

function facto() {
    const resDiv = document.getElementById('res');
    resDiv.innerHTML = '<input  class="input" type="text" id="input">'
                     + '<button class="btnn" id="customButton">Calc</button>';
    const customButton = document.getElementById('customButton');
    customButton.addEventListener('click', () => {

        let res = document.getElementById('ress');
        let nb = parseInt(document.getElementById('input').value);
        let n = nb - 1;
        let r = nb;

        if(nb < 0)
        {
            res.innerHTML = "This factorial does not exist";
            return;
        }
        if (nb === 0)
        {
            res.innerHTML = "Factorial of " + r + " is " + "1";
            return;
        }
        else
        {
            while (n > 0)
	        {
	        	nb = nb * n;
		        n--;
	        }
        }
        res.innerHTML = "Factorial of " + r + " is " + nb;
    });
}

function power() {
    const resDiv = document.getElementById('res');
    resDiv.innerHTML = '<input  class="input" type="text" id="input">'
                     + '<p classe="inp">Power</p>'
                     + '<input  class="input" type="text" id="inputt">'
                     + '<button class="btnn" id="customButton">Calc</button>';
    const customButton = document.getElementById('customButton');
    customButton.addEventListener('click', () => {

        let res = document.getElementById('ress');
        let nb = parseInt(document.getElementById('input').value);
        let nb2 = parseInt(document.getElementById('inputt').value);

        let i = nb2;
        let q = nb;

	    while (i !== 1)
	    {
	    	nb = nb * q;
	    	i--;
	    }   
	    res.innerHTML = q + " power " + nb2 + " = " + nb;
    });
}
