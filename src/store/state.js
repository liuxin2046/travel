let defaultCity = '厦门'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
export default {
  city: defaultCity
}