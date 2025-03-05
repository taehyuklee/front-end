import axios from 'axios'

axios.post('https://www.taylee.link/analysis/one-way-anova', {
  dataSetNm: "oddTtest",
  equalVarYn: true,
  grpFactor: "two_group",
  signLevel: 0.05,
  tukeyYn: true,
  userId: "admin"
}, 
{  
  timeout: 1000000,
  headers: {
    importFormat: 'exec'
  },
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});