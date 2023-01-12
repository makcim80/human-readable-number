module.exports = function toReadable (number) {
  const baseNumbersArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const dozensArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (number < 20) {  
    return baseNumbersArr[number]
  } else if (number < 100 && !(number % 10)) {
    return dozensArr[Math.floor(number / 10)]
  } else if (number < 100) {
    return dozensArr[Math.floor(number / 10)] + ' ' + baseNumbersArr[(number % 10)]
  } else if ( !(number % 100)) {
    return baseNumbersArr[(Math.floor(number / 100))] + ' hundred'
  } else if (number % 100 < 20) {
    return baseNumbersArr[Math.floor(number / 100)] + ' hundred ' + baseNumbersArr[(number % 100)]
  } else if (!(number % 10)) {
    return baseNumbersArr[Math.floor(number / 100)] + ' hundred ' + dozensArr[Math.floor((number % 100) / 10)]
  } else {
    return baseNumbersArr[Math.floor(number / 100)] + ' hundred ' + dozensArr[Math.floor((number % 100) / 10)] + ' ' + baseNumbersArr[(number % 10)]
  }
}
