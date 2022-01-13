import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "http://serwer72845.lh.pl/",
  consumerKey: "ck_520cf0d836a070b6b9bd0be1acd554333dcd2914",
  consumerSecret: "cs_de96e46018c164f8fc5b98ca96b59903ca1e97e7",
  version: "wc/v3",
});











export const getProductVariations = async (id: number) => {
  try {
    const response = await api.get(`products/${id}/variations`, {
      per_page: 20,
    });

    return response.data;
  } catch (error) {
    console.error("API ERROR");
    console.log(error.response);
    return [];
  }
};
export const getProducts = async (filters) => {
  try {
    const response = await api.get("products", {
      per_page: 20, // 20 products per page
      ...filters,
    });

    return response.data;
  } catch (error) {
    console.error("API ERROR");
    console.log(error.response);
    return [];
  }
};

const data = {
  payment_method: "przelewy24",
  payment_method_title: "Przelewy24",
  billing: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "PL",
    email: "john.doe@example.com",
    phone: "(555) 555-5555",
  },
  shipping: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "PL",
  },
  line_items: [
    {
      product_id: 349,
      quantity: 1,
    },
  ],
  shipping_lines: [
    {
      method_id: "flat_rate",
      method_title: "Flat Rate",
      total: "10.00",
    },
  ],
};
export const createOrder = () =>
  api
    .post("orders", data)
    .then((response) => {
      const url = `serwer72845.lh.pl/zamowienie/order-pay/${response.data.number}/?key=${response.data.order_key}`;
      console.log(response.data);
      console.log(url);
      window.open(url);
    })
    .catch((error) => {
      console.log(error.response.data);
    });

// @ts-ignore
window.windowOrderCreator = createOrder;
console.log("hello");
