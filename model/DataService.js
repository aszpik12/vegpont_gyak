class DataService {
  constructor() {}

  getData(apivegpont, callback, hibaCallback) {
    axios.get(apivegpont).then(function (response) {
        // handle success
 //       console.log("Válasz objektum", response);
 //       console.log("adatok", response.data.nevek);
 //       console.log("státusz", response.status);
 //       console.log("státusz szoveg", response.statusText);
 //       console.log("Válasz fejléc", response.headers);
 //       console.log("Válasz config", response.config);
        callback(response.data.nevek)
      })
      .catch(function (error) {
        // handle error
       hibaCallback(error)
      })
      .finally(function () {
        // always executed
      });
  }
}
export default DataService