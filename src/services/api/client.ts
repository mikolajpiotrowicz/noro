import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const api = new WooCommerceRestApi({
  url: "http://localhost",
  consumerKey: "ck_c9095b7eab7dcc69e069bb6abc9e1c9e714997ba",
  consumerSecret: "cs_948e892b3895deb6b9c0583a57ab8c53d9ad7e08",
  version: "wc/v3",
});

api
  .get("products", {
    per_page: 20, // 20 products per page
  })
  .then((response) => {
    // Successful request
    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);
    console.log("Response Data:", response.data);
    console.log("Total of pages:", response.headers["x-wp-totalpages"]);
    console.log("Total of items:", response.headers["x-wp-total"]);
  })
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    console.log("Response Status:", error.response.status);
    console.log("Response Headers:", error.response.headers);
    console.log("Response Data:", error.response.data);
  })
  .finally(() => {
    // Always executed.
  });

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
