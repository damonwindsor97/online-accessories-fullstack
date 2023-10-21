module.exports = {
    // PORT ENV
    port: process.env.PORT,
    // DATABASE ENV
    db: {
        serviceAccountKey: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        storageBucket: process.env.STORAGE_BUCKET_URL
    }
    // AUTH ENV
}