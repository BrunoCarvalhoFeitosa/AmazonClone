module.exports = {
  images: {
    domains: [
      "/",
      "fakestoreapi.com"
    ],
  },
  env: {
    stripe_public_key: `${process.env.STRIPE_PUBLISHABLE_KEY}`
  },
};