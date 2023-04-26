function age(){
Let day =document.getElementById('day').value;
Let month = document.getElementById('month').value; 
Let year = document.getElementById('year').value;

Let date = new Date();
Let get_day = date.getDate();
Let get_month = 1 + date.getMonth();
Let get_year = date.getFullYear();
Let all_month = [31,28,31,30,31,30,31,31,20,31,30,31];
if(day > get_day) { 
get_day = get_day-all_month[get_month -1];
get_day = get_day -1;
}
if(month > get_month){
get_month = get_month +12; 
get_year = get_year-1;
}
Let d= get_day-day;
Let m = get_month-month;
Let y = get_year - year;

document.getElementById('age').innerHTML 'Your Age is ' +y+
'Years <br> Next date of birth after' +m+ 'Months and'+d+ 'days';

}