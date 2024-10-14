let score = [22,24,28,44,56,67,87,99,97,86];
let PassCount = 0;
for (let i=0; i<score.length; i++)
{
  if (score[i] < 40)
  {
    score[i] = score[i] + 20;
  }
  if (score[i] > 90)
  {
    score[i] = 90;
  }
  if (score[i] > 50)
  {
    PassCount++;
  }
}
console.log(PassCount);
console.log(score);