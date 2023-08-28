

export default function getNowdate(){
  const arr = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Ноябрь',
    'Декабрь',
  ];
  

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() + 'th';
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();

  if(hour < 10){
    return arr[month] + ' ' + day + ' ' + year + ',' + ' ' + '0' +hour + ':' + minutes + ':' + second
  }else if(minutes < 10){
    return arr[month] + ' ' + day + ' ' + year + ',' + ' ' +hour + ':' + '0' + minutes + ':' + second
  }else if(second < 10){
    return arr[month] + ' ' + day + ' ' + year + ',' + ' ' +hour + ':' + minutes + ':' + '0' + second
  }


  return arr[month] + ' ' + day + ' ' + year + ',' + ' ' + hour + ':' + minutes + ':' + second
}