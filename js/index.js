const os = require('os');
const maxThreadCount = os.cpus().length;
console.log(`Maksimum İş Parçacığı Sayısı: ${maxThreadCount}`);