function filteredData(searchInput, restaurant) {
    const data = restaurant.filter((res) =>
      res.data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return data;
  }
  export {filteredData}