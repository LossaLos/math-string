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

function fibo() {
    const resDiv = document.getElementById('res');
    resDiv.innerHTML = '<input  class="input" type="text" id="input">'
                     + '<button class="btnn" id="customButton">Calc</button>';
    const customButton = document.getElementById('customButton');
    customButton.addEventListener('click', () => {
        let res = document.getElementById('ress'); 
        let index = parseInt(document.getElementById('input').value);
       
        if (index < 0) 
        {
            res.innerHTML = "Number must be positive.";
        } else if (isFibonacci(index)) 
        {
            res.innerHTML = `${index} is a Fibonacci number.`;
        } else 
        {
            res.innerHTML = `${index} is not a Fibonacci number.`;
        }
    });
}

function isPerfectSquare(n) 
{
    let sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

function isFibonacci(n) 
{
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

function nprime() {
    const resDiv = document.getElementById('res');
    resDiv.innerHTML = '<input  class="input" type="text" id="input">'
                     + '<button class="btnn" id="customButton">Calc</button>';
    const customButton = document.getElementById('customButton');
    customButton.addEventListener('click', () => {

        let res = document.getElementById('ress');
        let nb = parseInt(document.getElementById('input').value);
        
        let n = ft_find_next_prime(nb);

        res.innerHTML = "Next prime after " + nb + " is " + n;
    });
}

function	ft_is_prime(n)
{
	let 	i = 2;

	if (n <= 1)
    {
        return (0);
    }
	while (n % i != 0 && i <= n)
	{
        i++;
    }
	if (n > 1 && i >= n)
	{
        return (1);
    }
	else
	{
        return (0);
    }
}

function	ft_find_next_prime(n)
{
	let	i;
	i = ft_is_prime(n);
	if (i === 1)
	{
        n++;
    }
	while (ft_is_prime(n) === 0)
	{
        n++;
    }
	return (n);
}

function sqrt() {
    const resDiv = document.getElementById('res');
    resDiv.innerHTML = '<input  class="input" type="text" id="input">'
                     + '<button class="btnn" id="customButton">Calc</button>';
    const customButton = document.getElementById('customButton');
    customButton.addEventListener('click', () => {

        let res = document.getElementById('ress');
        let nb = parseFloat(document.getElementById('input').value);
        let squareRoot = Math.sqrt(nb);
        res.innerHTML = "Square root of " + nb + " is " + squareRoot.toFixed(2);
    });
}

function odd() {
    const resDiv = document.getElementById('res');
    resDiv.innerHTML = '<input  class="input" type="text" id="input">'
                     + '<button class="btnn" id="customButton">Calc</button>';
    const customButton = document.getElementById('customButton');
    customButton.addEventListener('click', () => {

        let res = document.getElementById('ress');
        let nb = parseFloat(document.getElementById('input').value);
        
        if ((nb % 2) == 0)
        {
            res.innerHTML = nb + " is odd"
        }
        else
        {
            res.innerHTML = nb + " is not odd"
        }
    });
}