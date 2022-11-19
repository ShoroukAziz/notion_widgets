<!DOCTYPE html>
<!-- original:https://codepen.io/boudra/pen/raErwP -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>

    <style>
        body {
    font-family: 'Arial', sans-serif;
    background-color: #fff;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  flex-direction: column;
  min-height: 100%;
}

button::-moz-focus-inner { 
  border: 0;
  padding: 0;
}

#calendari {
    margin:  0 auto;
    /* height: 330px; */
    /* width: 350px; */
    font-size: 14px;
    /* box-shadow: 0px 1px 4px rgba(0,0,0,0.4); */
}
table {
    border-collapse: collapse;
    table-layout: fixed;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
    background-color: #fff;
    position: absolute;


}


td,th {
    text-align: center;
    background-color: #fff;
}
th {
    padding: 10px;
}
tr:first-child th {
    font-size: 20px;
    font-weight: bold;
    border-left: none;
    border-top: none;
}
td:last-child, th:last-child {
  border-right: none;
}

th {
    border-top: 1px solid rgba(0,0,0,0.1);
    border-right: 1px solid rgba(0,0,0,0.1);
    background-color: #9b59b6;
    color: #fff;
    text-shadow: 0px -1px 0px rgba(0,0,0,0.2);
    font-weight: normal;
}
th .any {
    font-size: 12px;
    font-weight: normal;
    display: block;
    text-shadow: none;
    color: rgba(0,0,0,0.4);
}
tr:nth-child(2) th {
    padding: 5px;
}
td {
    padding: 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
}
td>span {
    color: #555;
    padding: 10px;
    display: block;
    border: 2px solid transparent;
    transition: border 0.3s ease;
}

td:nth-child(even)>span {
    background-color: rgba(0,0,0,0.02);
}
td:last-child>span,
td:nth-child(6)>span {
    color: #9b59b6;
}
td.avui>span {
    font-weight: bold;
    background-color: #9b59b6;
    color: #fff;
    border: 2px solid rgba(0,0,0,0.1);
}
td.fora > span {
    opacity: 0.2;
}
td > span:hover {
    background: #a57cb6;
    color: #fff;
}
.boto-next, .boto-prev {
    background: rgba(0,0,0,0.1);
    color: #fff;
    font-family: inherit;
    border: none;
    font-size: 18px;
    font-weight: bold;
    text-shadow: inherit;
    padding: 2px 10px 5px 10px;
    line-height: 1px;
    height: 30px;
    width: 30px;
    vertical-align: middle;
    border-radius: 100%;
    position: absolute;
    top: 15px;
}
.boto-next { right: 10px; padding-left: 13px; }
.boto-prev { left: 10px; padding-right: 13px;}
.boto-next:hover,
.boto-prev:hover {
    background: rgba(0,0,0,0.2);
}
button:hover { cursor: pointer; }
button:focus { outline: none; }

footer {
  text-align: center;
  color: #ddd;
  font-weight: normal;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.2);
  font-size: 0.8em;
  padding: 20px;
}

footer a,
footer a:link {
  color: #fff;
  text-decoration: none;
}
    </style>
</head>
<body>
    <div class="">
        <div id="calendari"></div>
      </div>
      <script>
        var mesos = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var dies = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wedensday',
    'Thursday',
    'Friday',
    'Saturday'
];

var dies_abr = [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa'
];

Number.prototype.pad = function(num) {
    var str = '';
    for(var i = 0; i < (num-this.toString().length); i++)
        str += '0';
    return str += this.toString();
}

function calendari(widget, data)
{

    var original = widget.getElementsByClassName('actiu')[0];

    if(typeof original === 'undefined')
    {
        original = document.createElement('table');
        original.setAttribute('data-actual',
			      data.getFullYear() + '/' +
			      data.getMonth().pad(2) + '/' +
			      data.getDate().pad(2))
        widget.appendChild(original);
    }

    var diff = data - new Date(original.getAttribute('data-actual'));

    diff = new Date(diff).getMonth();

    var e = document.createElement('table');

    e.className = diff  === 0 ? 'amagat-esquerra' : 'amagat-dreta';
    e.innerHTML = '';

    widget.appendChild(e);

    e.setAttribute('data-actual',
                   data.getFullYear() + '/' +
                   data.getMonth().pad(2) + '/' +
                   data.getDate().pad(2))

    var fila = document.createElement('tr');
    var titol = document.createElement('th');
    titol.setAttribute('colspan', 7);

    var boto_prev = document.createElement('button');
    boto_prev.className = 'boto-prev';
    boto_prev.innerHTML = '&#9666;';

    var boto_next = document.createElement('button');
    boto_next.className = 'boto-next';
    boto_next.innerHTML = '&#9656;';

    titol.appendChild(boto_prev);
    titol.appendChild(document.createElement('span')).innerHTML = 
        mesos[data.getMonth()] + '<span class="any">' + data.getFullYear() + '</span>';

    titol.appendChild(boto_next);

    boto_prev.onclick = function() {
        data.setMonth(data.getMonth() - 1);
        calendari(widget, data);
    };

    boto_next.onclick = function() {
        data.setMonth(data.getMonth() + 1);
        calendari(widget, data);
    };

    fila.appendChild(titol);
    e.appendChild(fila);

    fila = document.createElement('tr');

    for(var i = 1; i < 7; i++)
    {
        fila.innerHTML += '<th>' + dies_abr[i] + '</th>';
    }

    fila.innerHTML += '<th>' + dies_abr[0] + '</th>';
    e.appendChild(fila);

    /* Obtinc el dia que va acabar el mes anterior */
    var inici_mes =
        new Date(data.getFullYear(), data.getMonth(), -1).getDay();

    var actual = new Date(data.getFullYear(),
			  data.getMonth(),
			  -inici_mes);

    /* 6 setmanes per cobrir totes les posiblitats
     *  Quedaria mes consistent alhora de mostrar molts mesos 
     *  en una quadricula */
    for(var s = 0; s < 6; s++)
    {
        var fila = document.createElement('tr');

        for(var d = 1; d < 8; d++)
        {
	    var cela = document.createElement('td');
	    var span = document.createElement('span');

	    cela.appendChild(span);

            span.innerHTML = actual.getDate();

            if(actual.getMonth() !== data.getMonth())
                cela.className = 'fora';

            /* Si es avui el decorem */
            if(data.getDate() == actual.getDate() &&
	       data.getMonth() == actual.getMonth())
		cela.className = 'avui';

	    actual.setDate(actual.getDate()+1);
            fila.appendChild(cela);
        }

        e.appendChild(fila);
    }

    setTimeout(function() {
        e.className = 'actiu';
        original.className +=
        diff === 0 ? ' amagat-dreta' : ' amagat-esquerra';
    }, 20);

    original.className = 'inactiu';

    setTimeout(function() {
        var inactius = document.getElementsByClassName('inactiu');
        for(var i = 0; i < inactius.length; i++)
            widget.removeChild(inactius[i]);
    }, 1000);

}

calendari(document.getElementById('calendari'), new Date());

    </script>
</body>
</html>
