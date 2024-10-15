let n = 4;
let m = 5;
let arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20]
]
let res = "";
for (let i=0; i<n; i++)
{
 
    if (i%2 === 0)
    {
        for (let j = m-1; j>=0; j--)
        {
            res = res + arr[i][j] + " ";
        }
    }
    else
    {
        for (let j=0; j<=m-1; j++)
        {
            res = res + arr[i][j] + " ";
        }
    }
}
console.log(res);