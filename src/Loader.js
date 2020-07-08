class Loader {
  async fetchData(path) {
    this.json = await fetch(`${path}`).then(function (response) {
      return response.json();
    });
    console.log(this.json);
  }
}

export default Loader;
