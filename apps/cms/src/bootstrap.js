/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');

const set = require('lodash.set');
const mime = require('mime-types');

async function setPublicPermissions(newPermissions) {
  // Find the ID of the public role
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({
      where: {
        type: 'public',
      },
    });

  // Create the new permissions and link them to the public role
  const allPermissionsToCreate = [];
  Object.keys(newPermissions).map((controller) => {
    const actions = newPermissions[controller];
    const permissionsToCreate = actions.map((action) => {
      return strapi.query('plugin::users-permissions.permission').create({
        data: {
          action: `api::${controller}.${controller}.${action}`,
          role: publicRole.id,
        },
      });
    });
    allPermissionsToCreate.push(...permissionsToCreate);
  });
  await Promise.all(allPermissionsToCreate);
}

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

function getFileData(fileName) {
  const filePath = `./data/uploads/${fileName}`;

  // Parse the file metadata
  const size = getFileSizeInBytes(filePath);
  const ext = fileName.split('.').pop();
  const mimeType = mime.lookup(ext);

  return {
    path: filePath,
    name: fileName,
    size,
    type: mimeType,
  };
}

// Create an entry and attach files if there are any
async function createEntry({ model, entry, files }) {
  try {
    if (files) {
      for (const [key, file] of Object.entries(files)) {
        // Get file name without the extension
        const [fileName] = file.name.split('.');
        // Upload each individual file
        const uploadedFile = await strapi
          .plugin('upload')
          .service('upload')
          .upload({
            files: file,
            data: {
              fileInfo: {
                alternativeText: fileName,
                caption: fileName,
                name: fileName,
              },
            },
          });

        // Attach each file to its entry
        set(entry, key, uploadedFile[0].id);
      }
    }

    // Actually create the entry in Strapi
    const createdEntry = await strapi.entityService.create(
      `api::${model}.${model}`,
      {
        data: entry,
      }
    );
  } catch (e) {
    console.log('model', entry, e);
  }
}
