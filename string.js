
function strlen()
{
    let txt = document.getElementById("txt").value;
    let i = 0;

    while(txt[i] !== undefined)
    {
        i++;
    }
    document.getElementById("res").innerHTML = i + " char in your sentence";
}

function countWords ()
{
    let txt = document.getElementById("txt").value;
    let i = 0;
    let cpt = 0

    if((txt[0] >= 'a' && txt[0] <= 'z') || (txt[0] >= 'A' && txt[0] <= 'Z'))
    {
        cpt++;
    }

    while(txt[i] !== undefined)
    {
        if((txt[i] == ' ' || txt[i] == '!' || txt[i] == '.' || txt[i] == '?') && ((txt[i + 1] >= 'a' && txt[i + 1] <= 'z') || (txt[i + 1] >= 'A' && txt[i + 1] <= 'Z')))
        {
            cpt++;
        }
        i++;
    }
    document.getElementById("res").innerHTML = cpt + " words in your sentence";
}

function lowercase()
{
    let str = document.getElementById("txt").value;
    let i = 0;
    let newStr = ''
    
    while(str[i])
    {
        if(str[i] >= 'A' && str[i] <= 'Z')
        {
            newStr += String.fromCharCode(str.charCodeAt(i) + 32);
        }
        else 
        {
            newStr += str[i];
        }
        i++;
    }
    document.getElementById("res").innerHTML = newStr;
}

function    uppercase ()
{
    let str = document.getElementById("txt").value;
    let i = 0;
    let newStr = ''
    
    while(str[i])
    {
        if(str[i] >= 'a' && str[i] <= 'z')
        {
            newStr += String.fromCharCode(str.charCodeAt(i) - 32);
        }
        else 
        {
            newStr += str[i];
        }
        i++;
    }
    document.getElementById("res").innerHTML = newStr;
}

function    capitalize ()
{
    let i = 0;
    let str = document.getElementById("txt").value.toLowerCase();
    let newStr = ''; 
    
    
    if(str[0] >= 'a' && str[0] <= 'z')
    {
        newStr += String.fromCharCode(str.charCodeAt(i) - 32);
    }

    while(str[i])
    {
        if(str[i] == ' ' && (str[i + 1] >= 'a' && str[i + 1] <= 'z'))
        {
            newStr += String.fromCharCode(str.charCodeAt(i + 1) - 32);
        }
        else if(str[i + 1] !== undefined)
        {
            newStr += str[i + 1];
        }
        i++;
    }
    document.getElementById("res").innerHTML = newStr;
}

function   fcapitalize()
{
    let i = 0;
    let str = document.getElementById("txt").value.toLowerCase();
    let newStr = ''; 

    if(str[0] >= 'a' && str[0] <= 'z')
    {
        newStr += String.fromCharCode(str.charCodeAt(i) - 32);
    }
    while(str[i + 1] !== undefined)
    {
        if((str[i] === '.' || str[i] === '!' || str[i] === '?') && str[i + 1] === ' ' && (str[i + 2] >= 'a' && str[i + 2] <= 'z'))
        {
            newStr += str[i] + ' ' + String.fromCharCode(str.charCodeAt(i + 2) - 32);
            i += 2
        }
        if((str[i] === '.' || str[i] === '!' || str[i] === '?') && (str[i + 1] >= 'a' && str[i + 1] <= 'z'))
        {
            newStr += String.fromCharCode(str.charCodeAt(i + 1) - 32)
            i++;
        }
        else
        {
            newStr += str[i + 1];
            i++;
        }
    }
    document.getElementById("res").innerHTML = newStr;
}