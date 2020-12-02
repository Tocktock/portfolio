class Loader {
  async fetchData(path) {
    this.json = await fetch(`${path}`).then(function (response) {
      return response.json();
    });
  }
}

export default Loader;
