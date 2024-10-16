let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let totalrow = matrix.length;
let totalcol = matrix[0].length;
for (let i=totalrow-1; i>=0; i--)
{
console.log(matrix[i][0]);
}
for (let j=1; j<totalcol; j++)
{
console.log(matrix[0][j]);
}
for (let k=1; k<totalrow; k++)
{
console.log(matrix[k][totalcol-1]);
}
for (let l=totalcol-2; l>0; l--)
{
console.log(matrix[totalrow-1][l]);
}