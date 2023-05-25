export const LOGO_URL = "https://foodvilla.no/src/img/logo.png";

export const cloudinary_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";







export function filteredData(searchInput, restaurant) {
  const data = restaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return data;
}
