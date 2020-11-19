import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "http://serwer72845.lh.pl/",
  consumerKey: "ck_520cf0d836a070b6b9bd0be1acd554333dcd2914",
  consumerSecret: "cs_de96e46018c164f8fc5b98ca96b59903ca1e97e7",
  version: "wc/v3",
});

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
  payment_method: "bacs",
  payment_method_title: "Direct Bank Transfer",
  set_paid: true,
  billing: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US",
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
    country: "US",
  },
  line_items: [
    {
      product_id: 11,
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

api
  .post("orders", data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
