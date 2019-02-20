// Execute when the DOM is fully loaded
$(document).ready(function() {
    $('.hiddenDefault').css('display', 'none');

    $('input:radio[name=otherUnity]').change(function() {
        if (this.value == 'yes') {
            $('.hiddenDefault').show();
        }
        else
        {
            $('.hiddenDefault').hide();
        }
    })
    
    //Take datas from application.py
    var data_from_python = '{{ data }}';
    var projects; 
    var counts;
    var i;
    alert(data_from_pyhon)
    var lenght = data_from_python.length;
    for (i = 0; i < lenght; i++) {
         project[i] = projects.push('{{ data[i][0] }}');
         alert(project[i]);
         count[i] = counts.push('{{ data[i][1]');
         alert(count[i]);
    } 
    
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});
    
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
    
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
    
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'risks');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);
    
    // Set chart options
    var options = {'title':'What are risks on my projects',
                   'width':400,
                   'height':300};
    
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    }
});
