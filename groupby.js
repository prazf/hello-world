var obj = [
    { 'dept': 'Content', 'salary': 150 },
    { 'dept': 'Technology', 'salary': 200 },
    { 'dept': 'Content', 'salary': 200 },
    { 'dept': 'Technology', 'salary': 450 }
];

var holder = {};

obj.forEach(function (d) {
    if(holder.hasOwnProperty(d.dept)) {
       holder[d.dept] = holder[d.dept] + d.salary;
    } else {       
       holder[d.dept] = d.salary;
    }
});

console.log(obj2);

var obj2 = [];

for(var prop in holder) {
    obj2.push({dept: prop, salary: holder[prop]});   
}

console.log(obj2);
