var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54,90.0, 71.11, 80.01];
var range=[];
var count=[];
var he=function(){

	range[0]= parseFloat(document.getElementById("max").value);
	if(isNaN(range[0]))
		alert("'Max' range error");
	range[1]= parseFloat(document.getElementById("A+").value);
	if(range[0]<=range[1]|| typeof range[1] === 'string'){
		alert("'A+' range error");
		}
	range[2]= parseFloat(document.getElementById("A").value);
	if(range[1]<=range[2]){
		alert("'A' range error");
		}
	range[3]= parseFloat(document.getElementById("A-").value);
	if(range[2]<=range[3]){
		alert("'A-' range error");
		}
	range[4]= parseFloat(document.getElementById("B+").value);
	if(range[3]<=range[4]){
		alert("'B+' range error");
		}
	range[5]= parseFloat(document.getElementById("B").value);
	if(range[4]<=range[5]){
		alert("'B' range error");
		}
	range[6]= parseFloat(document.getElementById("B-").value);
	if(range[5]<=range[6]){
		alert("'B-' range error");
		}
	range[7]= parseFloat(document.getElementById("C+").value);
	if(range[6]<=range[7]){
		alert("'C+' range error");
		}
	range[8]= parseFloat(document.getElementById("C").value);
	if(range[7]<=range[8]){
		alert("'C' range error");
		}
	range[9]= parseFloat(document.getElementById("C-").value);
	if(range[8]<=range[9]){
		alert("'C-' range error");
		}
	range[10]= parseFloat(document.getElementById("D").value);
	if(range[9]<=range[10]){
		alert("'D' range error");
		}
	range[11]= parseFloat(document.getElementById("F").value);
	if(range[10]<=range[11]){
		alert("'F' range error");
		}
	var size = range.length
	while(size--)
   	count[size] = 0;
	for(i=0;i < grades.length; i++)	{
      	  for(k=1;k<range.length; k++){
            if(grades[i]>=range[k]&&grades[i]<range[k-1]){
                count[k-1]=count[k-1]+1;
                //count[i]=grades[i];
                break;
            }
          }
        }
};
he();
