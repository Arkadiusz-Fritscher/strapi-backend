module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
  },
  upload: {
    config: {
      jwt: {
        expiresIn: "30d",
      },
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
      },
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },

      actionOptions: {
        upload: {},
        uploadStream: {
          folder: "/eswe/",
          use_filename: true,
          allowed_formats: ["jpg", "png", "gif"],
          eval: "if (resource_info.filename.includes('thumbnail')) { upload_options['transformation'] = '' }",
        },
        delete: {},
      },
    },
  },
});
