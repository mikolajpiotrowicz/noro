import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const api = new WooCommerceRestApi({
  url: "http://localhost",
  consumerKey: "ck_c9095b7eab7dcc69e069bb6abc9e1c9e714997ba",
  consumerSecret: "cs_948e892b3895deb6b9c0583a57ab8c53d9ad7e08",
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
