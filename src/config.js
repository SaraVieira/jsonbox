module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URL:
    process.env.MONGODB_URI || "mongodb://localhost:27017/jsonbox-io-dev",
};
